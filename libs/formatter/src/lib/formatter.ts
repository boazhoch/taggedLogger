import LogFormatter from "./LogFormatter/LogFormatter";
import logFormatterOptionsFactory from "./logFormatterFactory/logFormatterFactory";
import { ILogFormatterOptions, ILogFormatter } from "./LogFormatter/types";

export { logFormatter, logFormatterOptionsFactory, ILogFormatterOptions, ILogFormatter };

function logFormatter(logFormatterOptions?: ILogFormatterOptions) {
  return new LogFormatter(logFormatterOptionsFactory(logFormatterOptions));
}