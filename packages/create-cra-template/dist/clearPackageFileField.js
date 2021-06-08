"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonfile_1 = __importDefault(require("jsonfile"));
const path_1 = __importDefault(require("path"));
const signale_1 = __importDefault(require("signale"));
async function clearPackageFileField(pkgDir = process.cwd()) {
    const packageJson = await jsonfile_1.default.readFile(path_1.default.join(pkgDir, 'package.json'));
    if (!packageJson?.files)
        return;
    const { files } = packageJson;
    const filterList = ['template', 'template.json'];
    // Return if nothing to clear
    if (!files.some((f) => filterList.includes(f)))
        return;
    await jsonfile_1.default.writeFile(path_1.default.join(pkgDir, 'package.json'), {
        ...packageJson,
        files: files.filter((f) => !filterList.includes(f))
    });
    signale_1.default.success('Cleared package.json files field');
}
exports.default = clearPackageFileField;
