/*!
 * @Author       : wait9yan
 * @Date         : 2024-03-26 09:56:18
 * @LastEditors  : wait9yan
 * @LastEditTime : 2024-03-31 22:31:34
 * @FilePath     : \9Yan\src\stores\main.js
 * @Description  :
 */
import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useMainStore = defineStore('main', () => {
    const coverType = ref(0); // 壁纸种类
    const imgLoadStatus = ref(false); // 壁纸加载状态
    const backgroundShow = ref(false); // 壁纸展示状态
    const innerWidth = ref(null); // 当前窗口宽度
    const scrollTop = ref(0); // 页面顶部高度
    const siteStartShow = ref(false); // 建站日期显示

    // // 获取页面宽度
    // const getInnerWidth = computed((state) => {
    //     return state.innerWidth;
    // });

    // // 更改当前页面宽度
    // function setInnerWidth(value) {
    //     this.innerWidth = value;
    //     if (value >= 720) {
    //         this.mobileOpenState = false;
    //         this.mobileFuncState = false;
    //     }
    // }

    // // 更改壁纸加载状态
    // function setImgLoadStatus(value) {
    //     this.imgLoadStatus = value;
    // }

    return {
        coverType,
        imgLoadStatus,
        backgroundShow,
        innerWidth,
        scrollTop,
        siteStartShow,
    };
});
