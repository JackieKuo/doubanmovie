<template>
    <div id="app">
        <top-menu></top-menu>          <!--顶部菜单-->
        <main-menu v-if="data.showMainMenu"></main-menu> <!--主菜单-->
        <div class="container">        <!--主页容器，除去顶部菜单以下都是-->
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    import TopMenu from './views/TopMenu'
    import MainMenu from './views/MainMenu'
    import dataFlow from '@/publics/DataFlow.js'
    export default {
        data () {
            return {
                data: dataFlow
            }
        },
        components: { TopMenu, MainMenu }
    }
</script>

<style>
    @import "./assets/css-init.css";
    @import "./assets/common.css";
    @import "./assets/layout.css"
</style>




