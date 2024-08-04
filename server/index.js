const WebSocket = require('ws');

((Ws)=>{
  const server = new Ws.Server({port:8000})
  
  const init =()=>{
    bindEvent()
  }
function bindEvent(){
  server.on('open',handleOpen);
  server.on('close',handleClose);
  server.on('error',handleError);
  server.on('connection',handleConnection);
}

function handleOpen(){
  console.log('websocket open')

}
function handleClose(){
  console.log('websocket close')
  
}
function handleError(){
  console.log('websocket error')
  
}
function handleConnection(ws){
  console.log('websocket connection')
  ws.on('message',handleMessage)
}
// 接受的 前端传入的信息 在进行广播
function handleMessage(msg){
  console.log(msg.toString())
  server.clients.forEach((c)=>{
    c.send(msg.toString())
  })

}

init()

})(WebSocket);

