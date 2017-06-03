<template>
    <div class="content">
        <ul>
            <a href="javascript:;" @click.stop.prevent="detail"><li>
                <div class="cover-rating">
                    <img src="http://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2460383628.webp" alt="">
                    <div class="rating">
                        <span>25842</span>人支持
                    </div>
                </div>
                <div class="info">
                    <p class="title">我心雀跃</p>
                    <p>类型：剧情</p>
                    <p>主演：孙伊涵，宋宁，周楚楚</p>
                    <p>导演：刘紫微</p>
                    <p>年份：2016</p>
                </div>
                <div class="score">
                    <i>7.5</i>
                    <a href="javascript:;" @click.stop.prevent="vote">支持</a>
                </div>
            </li> </a>
        </ul>
    </div>
</template>


<script>
    export default {
        methods: {
            vote () {
                alert('vote')
            },
            detail () {
                alert('detail')
            }
        },
        mounted () {
            console.log('recommaned comp mounted')
        }
    }
</script>

<style scoped>
    .content {
        padding: 2% 3%;
        color: #333;
    }
    li {
        margin-bottom: 10px;
        background: #fff;
        overflow: hidden;
        padding: 2% 2%;
    }
    li img {
        width: 250px;;
    }
    li>div {
        float: left;
    }
    .rating {
        margin: 10px auto;
        text-align: center;
        max-width: 250px;
    }
    .rating span {
        color: orangered;
        font-weight: bold;
        font-size: 1.2em;
    }
    .info {
        padding: 0 5%;
        width: 45%;
    }
    .title {
        font-size: 1.3em;
        margin: 0;
        padding: 10px 0;
        font-weight: bold;
        border-bottom: 5px dashed #f5f5f5;
    }
    .score {
        width: 15%;
    }

    .score i {
        font-weight: bold;
        font-size: 2em;
        color: orangered;
    }
    .score a {
        display: block;
        margin-top: 250px;
        border: 1px solid orange;
        width: 100px;
        padding: 10px;
        text-align: center;
        border-radius: 100px;
        color: orange;
    }

</style>
