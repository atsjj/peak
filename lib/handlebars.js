"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const handlebars = require("handlebars");
exports.handlebars = handlebars;
const helpers = require("handlebars-helpers");
helpers({ handlebars });
exports.compile = handlebars.compile;
