import {
  SendMessageFactory,
  ISendMessageOptions,
  ISendMessage,
} from '@atz/sender';
import Logger from '../Logger/Logger';
import TaggedLogger from '../TaggedLogger/TaggedLogger';
import { ITaggedLogger } from '../TaggedLogger/types';
import { logFormatter, ILogFormatterOptions } from '@atz/formatter';
import { IStrigify, TemplateString, Striginifer } from '@atz/stringify';

let taggedLogger: ITaggedLogger | undefined = undefined;

type LoggerFactoryParams = {
  sendMessageOptions?: ISendMessageOptions;
  logSender?: ISendMessage;
  logFormatterOptions?: ILogFormatterOptions;
  stringifier?: IStrigify;
};

export default (params?: LoggerFactoryParams): ITaggedLogger => {
  const logSender =
    (params && params.logSender) ||
    SendMessageFactory.create(params?.sendMessageOptions);

  // singleton
  if (taggedLogger) {
    taggedLogger.info`returning same instance of logger`;
    return taggedLogger;
  }

  const logger = new Logger(logSender);

  taggedLogger = new TaggedLogger(
    new TemplateString(params?.stringifier || new Striginifer()),
    logger,
    logFormatter(params?.logFormatterOptions)
  );

  return taggedLogger;
};
