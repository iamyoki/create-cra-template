#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const yargs_1 = __importDefault(require("yargs"));
const package_json_1 = __importDefault(require("../../package.json"));
yargs_1.default(process.argv.slice(0))
    .usage('$0', '🕹 📤' + package_json_1.default.description, {}, () => console.log('success'))
    .alias('help', 'h')
    .alias('version', 'v').argv;
