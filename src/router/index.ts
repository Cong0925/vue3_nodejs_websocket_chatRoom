
import { createRouter, createWebHashHistory } from 'vue-router';
import myRouters from '@/router/router';

export const router = createRouter({
  history: createWebHashHistory(),
  routes: myRouters,
});


// 导出路由
export default router;
