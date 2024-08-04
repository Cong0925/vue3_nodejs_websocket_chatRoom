<template>
  <div>
    <span>当前用户：{{ userName }}</span>
    <div class="content">
      <div class="msg-box">
        <ul>
          <li v-for="item of state.msglist" :key="item.id" :class="item.user === userName ? 'msg-whoSend' : ''">
            <div>
              <span>
                {{ item.user }}
              </span>
              <span>
                {{ new Date(item.dateTime) }}
              </span>
            </div>
            <div class="msg-other" :class="item.user === userName ? 'my-send-msg-box' : ''">
              <div class="my-send-msg-bgc my-send-msg" >
                <span>
                {{ item.msg }}
              </span>
              </div>
             
            </div>
          </li>
        </ul>
      </div>
      <div class="msg-send">
        <textarea type="textarea" placeholder="输入消息" v-model="state.inputMessage"></textarea>
        <button class="form-item" @click="sendMessage">发送</button>
      </div>

    </div>
  </div>
</template>

<script lang="ts" setup >
import { onMounted, reactive, ref, watch } from 'vue';
import { useRouter } from 'vue-router';
import { useWebSocket } from '@/hooks/index';

interface State {
  inputMessage: string;
  msglist: any[]; // 这里的 any[] 表示 msglist 是一个数组，数组中的元素类型可以是任意类型
}

// 引入 websocket
const ws = useWebSocket(handleMessage)
const router = useRouter();
// 接收服务器端的 messageList
function handleMessage(e: any): void {
  const msgData = JSON.parse(e.data)
  state.msglist.push(msgData)
}


const state: State = reactive<State>({
  inputMessage: '',
  msglist: []
});
const userName = ref('')

// 页面加载时检测是否登录，目前没有写路由守卫，后期迁移到守卫里
onMounted(() => {
  if(localStorage.getItem('userName')){
    userName.value = localStorage.getItem('userName') as string
  }
  
  if (!userName.value) {
    router.push('/')
    return
  }
})

// 发送信息
const sendMessage = () => {
  const msg = state.inputMessage
  if (!msg.trim().length) {
    return
  }
  ws.send(JSON.stringify({
    id: new Date().getTime(),
    user: userName.value,
    dateTime: new Date().getTime(),
    msg: state.inputMessage
  }))

  state.inputMessage = ''
}

// 检测 消息列表，将展示页面滚动条到底
watch(state.msglist,()=>{
  let msgBox:Element
  if( document.querySelector('.msg-box')){
    msgBox =  document.querySelector('.msg-box') as Element 
  }
  setTimeout(() => {
    msgBox.scrollTop = msgBox.scrollHeight;
  }, 100);

})
</script>

<style >
ul {
  list-style: none;
}

.content {
  width: 1400px;
  min-height: 700px;
  display: flex;
  flex-direction: column;
  margin: 10px auto;
  border: 1px solid #000;
}

.msg-box {
  height: 550px;
  width: 100%;
  overflow: auto;
  border-bottom: 1px solid #000;
}

.msg-box ul li {
  margin-top: 20px;
}

.msg-box .msg-whoSend {
  text-align: end;
  display: flex;
  flex-direction: column;
}
.msg-other{
  display: flex;
margin-top: 10px;
}
.my-send-msg-box{
  justify-content: end;
}
.my-send-msg{
  max-width: 700px;
  word-wrap: break-word;
}
.my-send-msg-bgc{
      border-radius: 10px;
    padding: 10px;
  background-color: #95ec69;
}

.msg-send {
  width: 100%;
  height: 200px;
  position: relative;
}

.msg-send textarea {
  width: 100%;
  height: 100%;
  padding: 0px;
  margin: 0px;
}

.msg-send button {
  position: absolute;
  bottom: 5px;
  right: 10px;
  font-size: 20px;
}</style>

