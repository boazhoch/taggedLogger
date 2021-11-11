import { ISendMessageExecuter } from "../SendMessage/types";
import SendMessageCounter, { QueueCounter } from "../SendMessageCounter/SendMesssageCounter";

class BatchSendMessageFactory {
  static isSupportingSendBeacon = Boolean(navigator.sendBeacon);

  static create(sendMessageExecuter: ISendMessageExecuter, maxBatchWaitingMessage?: number): ISendMessageExecuter {
    return maxBatchWaitingMessage ? new SendMessageCounter(sendMessageExecuter, new QueueCounter(maxBatchWaitingMessage)) : sendMessageExecuter;
  }
}

export default BatchSendMessageFactory;
