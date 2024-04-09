/*!
 * @Author       : wait9yan
 * @Date         : 2024-03-24 21:09:19
 * @LastEditors  : wait9yan
 * @LastEditTime : 2024-04-09 23:04:26
 * @FilePath     : \9Yan\src\main.js
 * @Description  :
 */
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import 'virtual:svg-icons-register';

import App from '@/App.vue';
import router from '@/router';

import '@/css/main.css';

const app = createApp(App);
app.use(createPinia());
app.use(router);
app.mount('#app');
