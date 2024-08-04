export default [
  {
    path: "/",
    redirect: "/login",
    component: () => import('@/layout/index.vue'),
    children: [
      {
        path: '/home',
        name: 'home',
        component: () => import('@/views/Home/index.vue'),
        meta: {
          role: 'common',
          title: 'home'
        }
      },
      // articles route
      {
        path: '/chatPage',
        name: 'chatPage',
        component: () => import('@/views/menu/menu1.vue'),
        meta: {
          role: 'common',
          title: '聊天界面'
        }
      },
    ],
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/login.vue'),
    meta: {
      role: 'common',
      title: 'login'
    }
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('@/views/login/register.vue'),
    meta: {
      role: 'common',
      title: 'register'
    }
  },
]
