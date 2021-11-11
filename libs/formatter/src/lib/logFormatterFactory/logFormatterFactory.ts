import { ILogFormatterOptions, ILogFormatterConfig, FormatType } from "../LogFormatter/types";
import LogFormatterPrefixer from "../LogFormatterPrefixer/LogFormatterPrefixer";
import LogFormatterSufixer from "../LogFormatterSuffixer/LogFormatterSuffixer";

const logFormatterOptionsFactory = (logFormatterOptions?: ILogFormatterOptions) => {
  const logFormatterConfig: ILogFormatterConfig = {} as ILogFormatterConfig;

  if (!logFormatterOptions) {
    return logFormatterConfig;
  }

  for (const option in logFormatterOptions) {
    const item = logFormatterOptions[(option as unknown) as FormatType];

    if (item) {
      if (((option as unknown) as FormatType) === FormatType.prefix) {
        logFormatterConfig[FormatType.prefix] = new LogFormatterPrefixer(item);
      }
      if (((option as unknown) as FormatType) === FormatType.suffix) {
        logFormatterConfig[FormatType.suffix] = new LogFormatterSufixer(item);
      }
    }
  }

  return logFormatterConfig;
};

export default logFormatterOptionsFactory;
