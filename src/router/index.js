/*!
 * @Author       : wait9yan
 * @Date         : 2024-03-24 21:09:19
 * @LastEditors  : wait9yan
 * @LastEditTime : 2024-04-03 20:16:41
 * @FilePath     : \9Yan\src\router\index.js
 * @Description  :
 */
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/home',
            redirect: '/',
        },
        {
            path: '/',
            name: 'home',
            component: () => import('@/views/HomeView.vue'),
        },
        {
            path: '/article',
            name: 'article',
            component: () => import('@/views/ArticleView.vue'),
        },
        {
            path: '/work',
            name: 'work',
            component: () => import('@/views/WorkView.vue'),
        },
        {
            path: '/about',
            name: 'about',
            component: () => import('@/views/AboutView.vue'),
        },
    ],
    scrollBehavior(to, from, savedPosition) {
        return savedPosition || { top: 0 };
    },
});

export default router;
