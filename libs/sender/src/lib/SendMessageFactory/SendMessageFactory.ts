import { ISendMessage } from "../SendMessage/types";
import SendBeaconMessage from "../SendBeaconMessage/SendBecaonMessage";
import SendFetchMessage from "../SendFetchMessage/SendFetchMessage";
import SendMessage from "../SendMessage/SendMessage";
import BatchSendMessageFactory from "../BatchSendMessagerFactory/BatchSendMessagerFactory";
import { ISendMessageOptions } from "../SendMessageOptions/types";

class SendMessageFactory {
  static isSupportingSendBeacon = Boolean(navigator.sendBeacon);

  static create(
    opts: ISendMessageOptions = {
      urlEndpoint: "/logs",
      headers: {
        contentType: "text/plain",
      },
    },
    maxCountUntil?: number,
    fetchRequestOptions?: RequestInit
  ): ISendMessage {
    const sendMessageExecuter = this.isSupportingSendBeacon ? new SendBeaconMessage(opts) : new SendFetchMessage(opts, fetchRequestOptions);
    return new SendMessage(opts, BatchSendMessageFactory.create(sendMessageExecuter, maxCountUntil));
  }
}

export default SendMessageFactory;
