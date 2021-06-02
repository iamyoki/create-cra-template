#!/usr/bin/env node
const build = require('../build')

;(async () => {
  await build.generateTemplateJson()
  await build.generateTemplateFiles()
})()
