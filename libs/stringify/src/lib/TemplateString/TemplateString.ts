import { ITemplateString } from "./types";
import { IStringify, StringValue } from "../Stringifier/types";

class TemplateString implements ITemplateString {
  private stringifier: IStringify;

  constructor(stringifier: IStringify) {
    this.stringifier = stringifier;
  }

  private isTemplateStringsArray(arg: any): arg is TemplateStringsArray {
    return Array.isArray(arg);
  }

  toString(strings: TemplateStringsArray | string, ...values: StringValue[]) {
    if (this.isTemplateStringsArray(strings)) {
      return strings.reduce((prev, current, index) => `${prev}${current}${this.stringifier.stringify(values[index])}`, "");
    }

    if (typeof strings === "string" && values.length) {
      console.warn("It is not recommended to use logger as a function, instead use logger as template tag with ``, example: logger.log`My msessage`");
      return values.reduce((prev: string, current) => `${prev} ${this.stringifier.stringify(current)}`, strings) as string;
    }

    return strings;
  }
}

export default TemplateString;
