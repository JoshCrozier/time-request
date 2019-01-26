#!/usr/bin/env node

'use strict';

const minimalCli = require('minimal-cli');
const timeRequest = require('./time-request');

const cli = minimalCli({
  flags: [
    ['-u, --url <url>', 'string', 'Specify a URL for the timed request']
  ]
});

const url = cli.commands[0] || cli.flags.url;
const writeOutput = output => process.stdout.write(output + '\n');

timeRequest(url)
  .then(writeOutput)
  .catch(writeOutput);
