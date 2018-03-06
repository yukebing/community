<template>
    <div id='accountPwd_setting'>
        <div class='group clearfix'>
            <span class='label'>新密码：</span>
            <input type="text" placeholder="请输入新密码" v-model="newPwd">
        </div>
        <div class='group clearfix'>
            <span class='label'>确认密码：</span>
            <input class='surePwd' type="password" placeholder="请重复新密码" v-model="surePwd">
        </div>
        <div class='accountPwd_setting_footer text-center'>
            <button @click="onSubmit">完成</button>        
        </div>
    </div>
</template>
<style scoped>
#accountPwd_setting .group {
    background: #fff;
    font-size: 0.32rem;
    padding: 0.2rem 0 0.2rem 0;
    margin: 0.2rem 0;
    color: #3A3A3A;
}
#accountPwd_setting .group .label {
    padding-left: 0.4rem;
}
#accountPwd_setting .group input {
    width: 5.4rem;
    border: none;
    font-size: 0.32rem;
    line-height: 0.5rem;
    height: 0.5rem;
    padding: 0.1rem 0;
}
#accountPwd_setting .group input.surePwd {
    width: 5.1rem;
}
#accountPwd_setting .group input::-webkit-input-placeholder {
    font-size: 0.28rem;
}
#accountPwd_setting .group input:-moz-placeholder {
    font-size: 0.28rem;
}
#accountPwd_setting .group input::-moz-placeholder {
    font-size: 0.28rem;
}
#accountPwd_setting .group input:-ms-input-placeholder {
    font-size: 0.28rem;
}
#accountPwd_setting .accountPwd_setting_footer {
    width: 100%;
    margin: 1rem 0;
    height: 0.8rem;
    line-height: 0.8rem;
    padding: 0 0.3rem;
}
#accountPwd_setting .accountPwd_setting_footer button {
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
                newPwd: '',
                surePwd: ''
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
                if(!this.newPwd){
                    MessageBox.alert('请输入新密码！').then(action => {
                        
                    });
                    return false;
                }
                if(!this.surePwd){
                    MessageBox.alert('请重复新密码！').then(action => {
                        
                    });
                    return false;
                }
                alert(`密码修改成功！`)
            }
        }
    }

</script>