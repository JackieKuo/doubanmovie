<template>
    <div class="top250">
        <ul class="movies">
            <li v-for="(movie, index) in movie_info">
                <router-link :to="{ path: '/movie', query: { id: movie.id } }" class="white-bg clearfix">
                    <div class="tag">
                        {{ index + 1 }}
                    </div>
                    <div class="content clearfix">
                        <img :src="movie.images.large" alt="">
                        <div class="info">
                            <h3>{{ movie.title }}</h3>
                            <p>{{ movie.original_title }}</p>
                            <p>{{ movie.genres.join('， ') + ' / ' + movie.year }}</p>
                            <p class="rating">
                                <i class="fa fa-star" aria-hidden="true" v-for="i in Math.round(movie.rating.average/2)"></i>
                                <span>{{ movie.rating.average }}</span>
                            </p>
                            <p class="score"><i class="fa fa-thumbs-o-up" aria-hidden="true"></i><span>{{ movie.collect_count }}</span></p>
                        </div>
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
                movie_info: []
            }
        },
        mounted () {
            console.log('top250 comp mounted')
            axios.get('/api/v2/movie/top250').then(response => {
                this.movie_info = this.movie_info.concat(response.data.subjects)
            }).catch(function (error) {
                console.log(error)
            })
        }
    }
</script>

<style scoped>
    .movies {
        width: 96%;
        margin: 2%;
    }
    li {
        margin-bottom: 2%;
        width: 100%;
    }
    li>a {
        display: block;
        width: 100%;
        position: relative;
    }
    .tag {
        width: 10%;
        height: 15%;
        border-radius: 0 0 160px 0;
        background: orangered;
        text-align: center;
        font-weight: bold;
        color: #fff;
        position: absolute;
        
    }
    .content {
        width: 100%;
    }
    .content>* {
        float: left;
    }
    .content img {
        display: block;
        width: 20%;
        margin: 2%;
    }
    .info {
        width: 72%;
        padding: 2%;
    }
    .info>* {
        margin: 2%;
    }
    .score span {
        color: orangered;
        font-weight: bold;
        margin-left: 5%;
    }
</style>
