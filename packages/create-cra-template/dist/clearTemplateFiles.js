"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_extra_1 = __importDefault(require("fs-extra"));
const path_1 = __importDefault(require("path"));
const signale_1 = __importDefault(require("signale"));
async function clearTemplateFiles(targetDir = process.cwd()) {
    // Remove template.json
    try {
        await fs_extra_1.default.rm(path_1.default.join(targetDir, 'template.json'));
        signale_1.default.success('🗑 Remove elder template.json');
    }
    catch { }
    // Remove template direcotry
    try {
        const fileCounts = (await fs_extra_1.default.readdir(path_1.default.join(targetDir, 'template')))
            .length;
        await fs_extra_1.default.rm(path_1.default.join(targetDir, 'template'), { recursive: true });
        signale_1.default.success(`🗑 Remove elder template/ with ${fileCounts} files in`);
    }
    catch { }
}
exports.default = clearTemplateFiles;
