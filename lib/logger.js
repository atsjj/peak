"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const package_1 = require("./package");
const Bunyan = require("bunyan");
const { name } = package_1.readPackageSync();
exports.logger = Bunyan.createLogger({ level: 'info', name });
function createLogger(cwd, level) {
    const { name } = package_1.readPackageSync(cwd);
    return Bunyan.createLogger({ level: (level || 'info'), name });
}
exports.createLogger = createLogger;
