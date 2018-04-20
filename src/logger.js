import winston from 'winston';
const config = require('../.config/logger.js');

winston.loggers.add('default', config.default);
winston.loggers.add('audit', config.audit);

export const Log = winston.loggers.get('default');
export const Audit = winston.loggers.get('audit');