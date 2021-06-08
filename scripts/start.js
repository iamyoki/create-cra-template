#!/usr/bin/env node
const concurrently = require('concurrently')
const fs = require('fs-extra')
const { gitignore } = require('globby')
const inquirer = require('inquirer')
const path = require('path')

;(async () => {
  const isIgnored = await gitignore()
  const dirs = (
    await fs.readdir(path.join(__dirname, '../packages/templates'))
  ).filter(path => !isIgnored(path))

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

      concurrently([
        'yarn:start:cct',
        'yarn:start:templates',
        { command: `lerna run start --scope ${scope}`, name: 'cra-template' }
      ])
    })
})()
