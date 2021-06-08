"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_extra_1 = __importDefault(require("fs-extra"));
const jsonfile_1 = __importDefault(require("jsonfile"));
const path_1 = __importDefault(require("path"));
const signale_1 = __importDefault(require("signale"));
async function generateTemplateJson(outputDir = path_1.default.join(process.cwd())) {
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
    const { name, version, files, private: p, scripts, dependencies, devDependencies, gitHead, ...rest } = packageJson;
    // Remove unused fields
    if (dependencies) {
        delete dependencies['react'];
        delete dependencies['react-dom'];
        delete dependencies['react-scripts'];
        delete dependencies['create-cra-template'];
    }
    if (devDependencies) {
        delete devDependencies['create-cra-template'];
    }
    const templateJson = {
        package: {
            dependencies,
            devDependencies,
            ...rest
        }
    };
    await fs_extra_1.default.ensureDir(outputDir || path_1.default.join(process.cwd(), 'build-template'));
    // Write template.json
    await jsonfile_1.default.writeFile(path_1.default.join(outputDir, 'template.json'), templateJson, { spaces: 2 });
    signale_1.default.success('Generated: template.json');
    // Modify pacakge.json files
    await jsonfile_1.default
        .writeFile(packageFilePath, {
        ...(await jsonfile_1.default.readFile(packageFilePath)),
        files: [
            ...new Set([packageJson.files]
                .flat()
                .concat(['template.json', 'template'])
                .filter(item => item))
        ]
    }, { spaces: 2 })
        .catch(err => {
        console.error(err);
    });
    signale_1.default.star('Modified: package.json files field');
}
exports.default = generateTemplateJson;
