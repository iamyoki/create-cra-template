#!/usr/bin/env node

import yargs from 'yargs'
import pkg from '../../package.json'

yargs(process.argv.slice(0))
  .usage('$0', '🕹 📤' + pkg.description, {}, () => console.log('success'))
  .alias('help', 'h')
  .alias('version', 'v').argv
