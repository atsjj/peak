import { FilePath } from './package';
import * as Bunyan from 'bunyan';
import Logger = require('bunyan');
export declare const logger: Bunyan;
export declare function createLogger(cwd: FilePath, level?: Bunyan.LogLevel): Logger;
