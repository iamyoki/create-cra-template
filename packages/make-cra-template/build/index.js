"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable import/no-extraneous-dependencies */
const jsonfile_1 = require("jsonfile");
const path_1 = __importDefault(require("path"));
const signale_1 = __importDefault(require("signale"));
const package_json_1 = __importDefault(require("../../template-app/package.json"));
const TEMPLATE_FILE_PATH = path_1.default.join(__dirname, './template.json');
async function mergePackageIntoTemplate() {
    const { 'react-dom': rd, react, 'react-scripts': rs, ...dependenciesFromPackage } = package_json_1.default.dependencies;
    const { devDependencies } = package_json_1.default;
    // template.json conf
    const template = {
        package: {
            dependencies: dependenciesFromPackage,
            devDependencies,
            eslintConfig: {
                extends: ['react-app', 'react-app/jest']
            }
        }
    };
    await jsonfile_1.writeFile(TEMPLATE_FILE_PATH, template).catch(signale_1.default.error);
    signale_1.default.success(' template.json generated');
}
mergePackageIntoTemplate();
