import { ILogFormatter, ILogFormatterConfig, FormatType } from "./types";

class LogFormatter implements ILogFormatter {
  constructor(private logFormatterConfig?: ILogFormatterConfig) {}

  format(message: string) {
    let msg: string = message;
    for (const formatType in this.logFormatterConfig) {
      const formatter = this.logFormatterConfig[(formatType as unknown) as FormatType];
      if (formatter) {
        msg = formatter.format(msg);
      }
    }
    return msg;
  }
}

export default LogFormatter;
