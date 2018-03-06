<template>
    <div class="login">
        <div class="loginDiv">
            <div class="title text-center">壹基因社区</div>
            <div class="commondiv">
                <p style="margin-bottom:0.1rem;">手机号</p>
                <p><input placeholder="请输入手机号" v-model="accouont"></p>
            </div>
            <div class="commondiv">
                <p style="margin-bottom:0.1rem;">填写验证码</p>
                <p><input type="password" placeholder="请输入验证码" v-model="msgCode"></p>
                <button class="getCodeBtn" @click="getCode">{{getCodeBtnText}}</button>
            </div>
            <div class="commondiv">
                <p style="margin-bottom:0.1rem;">输入密码</p>
                <p><input type="password" placeholder="请输入密码" v-model="password"></p>
            </div>
            <div class="commondiv clrarfix">
                <span class="fl"><span style="color: #999999;">已有账号!</span> <a class="blue" @click='login'>登录</a></span>
            </div>
            <div class="bottomBtn">
                <button @click="commit">登录</button>
            </div>
        </div>
    </div>
</template>

<script>
import { MessageBox, Toast } from 'mint-ui';

export default {
  name: 'Login',
  data () {
    return {
      accouont: '',
      password: '',
      path:'',
      msgCode: '',
      getCodeBtnText: '获取验证码'
    }
  },
  mounted: function() {
  },
  methods: {
    commit () {
        if(!this.accouont){
            MessageBox.alert('请输入手机号码').then(action => {
                
            });
            return false;
        } 
        if(!this.msgCode){
            MessageBox.alert('请输入验证码');
            return false;
        }
        if(!this.password){
            MessageBox.alert('请输入密码');
            return false;
        }
        this.$router.push('index');
    },
    login () {        
        this.$router.push('/');
    },
    getCode () {
        if(!this.accouont){
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
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.login{
    width:100%;
    width: 100%;
    padding-top:0.88rem;
}
.loginDiv{padding:0 0.3rem;font-size:0.32rem;color: #3A3A3A;}
.title{padding:0.81rem 0 1.35rem 0;font-size:0.36rem;}
.commondiv{position: relative;margin-bottom:0.3rem;}
.commondiv .getCodeBtn{position:absolute;right: 0.1rem;bottom:0.1rem;padding: 0.1rem;border: 1px solid #ccc;border-radius: 3px;width:1.8rem;height:0.66rem;color:#448AFF;background: #fff;}
.commondiv input{width:100%;border: none;border-bottom: 1px solid #ccc;height:0.5rem;line-height: 0.5rem;border-radius: 0;background: #F7F7F7;}
.commondiv input:focus {border-bottom: 1px solid #448AFF;}
.bottomBtn{margin-top:1.5rem;}
.bottomBtn button{width:100%;height: 0.74rem;color:#fff;background: #448AFF;border:1px solid #448AFF;font-size:0.36rem;border-radius: 4px;}
</style>