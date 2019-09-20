import { readPackageSync } from './package';
import * as Bunyan from 'bunyan';

const { name } = readPackageSync();

export const logger: Bunyan = Bunyan.createLogger({ level: 'info', name });
