<template>
  <div>
    <el-container>
      <el-header style="background-color:#1789f5;">
        <div>
          header
        </div>
      </el-header>

      <el-container>
        <el-aside width="200px" class="aside">
          <el-affix>
            <el-menu active-text-color="#ffd04b" background-color="#545c64" class="el-menu-vertical-demo"
              default-active="2" text-color="#fff" @open="handleOpen" @close="handleClose">
              <el-menu-item @click="$router.push('/home')" index="0">
                <span>Home</span>
              </el-menu-item>
              <el-sub-menu index="1">
                <template #title>
                  <span>聊天室</span>
                </template>
                <el-menu-item @click="$router.push('/chatPage')" index="1-1">1号聊天室</el-menu-item>
              </el-sub-menu>
            </el-menu>
          </el-affix>

        </el-aside>
        <el-main>
          <!-- 子路由出口 -->
          <router-view />
        </el-main>
      </el-container>

    </el-container>
  </div>
</template>

<script setup lang="ts">
const handleOpen = () => {
  console.log('open')
}
const handleClose = () => {
  console.log('close')
}
</script>

<style scoped >
.aside {
  height: 90vh;
  background-color: #545c64;
}
</style>