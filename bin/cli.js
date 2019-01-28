#!/usr/bin/env node

'use strict';

const minimalCli = require('minimal-cli');
const timeRequest = require('./time-request');

const cli = minimalCli({
  flags: [
    ['-u, --url <url>', 'string', 'Specify a URL for the timed request']
  ]
});

const writeOutput = output => process.stdout.write(output);
const hasInput = cli.commands.length > 0 || Object.keys(cli.flags).length > 0;
const url = cli.commands[0] || cli.flags.url;

if (!hasInput) {
  writeOutput(cli.help);
} else {
  timeRequest(url)
    .then(writeOutput)
    .catch(error => {
      writeOutput(`Unable to make request: ${error}\n`);
    });
}
