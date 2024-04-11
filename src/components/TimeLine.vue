<!--
 * @Author       : wait9yan
 * @Date         : 2024-04-10 19:44:10
 * @LastEditors  : wait9yan
 * @LastEditTime : 2024-04-11 17:44:07
 * @FilePath     : \9Yan\src\components\TimeLine.vue
 * @Description  : 
-->
<template>
    <ul class="p-4 lg:p-8 bg-gray-100 text-gray-800">
        <li v-for="index in 4" :key="index">
            <article>
                <a rel="noopener noreferrer" href="#" class="grid p-4 overflow-hidden md:grid-cols-5 rounded-xl lg:p-6 xl:grid-cols-12 hover:bg-gray-50">
                    <h4
                        class="mb-1 ml-8 font-semibold md:col-start-2 md:col-span-4 md:ml-0 xl:col-start-3 xl:col-span-9"
                        _msttexthash="26091832"
                        _msthash="2406"
                    >
                        Earum at ipsa aliquid quis， exercitationem est.
                    </h4>
                    <time datetime="" class="row-start-1 mb-1 md:col-start-1 xl:col-span-2 text-gray-600" _msttexthash="13331578" _msthash="2407"
                        >2024-03-24</time
                    >
                    <p class="ml-8 md:col-start-2 md:col-span-4 xl:col-start-3 xl:col-span-9 md:ml-0 text-gray-700" _msttexthash="453228789" _msthash="2408">
                        Lorem ipsum dolor sit， amet consectetur adipisicing elit.Similique saepe exercitationem numquam， labore necessitatibus deleniti
                        quasi.Illo porro nihil necessitatibus debitis delectus aperiam， fuga impedit assumenda odit， velit eveniet est.
                    </p>
                </a>
            </article>
        </li>
    </ul>
</template>
