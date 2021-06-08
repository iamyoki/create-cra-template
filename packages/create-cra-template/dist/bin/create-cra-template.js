#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const yargs_1 = __importDefault(require("yargs"));
const helpers_1 = require("yargs/helpers");
const package_json_1 = __importDefault(require("../../package.json"));
const commands_1 = require("../commands");
yargs_1.default(helpers_1.hideBin(process.argv))
    .usage('$0', '🕹 📤' + package_json_1.default.description, {}, commands_1.usage)
    .option('clear', {
    alias: 'c',
    desc: 'Clear previous exports before generation',
    type: 'boolean'
})
    .alias('help', 'h')
    .alias('version', 'v').argv;
