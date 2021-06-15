#!/usr/bin/env node

import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'
import pkg from '../../package.json'
import { clear, usage } from '../commands'

yargs(hideBin(process.argv))
  .usage(`$0 \n\n 🕹 📤 ${pkg.description}  `)
  .command('$0', 'Generate template', {}, usage)
  .option('clear', {
    alias: 'c',
    desc: 'Clear previous exports before generation',
    type: 'boolean'
  })
  .command(
    'clear [--all]',
    'Clear previous exports',
    y => {
      y.positional('all', {
        alias: 'a',
        desc: 'Clear all previous exports including package.json files field.'
      })
    },
    clear
  )
  .alias('help', 'h')
  .alias('version', 'v').argv
