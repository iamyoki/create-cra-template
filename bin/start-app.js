#!/usr/bin/env node
const { spawn } = require('child_process')
const fs = require('fs-extra')
const { gitignore } = require('globby')
const inquirer = require('inquirer')
const path = require('path')

;(async () => {
  const isIgnored = await gitignore()
  const dirs = (
    await fs.readdir(path.join(__dirname, '../packages/templates'))
  ).filter(path => !isIgnored(path))

  const configFile = path.join(__dirname, './.cache.config.json')
  fs.ensureFileSync(configFile)
  const config = fs.readJsonSync(configFile, {
    throws: false
  })

  inquirer
    .prompt({
      name: 'cra-template',
      type: 'list',
      message: 'Please select a cra-template to start',
      default: config?.lastTemplate || dirs[0],
      choices: dirs
    })
    .then(answer => {
      const scope = answer['cra-template']

      fs.writeJsonSync(configFile, {
        lastTemplate: scope
      })

      spawn('lerna', ['run', 'start', '--scope', scope], {
        shell: true,
        stdio: 'inherit'
      })
    })
})()
