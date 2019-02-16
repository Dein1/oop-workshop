#! /usr/bin/env node

import program from 'commander';
import printWeather from '../printWeather';

program
  .version('0.1.0')
  .description('Get weather information by city.')
  .option('-S, --service [name]', 'Choose service')
  .arguments('[city]')
  .action(async city => console.log(await printWeather(program.service, city)))
  .parse(process.argv);
