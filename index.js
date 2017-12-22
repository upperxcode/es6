class Message {
  constructor (text = '', created = Date.now(), msg = ''){
    this.text    = text;
    this.created = created;
    this._msg     = msg;
  }


  get msg(){
    return this.msg;
  }

  set msg(msg){

    if (!msg || isNaN(msg)) {
      throw new Error('Invalid Msg - Mensagem Inválida! ohhhhhh');
    }



    this._msg = msg;
  }

  toString(){
    return `Message ${this.created} - Text: ${this.text} message ${this._msg}`;
  }
}

var emptyMessage = new Message('',Date.now(), 'dddd');
var textMessage  =  new Message('Minha messagem', Date.now() - 86400);

console.log(String(emptyMessage));
console.log(String(textMessage));