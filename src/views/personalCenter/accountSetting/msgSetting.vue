<template>
    <div id='msg_seeting'>
        <div class='group' style='margin-bottom: 0.3rem;'>
            <p>接收所有人消息</p>
            <div class='swith_wrapper'>
                <my-switch v-model="all" @change='change("all")'></my-switch>
            </div>
        </div>
        <div class='group' style='margin-bottom: 0.3rem;'>
            <p>只接收关注我的人</p>
            <div class='swith_wrapper'>
                <my-switch v-model="only" @change='change("only")'></my-switch>
            </div>
        </div>
    </div>
</template>
<style scoped>
#msg_seeting .group {
    position: relative;
    background: #fff;
    height: 1.12rem;
    line-height: 1.12rem;
    font-size: 0.32rem;
    padding: 0 0.3rem;
    margin: 0.2rem 0;
    color: #3A3A3A;
    overflow: hidden;
}
#msg_seeting .group .swith_wrapper {
    position: absolute;
    right: 0.3rem;
    bottom:0.25rem;
}
</style>
<script>
    import { Cell } from 'mint-ui'
    import mySwitch from './mySwitch.vue'

    export default {

        components: {
            Cell,
            mySwitch
        },
        props: {
        },
        data () {
            return {
                all: true,
                only: false
            }
        },
        created () {
        },
        mounted () {
        },
        watch: {
        },
        methods: {
            change (type) {
                this.only = type === "all"? !this.all: this.only
                this.all = type === "only"? !this.only: this.all
            }
        }
    }

</script>