"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_extra_1 = __importDefault(require("fs-extra"));
const globby_1 = __importDefault(require("globby"));
const path_1 = __importDefault(require("path"));
const signale_1 = __importDefault(require("signale"));
async function generateTemplateFiles(outputDir = path_1.default.join(process.cwd(), 'build-template')) {
    await fs_extra_1.default.ensureDir(path_1.default.join(outputDir, 'template'));
    const inputDir = process.cwd();
    for await (const p of globby_1.default.stream([
        '*',
        '!package-lock.json',
        '!yarn.lock',
        `!${path_1.default.basename(outputDir)}`
    ], {
        onlyFiles: false,
        dot: true,
        deep: 1,
        gitignore: true
    })) {
        await fs_extra_1.default.copy(path_1.default.join(process.cwd(), p.toString()), path_1.default.resolve(outputDir, 'template', p.toString()), {
            overwrite: true,
            recursive: true
        });
        signale_1.default.success(`Generated: template/${path_1.default.basename(p.toString())}`);
    }
}
exports.default = generateTemplateFiles;