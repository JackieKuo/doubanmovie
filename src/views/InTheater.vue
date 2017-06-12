<template>
    <div class="in-theater">
        <ul class="movies clearfix">
            <li v-for="movie in movie_info" class="white-bg">
                <router-link :to="{ path: '/movie', query: { id: movie.id } }">
                    <i v-if="movie.collect_count>50000" class="fa fa-bookmark" aria-hidden="true"></i>
                    <div class=""><img :src="movie.images.large" alt=""></div>
                    <p class="ellipsis">{{ movie.title }}</p>
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
            console.log('intheater comp mounted')
            axios.get('/api/v2/movie/in_theaters').then(response => {
                this.movie_info = this.movie_info.concat(response.data.subjects)
            }).catch(function (error) {
                console.log(error)
            })
        }
    }
</script>

<style scoped>
    .in-theater {
        width: 100%;
    }
    .movies {
        width: 96%;
        padding: 2% 2%;
    }
    li {
        width: 30%;
        float: left;
        margin: 1% 1%;;
        position: relative;
        border: 1px solid #ddd;
    }
    li img {
        display: block;
        margin: 0 auto;
        height: 140px;
        max-width: 100%;
    }
    li p {
        display: block;
        width: 90%;
        padding: 2% 5%;
        text-align: center;
    }
    .fa-bookmark {
        position: absolute;
        font-size: 35px;
        top: -5px;
        color: orangered;
    }
    .fa-bookmark::after{
        content: 'hot';
        color: #fff;
        font-size: 12px;
        top: -12px;
        left: -22px;
        position: relative;
    }
</style>

