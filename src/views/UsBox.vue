<template>
    <div class="us-box">
        <div class="top">
            <router-link :to="{ path: '/movie', query: { id: movie_info[0].subject.id } }" class="clearfix">
                <dl>
                    <dt>1st</dt>
                    <dd class="movie-img"><img :src="movie_info[0].subject.images.large" alt=""></dd>
                    <dd class="movie-title ellipsis">{{ movie_info[0].subject.title }}</dd>
                    <dd class="box"><i class="fa fa-usd" aria-hidden="true"></i>{{ movie_info[0].box }}</dd>
                </dl>
            </router-link>
        </div>
        <ul class="movies">
            <li v-for="movie in movie_info.slice(1)">
                <router-link :to="{ path: '/movie', query: { id: movie.subject.id } }" class="clearfix">
                    <dl class="white-bg">
                        <dt>{{ movie.rank }}</dt>
                        <dd class="movie-img"><img :src="movie.subject.images.large" alt=""></dd>
                        <dd class="movie-title ellipsis">{{ movie.subject.title }}</dd>
                        <dd class="box"><i class="fa fa-usd" aria-hidden="true"></i>{{ movie.box }}</dd>
                    </dl>
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
                movie_info: null
            }
        },
        mounted () {
            console.log('usbox comp mounted')
            axios.get('/api/v2/movie/us_box').then(response => {
                this.movie_info = response.data.subjects
            }).catch(function (error) {
                console.log(error)
            })
        }
    }
</script>

<style scoped>
    .top {
        width: 100%;
        height: 130px;
        line-height: 130px;
        color: #fff;
        background: -webkit-linear-gradient(left, orange , orangered); /* Safari 5.1 - 6.0 */
        background: -o-linear-gradient(right, orange , orangered); /* Opera 11.1 - 12.0 */
        background: -moz-linear-gradient(right, orange , orangered); /* Firefox 3.6 - 15 */
        background: linear-gradient(to right, orange , orangered); /* w3c */
    }
    .top dd, .top dt {
        color: #fff;
        font-size: 15px;
    }
    dl>* {
        float: left;
        text-align: center;
    }
    dt {
        font-weight: bold;
        width: 15%;
        font-size: 15px;
    }
    .movie-img {
        display: block;
        width: 20%;
    }
    .movie-img img {
        width: 100%;
        max-height: 65px;
        max-width: 65px;
        border-radius: 100px;
    }
    .movie-title {
        font-weight: bold;
        width: 31%;
        padding: 0 2%;
        height: 100%;
    }
    .movies dl {
        height: 100px;
        line-height: 100px;
        border-bottom: 1px dashed #ddd;
    }
</style>
