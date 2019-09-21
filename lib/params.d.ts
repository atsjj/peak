import { Dict } from './core';
import { URL } from 'url';
export declare const jsonapi: {
    version: string;
};
export declare const default_undefined = "__UNDEFINED__";
export declare class Params {
    private params;
    constructor(params: object);
    get(key: string): Params;
    getArray(key: string): any[];
    getNumber(key: string, defaultValue: number): number;
    getURL(key: string): URL;
    getString(key: string, defaultValue?: string): string;
    getStrings(key: string): string[];
    getDictionary(key: string): Dict<string[]>;
    getBoolean(key: string, defaultValue: boolean): boolean;
    getJson(key: string): unknown;
    private splitStrings;
}
