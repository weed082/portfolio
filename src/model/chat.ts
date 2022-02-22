type Req = { type: Number; body?: Msg };
type Msg = {
  type?: Number;
  userIdx?: Number;
  name?: String;
  body?: String;
};

export default class ChatModel {
  private ws = new WebSocket('ws://localhost:5000/chat');
  constructor() {
    this.ws.onopen = this.onConnect.bind(this);
    this.ws.onmessage = this.onReceiveMsg.bind(this);
  }

  //* on connect to ws socket
  private onConnect() {
    const msg: Msg = { name: 'tom' };
    const req: Req = { type: 1, body: msg };
    this.sendMsg(req);
  }

  //* on receive msg
  private onReceiveMsg(e: MessageEvent) {
    const msg = JSON.parse(e.data);
    console.log(msg);
  }

  private sendMsg(msg: Req) {
    const jsonMsg = JSON.stringify(msg);
    this.ws.send(jsonMsg);
  }
}
