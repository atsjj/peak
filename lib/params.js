"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const url_1 = require("url");
exports.jsonapi = { version: '1.0' };
exports.default_undefined = '__UNDEFINED__';
class Params {
    constructor(params) {
        this.params = new Map(Object.entries(params));
    }
    get(key) {
        if (this.params.has(key)) {
            return new Params(this.params.get(key));
        }
        else {
            return new Params({});
        }
    }
    getArray(key) {
        if (this.params.has(key)) {
            return [].concat([this.params.get(key)])
                .reduce(((a, v) => a.concat(v)), []);
        }
        else {
            return [];
        }
    }
    getNumber(key, defaultValue) {
        return parseInt(this.params.get(key)) || defaultValue;
    }
    getURL(key) {
        return new url_1.URL(decodeURIComponent(this.getString(key)));
    }
    getString(key, defaultValue) {
        return this.params.get(key) || defaultValue;
    }
    getStrings(key) {
        return this.splitStrings(this.params.get(key));
    }
    getDictionary(key) {
        const members = this.params.get(key) || [];
        const dictionary = {};
        members
            .filter(v => v)
            .forEach(element => {
            dictionary[element.attribute] = element.value[0];
        });
        return dictionary;
    }
    getBoolean(key, defaultValue) {
        if (this.params.has(key)) {
            const value = this.params.get(key);
            if (value == 'false') {
                return false;
            }
            else {
                return !!value;
            }
        }
        else {
            return defaultValue;
        }
    }
    getJson(key) {
        return JSON.parse(this.params.get(key) || '');
    }
    splitStrings(value) {
        return `${value || ''}`.split(',').filter(s => s);
    }
}
exports.Params = Params;
