<template>
  <div>
    <div class="content">
      <div class="loginForm">
        <div class="form-item-title">
          登录
        </div>
        <div class="form-item">
          <span>用户名</span>
          <input type="text" placeholder="输入用户名" v-model="userName" />
        </div>
        <div class="form-item">
          <span>密码</span>
          <input type="text" placeholder="输入密码" v-model="password" />
        </div>
        <div class="form-item-btn">
          <button class="form-item" @click="goPage()">进入聊天室</button>
        </div>
       
      </div>
     
    </div>
  </div>
</template>

<script setup >
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const userName = ref('')
const password = ref('')

// 跳转页面
const goPage = () => {
  const _username = userName.value.trim()
  const _password = password.value.trim()

  if (_username.length < 6) {
    alert('用户不小于6位')
    return
  }
  if(_username !== _password){
    alert('密码错误!')
    return
  }
// 储存本地用户信息
  localStorage.setItem('userName', _username)
  userName.value = ''
  password.value = ''
  router.push('home')
}

// 页面加载时检测
onMounted(() => {
  userName.value = localStorage.getItem('userName')
  if (userName.value) {
    router.push('/')
    return
  }

})

</script>

<style >
.content {
  width: 1000px;
  margin: 100px auto;
  display: flex;
  justify-content: center;
}
.loginForm{
  display: flex;
  flex-direction: column;
}
.form-item-title{
  font-size: 25px;
  display: flex;
  justify-content: center;
}
.form-item{
  display: flex;
margin-top: 20px;
}
.form-item span{
  flex: 1;
}
.form-item-btn{
  display: flex;
  justify-content: center;
}
</style>