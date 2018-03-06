<template>
    <div id='email_setting'>
        <div class='group clearfix'>
            <span class='label'>邮箱：</span>
            <input type="email" placeholder="请输入邮箱地址" v-model="email">
        </div>
        <div class='email_setting_footer text-center'>
            <button @click="onSubmit">完成</button>        
        </div>
    </div>
</template>
<style scoped>
#email_setting .group {
    background: #fff;
    font-size: 0.35rem;
    padding: 0.2rem 0 0.2rem 0;
    margin: 0.2rem 0;
    color: #3A3A3A;
}
#email_setting .group .label {
    padding-left: 0.4rem;
    padding-top: 0.05rem;
}
#email_setting .group input {
    width: 5.5rem;
    border: none;
    height: 0.5rem;
    line-height: 0.5rem;
    font-size: 0.32rem;
    padding: 0.1rem 0;
}
#email_setting .group input::-webkit-input-placeholder {
    font-size: 0.28rem;
}
#email_setting .group input:-moz-placeholder {
    font-size: 0.28rem;
}
#email_setting .group input::-moz-placeholder {
    font-size: 0.28rem;
}
#email_setting .group input:-ms-input-placeholder {
    font-size: 0.28rem;
}
#email_setting .email_setting_footer {
    width: 100%;
    margin: 1rem 0;
    height: 0.8rem;
    line-height: 0.8rem;
    padding: 0 0.3rem;
}
#email_setting .email_setting_footer button {
    width: 100%;
    height: 100%;
    font-size: 0.36rem;
    border: none;
    border-radius: 0.1rem;
    color: #fff;
    background: #448AFF;
}
</style>
<script>
    import { MessageBox, myButton } from 'mint-ui'

    export default {

        components: {
            myButton
        },
        props: {
        },
        data () {
            return {
                email: ''
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
                if(!this.email){
                    MessageBox.alert('请输入邮箱地址！').then(action => {
                        
                    });
                    return false;
                }
            }
        }
    }

</script>