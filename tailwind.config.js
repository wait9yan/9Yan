/*!
 * @Author       : wait9yan
 * @Date         : 2024-03-25 22:41:35
 * @LastEditors  : wait9yan
 * @LastEditTime : 2024-04-02 10:40:14
 * @FilePath     : \9Yan\tailwind.config.js
 * @Description  :
 */
/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{vue,js}'],
    theme: {
        extend: {
            fontFamily: {
                art: ['art-regular', 'sans-serif'],
            },
            animation: {
                typing: 'typing-pulse 1.06s steps(1, end) infinite',
            },
        },
    },
    plugins: [],
    darkMode: 'selector',
};
