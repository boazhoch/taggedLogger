import { IStringify, StringValue } from "./types";

class JsonStriginifer implements IStringify {
  private onError(warnMessage: string) {
    console.warn(warnMessage);
    return "";
  }

  stringify(value?: StringValue) {
    if (!value) {
      return this.onError("No value was passe to stringify, return ''");
    }

    if (typeof value === "string") {
      return value;
    }

    try {
      const result = JSON.stringify(value);
      return result;
    } catch (e) {
      return this.onError(`couldn't stringify: ${value}`);
    }
  }
}

export default JsonStriginifer;
