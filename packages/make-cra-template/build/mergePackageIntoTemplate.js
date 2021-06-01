"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_extra_1 = __importDefault(require("fs-extra"));
const jsonfile_1 = __importDefault(require("jsonfile"));
const path_1 = __importDefault(require("path"));
const signale_1 = __importDefault(require("signale"));
async function mergePackageIntoTemplate(outputPath) {
    // Get package.json file path
    const packageFilePath = path_1.default.join(process.cwd(), 'package.json');
    // Check file exist
    try {
        await fs_extra_1.default.access(packageFilePath, fs_extra_1.default.constants.F_OK);
    }
    catch {
        return signale_1.default.error('Cannot find package.json file in the current folder.');
    }
    // Read Package.json and delete keys from black list
    const packageJson = await jsonfile_1.default.readFile(packageFilePath);
    const { name, version, private: p, scripts, dependencies, devDependencies, ...rest } = packageJson;
    delete dependencies['react'];
    delete dependencies['react-dom'];
    delete dependencies['react-scripts'];
    delete dependencies['make-cra-template'];
    delete devDependencies['make-cra-template'];
    const templateJson = {
        dependencies,
        devDependencies,
        ...rest
    };
    await fs_extra_1.default.ensureDir(path_1.default.join(process.cwd(), 'build-template'));
    await jsonfile_1.default.writeFile(outputPath || path_1.default.join(process.cwd(), 'build-template', 'template.json'), templateJson, { spaces: 2 });
    signale_1.default.success('template.json generated');
}
exports.default = mergePackageIntoTemplate;
