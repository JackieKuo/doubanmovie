<template>
    <div class="billboard common-text">
        <ul class="nav white-bg clearfix">
            <li :class="{ selected: $route.path == nav.route }" v-for="nav in navs"><router-link class="nav-item" :to="nav.route">{{ nav.title }}</router-link></li>
        </ul>
        <div class="content">
            <router-view></router-view>
        </div>
        <a href="javascript:;" class="back-to-top" @click.stop.prevent="scroll_top" v-show="scroll_height > 90"><i class="fa fa-chevron-circle-up" aria-hidden="true"></i></a>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                scroll_height: 0,
                navs: [
                    { title: '热门', route: '/billboard/hot' },
                    { title: '正在热映', route: '/billboard/in-theater' },
                    { title: '即将上映', route: '/billboard/coming-soon' },
                    { title: '排行榜', route: '/billboard/top250' },
                    { title: '北美票房榜', route: '/billboard/us-box' }
                ]
            }
        },
        methods: {
            scroll_handler () {
               this.scroll_height = this.$el.scrollTop
            },
            scroll_top () {
                var timer = null;
                timer = setInterval(() => {
                    this.$el.scrollTop /= 1.1
                    if (this.$el.scrollTop == 0){
                        clearInterval(timer)
                    }
                }, 10)
            }
        },
        mounted () {
            console.log('billboard comp mounted')
            this.$el.addEventListener('scroll', this.scroll_handler) //监听滚动事件，决定是否显示返回顶部按钮
        }
    }
</script>

<style scoped>
    .billboard {
        height: 100%;
        overflow: auto;
        position: relative;
    } 
    .nav {
        width: 96%;
        padding: 0 2%;
    }
    .content {
        width: 100%;
    }
    .back-to-top {
        position: fixed;
        right: 10%;
        top: 90%;
        text-align: center;
        font-size: 40px;
        z-index: 9999;
    }  
    li {
        float: left;
        height: 32px;
        line-height: 32px;
    }
    li::after {
        content: "┆";
        font-size: 10px;
        margin: 0 5px;
    }
    li:last-child::after {
        content: "";
    }
    .selected .nav-item {
        color: #fff;
        background: #007711;
        padding: 3px 5px;
        border-radius: 3px;
    }
</style>