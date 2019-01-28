'use strict';

const port = 8080;
const mockEndpoint = `http://localhost:${port}`;
const mockEndpointError = `http://localhost`;
const HELP_OUTPUT = `Usage: cli [command]

Options:
  -V, --version    Show version number                       [boolean]
  -u, --url <url>  Specify a URL for the timed request       [string]
  -h, --help       Show help text                            [boolean]
`;

const TIMING_OUTPUT = `
Request Phase               Duration
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Socket Open                 0.00 ms
DNS Lookup                  0.00 ms
TCP Connection              0.00 ms
TLS Handshake               0.00 ms
Time to First Byte          0.00 ms
Content Transfer            0.00 ms
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Total                       0.00 ms
`;

module.exports = {
  port,
  mockEndpoint,
  mockEndpointError,
  HELP_OUTPUT,
  TIMING_OUTPUT
};
