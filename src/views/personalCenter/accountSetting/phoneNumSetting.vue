<template>
    <div id='phoneNum_setting'>
        <div class='group clearfix'>
            <p><input type="number" placeholder="请输入新手机号" v-model="phoneNum"></p>
            <button class="getCodeBtn" @click="getCode">{{getCodeBtnText}}</button>
        </div>
        <div class='group clearfix'>
            <p><input type="number" placeholder="请输入验证码" v-model="msgCode"></p>
        </div>
        <div class='phoneNum_setting_footer text-center'>
            <button @click="onSubmit">完成</button>        
        </div>
    </div>
</template>
<style scoped>
#phoneNum_setting .group {
    position: relative;
    background: #fff;
    font-size: 0.32rem;
    padding: 0.2rem 0 0.2rem 0;
    margin: 0.2rem 0;
    color: #3A3A3A;
}
#phoneNum_setting .group .getCodeBtn{
    position: absolute;
    right: 0.1rem;
    bottom: 0.1rem;
    padding: 0.1rem;
    border-radius: 4px;
    width: 2rem;
    height: 0.66rem;
    color: #fff;
    background: #D8D8D8;
    font-size: 0.28rem;
    border: 1px solid #FFFFFF;
}

#phoneNum_setting .group .label {
    padding-left: 0.4rem;
    padding-top: 0.13rem;
}
#phoneNum_setting .group input {
    width: 5.5rem;
    margin-left: 0.3rem;
    border: none;
    height: 0.5rem;
    font-size: 0.32rem;
    height: 0.5rem;
    line-height: 0.5rem;
    padding: 0.1rem 0;
    color: #3A3A3A;
}
#phoneNum_setting .group input::-webkit-input-placeholder {
    font-size: 0.28rem;
}
#phoneNum_setting .group input:-moz-placeholder {
    font-size: 0.28rem;
}
#phoneNum_setting .group input::-moz-placeholder {
    font-size: 0.28rem;
}
#phoneNum_setting .group input:-ms-input-placeholder {
    font-size: 0.28rem;
}
#phoneNum_setting .phoneNum_setting_footer {
    width: 100%;
    margin: 1rem 0;
    height: 0.8rem;
    line-height: 0.8rem;
    padding: 0 0.3rem;
}
#phoneNum_setting .phoneNum_setting_footer button {
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
    import { MessageBox, myButton, Toast } from 'mint-ui'

    export default {

        components: {
            myButton
        },
        props: {
        },
        data () {
            return {
                phoneNum: '',
                msgCode: '',
                getCodeBtnText: '获取验证码'
            }
        },
        created () {
        },
        mounted () {
        },
        watch: {
        },
        methods: {
            getCode () {
                if(!this.phoneNum){
                    MessageBox.alert('请输入手机号码').then(action => {
                        
                    });
                    return false;
                } 
                let count = 60
                if (this.getCodeBtnText !== '获取验证码') {
                    return
                }
                Toast({
                    message: '验证码已发送！',
                    position: 'middle'
                })
                this.getCodeBtnText = '验证码(' + count + ')s'
                let timer = setInterval(() => {
                    count--
                    if (count === 0) {
                    this.getCodeBtnText = '获取验证码'
                    clearInterval(timer)
                    } else {
                    this.getCodeBtnText = '验证码(' + count + ')s'
                    }
                }, 1000)
            },
            onSubmit () {
                if(!this.phoneNum){
                    MessageBox.alert('请输入手机号码！').then(action => {
                        
                    });
                    return false;
                }
                if(!this.msgCode){
                    MessageBox.alert('请输入验证码！').then(action => {
                        
                    });
                    return false;
                }
                alert(`手机号修改成功！`)
            }
        }
    }

</script>