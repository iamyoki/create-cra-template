#!/usr/bin/env node

const yargs = require('yargs')
const { hideBin } = require('yargs/helpers')
const pkg = require('../package.json')

yargs(hideBin(process.argv)).usage('$0', pkg.description).argv
