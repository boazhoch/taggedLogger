import { expose } from 'comlink';
import { taggedLoggerFactory } from '@atz/tagged';

const logger = taggedLoggerFactory({
  sendMessageOptions: {
    headers: { contentType: 'application/json' },
    urlEndpoint: '/log',
  },
  logFormatterOptions: {
    prefix: () => `prefix`,
    suffix: () => ` Suffix format`,
  },
});

expose(logger);
