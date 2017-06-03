<template>
    <div class="index">
        <top-menu></top-menu>
        <router-view></router-view>
    </div>
</template>

<script>
    import TopMenu from './topmenu'
    export default {
        components: { TopMenu }
    }
</script>
