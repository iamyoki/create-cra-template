"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.clear = exports.usage = void 0;
const inquirer_1 = require("inquirer");
const pkg_dir_1 = __importDefault(require("pkg-dir"));
const clearPackageFileField_1 = __importDefault(require("./clearPackageFileField"));
const clearTemplateFiles_1 = __importDefault(require("./clearTemplateFiles"));
const generateTemplateFiles_1 = __importDefault(require("./generateTemplateFiles"));
const generateTemplateJson_1 = __importDefault(require("./generateTemplateJson"));
async function usage(argv) {
    const { clear } = argv;
    const answer = await inquirer_1.prompt({
        type: 'confirm',
        name: 'continue',
        message: clear
            ? 'Continue to clear previous exports before generate template from current project?'
            : 'Continue to generate template from current project?'
    });
    if (!answer.continue)
        return;
    const rootDir = await pkg_dir_1.default();
    if (clear)
        await clearTemplateFiles_1.default(rootDir);
    await generateTemplateJson_1.default(rootDir);
    await generateTemplateFiles_1.default(rootDir);
}
exports.usage = usage;
async function clear(argv) {
    const { all } = argv;
    const rootDir = await pkg_dir_1.default();
    await clearTemplateFiles_1.default(rootDir);
    if (all)
        await clearPackageFileField_1.default(rootDir);
}
exports.clear = clear;
