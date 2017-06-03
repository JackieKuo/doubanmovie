<template>
    <div class="billboard">
        <nav>
            <ul>
                <li class="selected"><a href="">推荐</a></li>
                <li>正在热映</li>
                <li>即将上映</li>
                <li>排行榜</li>
                <li>北美票房榜</li>
            </ul>
        </nav>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {

    }
</script>

<style scoped>
    .billboard {
        color: #333;
        margin: 0;
        font-size: .8em;
    }    
    ul {
        background: #fff;
    }
    nav li {
        display: inline-block;
        padding: 20px 10px;
    }
    nav li::after {
        content: '┆';
        color: #ccc;
        font-size: .8em;
        margin-left: 30px;
    }
    nav li:last-child::after {
        content: '';
    }
    .selected a {
        color: #fff;
        background: #007711;
        padding: 10px 15px;
        border-radius: 5px;
    }
</style>