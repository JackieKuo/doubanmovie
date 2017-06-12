<template>
    <div class="coming-soon">
        <ul class="movies clearfix">
            <li v-for="movie in movie_info" class="white-bg">
                <router-link :to="{ path: '/movie', query: { id: movie.id } }">
                    <img :src="movie.images.large" alt="">
                    <p class="white-bg ellipsis clearfix">
                        <span class="sub-title">{{ movie.title }}  <i class="fa fa-star" aria-hidden="true" v-if="movie.rating.average" v-for="index in Math.round(movie.rating.average/2)"></i></span>
                        <span class="rating">{{ movie.collect_count }} <i class="fa fa-thumbs-o-up" aria-hidden="true"></i></span>
                    </p>
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
            console.log('comingsoon comp mounted')
            axios.get('/api/v2/movie/coming_soon').then(response => {
                this.movie_info = this.movie_info.concat(response.data.subjects)
            }).catch(function (error) {
                console.log(error)
            })
        }
    }
</script>

<style scoped>
    .coming-soon {
        color: #333;
    }
    .movies {
        text-align: center;
        padding: 2% 0;
    }
    li {
        margin-bottom: 4%;
        box-shadow: 0 0 10px #ddd;
    }
    li img {
        display: block;
        margin: 0 auto;
        min-width: 90%;
        max-width: 100%;
        padding-top: 2%;
        padding-bottom: 5%;
        border-bottom: 2px dashed #eee;
    }
    li p {
        display: block;
        margin: 0 auto;
        padding: 2% 5%;
    }
    li p>* {
        float: left;
        display: block;
    }
    .sub-title {
        width: 80%;
        text-align: left;
    }
    .rating {
        width: 20%;
    }
</style>
