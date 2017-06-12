<template>
    <div class="celebrity common-text">
        <div class="basic-info clearfix">
            <img :src="celebrity_info.avatars.large" alt=""></dt>
            <div>
                    <h3>{{ celebrity_info.name }}</h3>
                    <p>姓别：{{ celebrity_info.gender }}</p>
                    <p>出生地：{{ celebrity_info.born_place }}</p>
                    <p>英文名：{{ celebrity_info.name_en }}</p>
                    <p>别称：{{ celebrity_info.aka.join('/') || '无' }}</p>
            </div>
        </div>
        <div class="works">
            <p class="sub-title">相关作品</p>
            <ul>
                <li v-for="work in celebrity_info.works">
                    <router-link :to="{ path: '/movie', query: { id: work.subject.id } }" class="clearfix">
                        <img :src="work.subject.images.medium" alt="">
                        <div class="summary">
                            <h4>{{ work.subject.title }}</h4>
                            <p>{{ work.subject.original_title }}</p>
                            <p>{{ work.subject.genres.join('， ') }}</p>
                            <p class="rating">
                                <i class="fa fa-star" aria-hidden="true" v-for="index in Math.round(work.subject.rating.average/2)"></i>
                                <span>{{ work.subject.rating.average }}分</span>
                            </p>
                        </div>
                    </router-link>
                </li>
            </ul>
        </div>
        <div class="handle">
            <a href="#" class="back-btn btn" @click="$router.go(-1)">返回</a>
            <a href="#" class="vote-btn btn" @click="$router.push({ path: '/' })">首页</a>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        data () {
            return {
                celebrity_info: null
            }
        },
        mounted () {
            console.log('celebrity comp mounted')
            axios.get('/api/v2/movie/celebrity/' + this.$route.query.id).then(response => {
                this.celebrity_info = response.data
            }).catch(function (error) {
                console.log(error)
            })
        }
    }
</script>

<style scoped>
    .celebrity {
        width: 100%;
        background: #fff;
    }
    .basic-info {
        padding: 2% 4%;
        border-bottom: 2px dashed #eee;
    }
    .basic-info>* {
        float: left;
    }
    .basic-info>img {
        display: block;
        width: 30%;
        max-height: 150px;
        max-width: 120px;
        margin: 0 auto;
    }
    .basic-info>div {
        width: 60%;
        padding: 0 5%;
    }
    .basic-info h3 {
        margin-bottom: 10px;
    }
    .basic-info>div p {
        margin: 5px 0;
    }
    .works {
        padding: 2% 4%;
    }
    li {
        margin: 2% 0;
        background: #f6f6f6;
        overflow: hidden;
    }
    li>a {
        display: block;
        width: 100%;
    }
    li>a>* {
        float: left;
    }
    li img {
        display: block;
        width: 30%;
        max-width: 70px;
    }
    .summary {
        padding: 0 5%;
        max-width: 60%;
    }
    .summary>*{
        margin: 5px 0;
        width: 100%;
    }
    .handle {
        text-align: center;
        padding: 5%;
    }
    .handle a {
        color: #fff;
    }
</style>

