<template>
    <div id="ask_next">
        <p><textarea placeholder="请详细描述您的问题" v-model="content"></textarea></p>
        <div class='group' style='margin-bottom: 0.3rem;'>
            <p>匿名提问</p>
            <div class='swith_wrapper'>
                <my-switch v-model="anonymous"></my-switch>
            </div>
        </div>
        <div class='ask_next_footer text-center' :class="{'disabled': !content}">
            <button @click="onSubmit">发布</button>        
        </div>
    </div>
</template>
<style scoped>
    #ask_next textarea{background: #fff;width:100%;height: 3.5rem;border:none;border-bottom:1px solid #d8d8d8;border-radius:0;font-size:0.28rem;padding: 0.2rem;}
    #ask_next .group {
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
    #ask_next .group .swith_wrapper {
        position: absolute;
        right: 0.3rem;
        bottom:0.25rem;
    }
    #ask_next .ask_next_footer {
        width: 100%;
        margin: 1rem 0;
        height: 0.8rem;
        line-height: 0.8rem;
        padding: 0 0.3rem;
    }
    #ask_next .ask_next_footer button {
        width: 100%;
        height: 100%;
        font-size: 0.36rem;
        border: none;
        border-radius: 0.1rem;
        color: #fff;
        background: #448AFF;
    }
    #ask_next .ask_next_footer.disabled button{color: #666;background: #D8D8D8;border: 1px solid #D8D8D8;}
</style>
<script>
    import mySwitch from '../personalCenter/accountSetting/mySwitch.vue'

    export default {

        components: {
            mySwitch
        },
        props: {
        },
        data () {
            return {
                anonymous: false,
                content: ''
            }
        },
        created () {
        },
        mounted () {
        },
        watch: {
        },
        methods: {
            onSubmit () {

            }
        }
    }

</script>