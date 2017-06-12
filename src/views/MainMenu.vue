<template>
    <div class="main-menu common-text" @click.stop="">
        <div id="content">
            <div class="space-bar"></div>  <!--占位置用-->
            <div class="search clearfix">
                <input type="text" placeholder="请输入要搜索的内容">
                <span class="search-btn"><a href="javascript:;"><i class="fa fa-search" aria-hidden="true"></i></a></span>
            </div>
            <div class="menu">
                <ul>
                    <li class="home"><router-link to="/"><i class="fa fa-home" aria-hidden="true"></i><span>首页</span></router-link></li>
                    <li><router-link to="/"><i class="fa fa-user" aria-hidden="true"></i><span>个人中心</span></router-link></li>
                    <li><router-link to="/"><i class="fa fa-cog" aria-hidden="true"></i><span>设置</span></router-link></li>
                </ul>
            </div>
        </div>
        <div class="right-space" @click.stop="dataFlow.$emit('toggleMainMenu')">
        </div>
    </div>
</template>

<script>

    export default {
        data () {
            return {
                timer: null,
                clientWidth: document.body.clientWidth
            }
        },
        mounted () {
            console.log('mainmenu comp mounted')
            if (this.timer) {
                clearInterval(this.timer)
                console.log('clear')
            }
            var ele = document.getElementById('content')
            this.timer = setInterval(() => {
                if (ele.offsetLeft === 0){
                    clearInterval(this.timer)
                } else {
                    ele.style.left = Math.ceil(ele.offsetLeft / 1.2) + 'px'
                }
            }, 10)
        },
        destroyed () {
            console.log('mainmenu comp destroyed')
        }
    }
</script>

<style scoped>
    .main-menu {
        position: absolute;
        height: 100%;
        width: 100%;
        background: rgba(0, 0, 0, .5);
        top: 0;
        z-index: 999;
        color: #fff;
    }
    #content {
        position: absolute;
        width: 80%;
        height: 100%;
        background: #333;
        left: -70%;
    }
    .space-bar {
        height: 35px;
        line-height: 35px;
        background: #555;
    }
    .search {
        height: 30px;
        background: #555;
        width: 100%;
    }
    .search>* {
        display: block;
        float: left;
    }
    .home-btn {
        width: 10%;
    }
    .search input {
        padding-left: 10%;
        width: 80%;
        height: 30px;
        outline: none;
        background: transparent;
        border: none;
        color: #fff;
        font-size: 14px;
        text-align: center;
    }
    .search input::-webkit-input-placeholder { /* WebKit browsers */  
        color: #999;  
    }  
    .search input:-moz-placeholder { /* Mozilla Firefox 4 to 18 */  
        color: #999;  
        opacity: 1;  
    }  
    .search input::-moz-placeholder { /* Mozilla Firefox 19+ */  
        color: #999;  
        opacity: 1;  
    }  
    .search input::-ms-input-placeholder { /* Internet Explorer 10+ */  
        color: #999;  
    }  
    .search input:focus {
        border: none;
        outline: none;
    }
    .search-btn {
        width: 10%;
        text-align: center;
    }
    .search a {
        height: 30px;
        line-height: 30px;
    }
    .menu {
        padding: 4%;
    }
    .menu a {
        color: #ccc;
    }
    .menu li {
        margin-bottom: 5%;
    }
    .menu li i {
        margin-right: 5%;
    }
    .right-space {
        width: 20%;
        position: absolute;
        right: 0;
        height: 100%;
    }
</style>
