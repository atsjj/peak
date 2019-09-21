import { FilePath } from './package';
import * as Bunyan from 'bunyan';
export declare const logger: Bunyan;
export declare function createLogger(cwd: FilePath, level?: Bunyan.LogLevel): Bunyan;
