'use strict';

const httpsTimer = require('https-timer');

function timeRequest(url) {
  return httpsTimer.getAsync(url).then(formatOutput);
};

function formatOutput(response) {
  const phases = getPhases(response.timing.durations);
  const longestName = Math.max(...phases.map(phase => phase.name.length)) + 10;
  const longestTime = Math.max(8, Math.max(...phases.map(phase => phase.time.length)));
  const tableHeader = `${'Request Phase'.padEnd(longestName)}Duration`;
  const tableSpacing = '~'.repeat(longestName + longestTime);
  const phaseRows = phases.map(phase => {
    return `${phase.name.padEnd(longestName)}${phase.time}`;
  });
  const totalRow = phaseRows.pop();

  return [
    '',
    tableHeader,
    tableSpacing,
    phaseRows.join('\n'),
    tableSpacing,
    totalRow,
    ''
  ].join('\n');
}

function getPhases(durations) {
  return [
    { name: 'Socket Open', key: 'socketOpen' },
    { name: 'DNS Lookup', key: 'dnsLookup' },
    { name: 'TCP Connection', key: 'tcpConnection' },
    { name: 'TLS Handshake', key: 'tlsHandshake' },
    { name: 'Time to First Byte', key: 'firstByte' },
    { name: 'Content Transfer', key: 'contentTransfer' },
    { name: 'Total', key: 'total' }
  ].map(phase => ({
    time: `${durations[phase.key].toFixed(2)} ms`,
    ...phase
  }));
}

module.exports = timeRequest;
