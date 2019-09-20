"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const path_1 = require("path");
const defaultPackagePath = path_1.resolve(__dirname, '..');
function readFileAsync(path, options) {
    return new Promise(function readFileAsyncPromise(resolve, reject) {
        fs_1.readFile(path, options, function readFileCallback(error, data) {
            if (error) {
                reject(error);
            }
            else {
                resolve(data);
            }
        });
    });
}
function resolvePackagePath(path) {
    if (path) {
        return path_1.resolve(path.toString(), 'package.json');
    }
    else {
        return path_1.resolve(defaultPackagePath.toString(), 'package.json');
    }
}
function readPackageSync(path) {
    return JSON.parse(fs_1.readFileSync(resolvePackagePath(path)).toString());
}
exports.readPackageSync = readPackageSync;
async function readPackage(path) {
    return JSON.parse((await readFileAsync(resolvePackagePath(path))).toString());
}
exports.readPackage = readPackage;
