export interface Dict<T = unknown> {
    [key: string]: T;
}
export declare type JsonValue = string | number | boolean | JsonObject | JsonArray;
export interface JsonObject extends Dict<JsonValue> {
}
export interface JsonArray extends Array<JsonValue> {
}
