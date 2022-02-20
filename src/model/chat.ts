type msg = { id: Number; name: String };
export default class ChatModel {
  private ws?: WebSocket = new WebSocket('http://localhost:5000/chat');

  constructor() {
    this.onConnect(); 
  }

  private onConnect() {
    this.ws!.onopen = () => {
      console.log('ws connected');
      const msg: msg = { id: 2, name: 'tom' };
      const jsonMsg = JSON.stringify(msg);
      this.ws!.send(jsonMsg);
    };
  }
}

