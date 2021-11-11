import { StringValue } from "../Stringifier/types";

export interface ITemplateString {
  toString: TemplateStringFn<string>;
}

export type TemplateStringFn<T> = (strings: TemplateStringsArray | string, ...values: StringValue[]) => T;
