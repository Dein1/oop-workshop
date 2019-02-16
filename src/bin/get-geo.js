#! /usr/bin/env node

import program from 'commander';
import printGeo from '../index';

program
  .version('0.1.0')
  .description('Get geo information by ip.')
  .arguments('[ip]')
  .action(async (ip = '') => console.log(await printGeo(ip)))
  .parse(process.argv);
