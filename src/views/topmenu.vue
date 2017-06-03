<template>
    <div class="header">
        <div class="left"><i class="fa fa-bars" aria-hidden="true"></i></div>
        <div class="medium">豆瓣电影</div>
        <div class="right"><i class="fa fa-user" aria-hidden="true"></i></div>
    </div>
</template>

<script>
    export default {}
</script>

<style scoped>
    .header {
        width: 100%;
        height: 90px;
        background: #333;
        line-height: 90px;
    }
    .left {
        float: left;
        width: 35%;
    }
    .left i {
        margin-left: 30px;
    }
    .medium {
        float: left;
        width: 30%;
        text-align: center;
    }
    .right {
        float: right;
        color: #ccc;
        width: 35%;
        text-align: right;
    }
    .right i {
        padding-right: 30px;
    }
</style>