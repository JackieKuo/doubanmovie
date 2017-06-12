import Vue from 'vue'

export default new Vue({
    data () {
        return {
            showMainMenu: false
        }
    },
    created () {
        this.$on('toggleMainMenu', () => { this.showMainMenu = !this.showMainMenu })
    },
    methods: {
        toggleMainMenu () {
            this.showMainMenu = !this.showMainMenu
        }
    }
})