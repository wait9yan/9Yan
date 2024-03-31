/*!
 * @Author       : wait9yan
 * @Date         : 2024-03-24 21:09:19
 * @LastEditors  : wait9yan
 * @LastEditTime : 2024-03-28 14:36:25
 * @FilePath     : \9Yan\src\router\index.js
 * @Description  : 
 */
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/home',
            redirect: '/',
        },
        {
            path: '/',
            name: 'home',
            component: import('@/views/HomeView.vue'),
        },
        {
            path: '/article',
            name: 'article',
            component: import('@/views/ArticleView.vue'),
        },
        {
            path: '/work',
            name: 'work',
            component: import('@/views/WorkView.vue'),
        },
        {
            path: '/about',
            name: 'about',
            component: () => import('@/views/AboutView.vue'),
        },
    ],
});

export default router;
