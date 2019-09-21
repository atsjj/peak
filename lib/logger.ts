import { readPackageSync, FilePath } from './package';
import * as Bunyan from 'bunyan';
import Logger = require('bunyan');

const { name } = readPackageSync();

export const logger: Bunyan = Bunyan.createLogger({ level: 'info', name });

export function createLogger(cwd: FilePath, level?: Bunyan.LogLevel): Logger {
  const { name } = readPackageSync(cwd);

  return Bunyan.createLogger({ level: (level || 'info'), name });
}
