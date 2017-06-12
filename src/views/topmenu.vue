<template>
    <div class="top-menu common-text clearfix">
        <div class="left"><a href="javascript:;" @click.stop.prevent="change"><i class="fa fa-bars" aria-hidden="true"></i></a></router-link></div>
        <div class="medium">豆瓣电影</div>
        <div class="right">
            <router-link to="/login"><i class="fa fa-user" aria-hidden="true"></i></router-link>
        </div>
    </div>
</template>

<script>
    import dataFlow from '@/publics/DataFlow.js'
    export default {
        data () {
            return {

            }
        },
        methods: {
            change () {
                dataFlow.$emit('toggleMainMenu')
            }
        }
    }
</script>

<style scoped>
    .top-menu {
        background-color: #333;
        color: #fff;
        line-height: 30px;
        position: relative;
        z-index: 9999;
    }
    .left {
        float: left;
        width: 35%;
        text-align: left;
    }
    .left i {
        margin-left: 10%;
    }
    .left a {
        color: #fff;
        
    }
    .medium {
        float: left;
        width: 30%;
        text-align: center;
    }
    .right {
        float: right;
        width: 35%;
        text-align: right;
    }
    .right a {
        color: #ccc;
    }
    .right i {
        margin-right: 10%;;
    }
</style>