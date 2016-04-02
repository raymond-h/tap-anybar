#!/usr/bin/env node

import parser from 'tap-parser';
import anybar from 'anybar';
import minimist from 'minimist';

const argv = minimist(process.argv.slice(2), {
    default: { port: 1738 },
    alias: { p: 'port' }
});

anybar('orange', { port: argv.port });

process.stdin.pipe(process.stdout);

process.stdin.pipe(parser(results => {
    anybar(results.ok ? 'green' : 'exclamation', { port: argv.port });
}));
