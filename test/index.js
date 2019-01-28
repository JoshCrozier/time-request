'use strict';

const expect = require('chai').expect;
const helpers = require('./helpers');
const config = require('./config');
const execAsync = helpers.execAsync;
const server = helpers.createServer();

describe('time-request', () => {
  after(() => { server.close(); });

  it('should support command-line execution', done => {
    execAsync(config.mockEndpoint).then(output => {
      expect(output).to.be.a('string');

      done();
    }).catch(done);
  });

  it('should output help information when executed with the --help flag', done => {
    execAsync('--help').then(output => {
      expect(output).to.be.a('string');
      expect(output).to.equal(config.HELP_OUTPUT);

      done();
    }).catch(done);
  });

  it('should output help information if executed without any commands or flags', done => {
    execAsync().then(output => {
      expect(output).to.be.a('string');
      expect(output).to.equal(config.HELP_OUTPUT);

      done();
    }).catch(done);
  });

  it('should return a standard error message if the request fails', done => {
    execAsync(config.mockEndpointError).then(output => {
      expect(output).to.be.a('string');
      expect(output).to.contain('Unable to make request');

      done();
    }).catch(done);
  });

  it('should output a table with the request phase durations on success', done => {
    execAsync(config.mockEndpoint).then(output => {
      output = output.replace(/[\d+.]+/g, '0.00');

      expect(output).to.be.a('string');
      expect(output).to.equal(config.TIMING_OUTPUT);

      done();
    }).catch(done);
  });
});
