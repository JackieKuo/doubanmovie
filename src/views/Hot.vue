<template>
    <div class="hot">
        <div class="loading" v-if="loading">
            <i class="fa fa-circle-o-notch fa-spin"></i>
        </div>
        <ul v-if="!loading" class="clearfix">
            <li v-for="(movie, index) in recommaned_movies">
                <router-link :to="{ path: '/movie', query: { id: movie.id } }" class="white-bg clearfix">
                    <div class="cover-rating">
                        <img :src="movie.images.large" alt="">
                        <p class="ellipsis"><span>{{ movie.collect_count }}</span>个支持</p>
                    </div>
                    <div class="info">
                        <p class="sub-title ellipsis">{{ movie.title }}</p>
                        <p class="first ellipsis">类型：{{ movie.genres.join('/') }}</p>
                        <p class="ellipsis">主演：{{ get_names(movie.casts) }}</p>
                        <p class="ellipsis">导演：{{ get_names(movie.directors) }}</p>
                        <p>年份：{{ movie.year }}</p>
                    </div>
                    <div class="score">
                        <i>{{ movie.rating.average || 'new' }}</i>
                        <a href="javascript:;" @click.stop.prevent="vote">支持</a>
                    </div>
                </router-link>
            </li>
        </ul>
    </div>
</template>


<script>
    import axios from 'axios'
    export default {
        data () {
            return {
                recommaned_movies: [],
                loading: true
            }
        },
        methods: {
            vote () {
                alert('vote')
            },
            goto (id) {
                console.log(id)
            },
            get_names (obj) {  //获取演员和导演列表方法
                var arr = new Array()
                for (var i = 0, l = obj.length; i < l; i++){
                    arr.push(obj[i].name)
                }
                return arr.join('/')
            },
            sorted () {
                console.log('request finished')
                this.recommaned_movies = this.recommaned_movies.sort(function (a, b) {
                    return b.collect_count - a.collect_count
                }).slice(0, 30)
                this.loading = false
            },
            fetch_data () {//获取正在热映和即将上映电影信息
                var urls = ['/api/v2/movie/in_theaters', '/api/v2/movie/coming_soon'], finished = 0;
                for (var i = 0, l = urls.length; i < l; i ++) {
                    axios.get(urls[i]).then(response => {  
                        this.recommaned_movies = this.recommaned_movies.concat(response.data.subjects)
                        finished ++
                        if (finished == l) {  //需要的数据都加载完成后按collect_count排序
                            this.sorted()
                        }
                    }).catch (function (error) {
                        console.log(error)
                    })
                }
            }
        },
        mounted () {
            console.log('hot comp mounted')
            this.fetch_data()
        }
    }
</script>

<style scoped>
    .hot {
        padding: 2% 3%;
    }
    .loading {
        text-align: center;
        width: 100%;
        color: #007711;
        height: 300px;
        line-height: 300px;
        font-size: 40px;
    }
    li {
        width: 100%;
        margin-bottom: 1%;
    }
    li>a {
        display: block;
    }
    .cover-rating, .info, .score {
        float: left;
    }
    .cover-rating img {
        display: block;
        margin: 5% auto;
        width: 90%;
        max-height: 160px;
        max-width: 120px;
    }
    .cover-rating {
        width: 30%;
    }
    .cover-rating p {
        display: block;
        height: 30px;
        line-height: 30px;
        text-align: center;
        font-size: 12px;
    }
    .cover-rating p span {
        font-weight: bold;
        color: orangered;
    }
    .info {
        width: 48%;
        padding: 0 1%;
    }
    .info p {
        margin: 12px;
    }
    .info .sub-title {
        border-bottom: 2px dashed #eee;
        margin: 0 10px;
        padding: 10px 0;
    }
    .score {
        width: 20%;
    }
    .score i {
        display: block;
        height: 50px;
        line-height: 50px;
        font-size: 20px;
        color: orangered;
        font-weight: bold;
        text-align: center;
    }
    .score a {
        display: block;
        width: 70%;
        height: 30px;
        line-height: 30px;
        text-align: center;
        margin: 0 auto;
        background: orange;
        color: #fff;
        border-radius: 30px;
        margin-top: 70px;
    }
</style>
