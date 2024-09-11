/**
 * @fileoverview Logger module for the Node.js backend template.
 *
 * This module sets up a logger using the winston library and exports it as a default.
 * The logger is configured to log messages in JSON format and to print them to the console.
 *
 * @module services/logger
 * @requires winston
 */

import winston from "winston";

/**
 * The logger instance.
 *
 * @type {Object}
 * @constant
 * @property {string} level - The log level. Default is "info".
 * @property {Object} format - The log format configuration.
 * @property {Array} transports - The log transport configuration.
 * @property {Object} transports[0] - The transport configuration for printing logs to the console.
 * @property {string} transports[0].type - The transport type. Default is "console".
 */
const logger = winston.createLogger({
  level: "info",
  format: winston.format.combine(
    winston.format.json() // Log messages in JSON format
  ),
  transports: [
    new winston.transports.Console()
  ],
});

/**
 * The logger instance exported as a default.
 *
 * @type {Object}
 * @constant
 * @default
 */
export default logger;
