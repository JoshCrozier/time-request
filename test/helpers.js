'use strict';

const path = require('path');
const exec = require('child_process').exec;

const config = require('./config');

function execAsync(argv = '') {
  return new Promise((resolve, reject) => {
    const cli = path.resolve(__dirname, './../bin/cli.js');

    exec(`${cli} ${argv}`, (error, stdout) => {
      if (!error) {
        resolve(stdout);
      } else {
        reject(error);
      }
    });
  });
}

function createServer() {
  return require('http').createServer((request, response) => {
    response.statusCode = 200;
    response.setHeader('Content-Type', 'application/json');
    response.end(JSON.stringify({}));
  }).listen(config.port);
}

module.exports = {
  execAsync,
  createServer
};
