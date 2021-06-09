"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.clearTemplateFiles = exports.clearPackageFileField = exports.generateTemplateFiles = exports.generateTemplateJson = void 0;
const generateTemplateFiles_1 = __importDefault(require("./generateTemplateFiles"));
exports.generateTemplateFiles = generateTemplateFiles_1.default;
const generateTemplateJson_1 = __importDefault(require("./generateTemplateJson"));
exports.generateTemplateJson = generateTemplateJson_1.default;
const clearPackageFileField_1 = __importDefault(require("./clearPackageFileField"));
exports.clearPackageFileField = clearPackageFileField_1.default;
const clearTemplateFiles_1 = __importDefault(require("./clearTemplateFiles"));
exports.clearTemplateFiles = clearTemplateFiles_1.default;
