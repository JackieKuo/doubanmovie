<template>
    <div class="movie common-text">
        <div class="head-bar clearfix">
            <div class="left">
               <a href="javascript:;" @click.stop.prevent="$router.go(-1)"><i class="fa fa-chevron-circle-left" aria-hidden="true"></i></a> 
            </div>
            <span class="title sub-title">{{ movie_info.title }}</span>
        </div>
        <div class="content">
            <img :src="movie_info.images.large" alt="">
        </div>
        <div class="description">
            <p class="sub-title">电影简介</p>
            <p>{{ movie_info.summary }}</p>
            <p>{{ movie_info.countries.join('，') }} / {{ movie_info.genres.join('，') }} / {{ movie_info.year }}年</p>
            <p class="sub-title">演员列表</p>
            <p>
                {{ get_names(movie_info.casts) }}
            </p>
            <p class="casts-img">
                <ul>
                    <li v-for="cast in movie_info.casts">
                        <router-link :to="{ path: '/celebrity', query: { id: cast.id } }"><img :src="cast.avatars?cast.avatars.small:default_avatar" alt=""></router-link>
                    </li> 
                </ul>
            </p>
            <p class="sub-title">导演</p>
            <p class="director">{{ get_names(movie_info.directors) }}</p>
            <p class="dirc-img">
                <ul>
                    <li v-for="director in movie_info.directors">
                        <router-link :to="{ path: '/celebrity', query: { id: director.id } }"><img :src="director.avatars?director.avatars.small:default_avatar" alt=""></router-link>
                    </li> 
                </ul>
            </p>
        </div>
        <div class="feeback">
            <p class="stars">
                <i class="fa fa-star" aria-hidden="true"></i>{{ movie_info.rating.stars }}颗星，均分{{ movie_info.rating.average }}
                <i class="fa fa-comments" aria-hidden="true"></i>{{ movie_info.reviews_count }}条评论
                <i class="fa fa-heart" aria-hidden="true"></i>{{ movie_info.wish_count }}人想看
            </p>
        </div>
        <div class="handle">
            <a href="#" class="back-btn btn" @click="$router.go(-1)">返回</a>
            <a href="#" class="vote-btn btn">想看</a>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        data () {
            return {
                movie_info: null,
                default_avatar: 'http://img3.doubanio.com/f/movie/ca527386eb8c4e325611e22dfcb04cc116d6b423/pics/movie/celebrity-default-small.png'  //默认图片防止avatars为null
            }
        },
        methods: {
            get_names (obj) {  //获取演员和导演列表方法
                var arr = new Array()
                for (var i = 0, l = obj.length; i < l; i++){
                    arr.push(obj[i].name)
                }
                return arr.join('/')
            }
        },
        mounted () {
            console.log('movie comp mounted')
            axios.get('/api/v2/movie/subject/' + this.$route.query.id).then(response => {
                this.movie_info = response.data
            }).catch (function (error) {
                console.log(error)
            })
        }
    }
</script>

<style scoped>
    .head-bar {
        line-height: 35px;
        height: 35px;
        width: 100%;
        background: #fff;
    }
    .common-text {
        font-size: 14px;
    }
    .head-bar>* {
        float: left;
    }
    .left {
        width: 8%;
        font-size: 26px;
        padding-left: 2%;
    }
    .title {
        display: block;
        width: 80%;
        text-align: center;
    }
    .content {
        text-align: center;
        background: #eee;
    }
    .content>img {
        width: 50%;
    }
    .description {
        margin-bottom: 20px;
        padding:2%;
    }
    .description p{
        margin: 10px;
    }

    .description li {
        display: inline-block;
        margin-right: 10px;
        border: 3px solid #ccc;
    }
    .description li img {
        width: 50px;
    }
    .feeback {
        padding: 2% 0;
        border-top: 2px dashed #ddd;
    }
    .stars {
        font-size: 12px;
        text-align: center;
    }
    .stars i {
        color: orangered;
        font-size: 20px;
        margin-left: 1%;
    }
    .stars i:first-child{
        margin-left: 0;
    }
    .handle {
        text-align: center;
        padding: 20px 0;
    }
    .btn {
        color: #fff;
    }
</style>