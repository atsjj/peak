import { Dict } from './core';
import { URL } from 'url';

export const jsonapi = { version: '1.0' };
export const default_undefined = '__UNDEFINED__';

export class Params {
  private params: Map<string, any>;

  constructor(params: object) {
    this.params = new Map(Object.entries(params));
  }

  get(key: string): Params {
    if (this.params.has(key)) {
      return new Params(this.params.get(key));
    } else {
      return new Params({});
    }
  }

  getArray(key: string): any[] {
    if (this.params.has(key)) {
      return [].concat([this.params.get(key)])
        .reduce(((a, v) => a.concat(v)), []);
    } else {
      return [];
    }
  }

  getNumber(key: string, defaultValue: number): number {
    return parseInt(this.params.get(key)) || defaultValue;
  }

  getURL(key: string): URL {
    return new URL(decodeURIComponent(this.getString(key)));
  }

  getString(key: string, defaultValue?: string): string {
    return this.params.get(key) || defaultValue;
  }

  getStrings(key: string): string[] {
    return this.splitStrings(this.params.get(key));
  }

  getDictionary(key: string): Dict<string[]> {
    const members = this.params.get(key) || [];
    const dictionary = {};

    members
      .filter(v => v)
      .forEach(element => {
        dictionary[element.attribute] = element.value[0];
      });

    return dictionary;
  }

  getBoolean(key: string, defaultValue: boolean): boolean {
    if (this.params.has(key)) {
      const value: string = this.params.get(key);

      if (value == 'false') {
        return false;
      } else {
        return !!value;
      }
    } else {
      return defaultValue;
    }
  }

  getJson(key: string): unknown {
    return JSON.parse(this.params.get(key) || '');
  }

  private splitStrings(value?: string): string[] {
    return `${value || ''}`.split(',').filter(s => s);
  }
}
