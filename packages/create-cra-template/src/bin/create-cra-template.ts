#!/usr/bin/env node

import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'
import pkg from '../../package.json'
import { usage } from '../commands'

yargs(hideBin(process.argv))
  .usage('$0', '🕹 📤' + pkg.description, {}, usage)
  .option('clear', {
    alias: 'c',
    desc: 'Clear previous exports before generation',
    type: 'boolean'
  })
  .alias('help', 'h')
  .alias('version', 'v').argv
