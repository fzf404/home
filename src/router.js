/*
 * @Author: fzf404
 * @Date: 2022-02-02 18:33:46
 * @LastEditTime: 2022-02-02 19:16:08
 * @Description: 路由
 */

import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/pages/home.vue'),
    meta: {
      title: 'fzf404 | 首页',
    },
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/pages/about.vue'),
    meta: {
      title: 'fzf404 | 关于我',
    },
  },
  {
    path: '/link',
    name: 'link',
    component: () => import('@/pages/link.vue'),
    meta: {
      title: 'fzf404 | 友链',
    },
  },
  {
    path: '/404',
    name: '404',
    component: () => import('@/pages/404.vue'),
    meta: {
      title: 'fzf404 | 404',
    },
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '404',
  },
]

// 导出路由
const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

// 修改 title
router.beforeEach((to, from) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
})

export default router
