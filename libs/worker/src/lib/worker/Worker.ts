import { expose } from "comlink";
import { taggedLoggerFactory } from "@logger/tagged";

const logger = taggedLoggerFactory({
  sendMessageOptions: { headers: { contentType: "application/json" }, urlEndpoint: "/log" },
  logFormatterOptions: {
    prefix: () => `prefix`,
    suffix: () => ` Suffix format`,
  },
});

expose(logger);
