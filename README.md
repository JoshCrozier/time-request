# time-request

[![npm package](https://nodei.co/npm/time-request.png?downloads=true)](https://www.npmjs.com/package/time-request)

[![NPM version](https://img.shields.io/npm/v/time-request.svg?style=flat-square)](https://www.npmjs.com/package/time-request)
[![Build status](https://img.shields.io/travis/JoshCrozier/time-request.svg?style=flat-square)](https://travis-ci.org/JoshCrozier/time-request)
[![Coverage](https://img.shields.io/codecov/c/github/JoshCrozier/time-request.svg?style=flat-square)](https://codecov.io/github/JoshCrozier/time-request)
[![Vulnerabilities](https://snyk.io/test/npm/time-request/badge.svg?style=flat-square)](https://snyk.io/test/npm/time-request)

A command-line utility for timing requests.

## Installation

    $ npm install -g time-request

## Usage

    $ time-request https://google.com

Example Output:

```
Request Phase               Duration
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Socket Open                 1.61 ms
DNS Lookup                  34.15 ms
TCP Connection              47.69 ms
TLS Handshake               102.25 ms
Time to First Byte          67.23 ms
Content Transfer            1.69 ms
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Total                       254.62 ms
```

## License

[MIT License](https://opensource.org/licenses/MIT)

Copyright (c) 2019 [Josh Crozier](https://joshcrozier.com)