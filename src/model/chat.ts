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
    if (!this.ws) {
      console.error('cannot connect to server');
      return;
    }
    this.ws.onopen = this.onConnect.bind(this);
  }

  //* on connect to ws socket
  private onConnect() {
    const req: Req = { type: 1, body: { userIdx: 1, name: 'tom' } };
    this.sendMsg(req);
  }

  // add msg listener
  addMsgListener(listener: (e: Event) => {}) {
    this.ws.addEventListener('message', listener);
  }

  // remove msg listener
  removeMsgListener(listener: (e: Event) => {}) {
    this.ws.removeEventListener('message', listener);
  }

  // send msg
  sendMsg(msg: Req) {
    const jsonMsg = JSON.stringify(msg);
    this.ws.send(jsonMsg);
  }
}
