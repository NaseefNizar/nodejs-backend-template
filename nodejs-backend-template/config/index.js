import "dotenv/config";
import path from "path";
import { local } from './env/local.js';
import { development } from './env/development.js';
import { production } from './env/production.js';
import { preproduction } from './env/preproduction.js';

import { _extend as extend } from 'util';

const __filename = new URL(import.meta.url).pathname;
const __dirname = path.dirname(__filename);

const defaults = {
  root: path.normalize(__dirname + "/.."),
};

export const Config = {
  development: extend(development, defaults),
  production: extend(production, defaults),
  preproduction: extend(preproduction, defaults),
  local: extend(local, defaults),
}[process.env.NODE_ENV || "development"];
