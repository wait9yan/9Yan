/*!
 * @Author       : wait9yan
 * @Date         : 2024-03-25 22:41:35
 * @LastEditors  : wait9yan
 * @LastEditTime : 2024-04-16 08:32:00
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
        screens: {
            sm: '640px',
            md: '768px',
            lg: '1024px',
            xl: '1280px',
            '2xl': '1536px',
        },
    },
    plugins: [],
    darkMode: 'selector',
};
