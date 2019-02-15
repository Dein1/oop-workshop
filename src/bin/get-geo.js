#! /usr/bin/env node

import program from 'commander';
import printGeo from '../Geodata';

program
  .version('0.1.0')
  .description('Get geo information by ip.')
  .arguments('[ip]')
  .action((ip = '') => printGeo(ip))
  .parse(process.argv);
