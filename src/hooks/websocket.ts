/* eslint-disable */
function useWebSocket(handleMessage: (this: WebSocket, ev: MessageEvent<any>) => any){

  // websocket服务路径
  let url = 'ws://localhost:8000'
  const ws = new WebSocket(url)

  // 初始化
  const init=()=>{
    bindEvent()
  }

  // 方法绑定 见名思意
  function bindEvent(){
    ws.addEventListener('open',handleOpen,false)
    ws.addEventListener('close',handleClose,false)
    ws.addEventListener('error',handleError,false)
    ws.addEventListener('message',handleMessage,false)

  }

  function handleOpen(e: any){
    console.log('websocket open',e)
  }
  function handleClose(e: any){
    console.log('websocket close',e)
    
  }
  function handleError(e: any){
    console.log('websocket error',e)
    
  }

  init()

  return ws


}
export default useWebSocket;