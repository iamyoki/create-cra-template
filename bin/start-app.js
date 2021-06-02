#!/usr/bin/env node
const { spawn } = require('child_process')
const fs = require('fs-extra')
const inquirer = require('inquirer')
const path = require('path')

const dirs = fs.readdirSync(path.join(__dirname, '../packages/templates'))

inquirer
  .prompt({
    name: 'cra-template',
    type: 'list',
    message: 'Please select a cra-template to start',
    default: dirs[0],
    choices: dirs
  })
  .then(answer => {
    const scope = answer['cra-template']
    spawn('lerna', ['run', 'start', '--scope', scope], {
      shell: true,
      stdio: 'inherit'
    })
  })
