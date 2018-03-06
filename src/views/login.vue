<template>
    <div class="login">
        <div class="loginDiv">
            <div class="title text-center">壹基因社区</div>
            <div class="commondiv">
                <p style="margin-bottom:0.1rem;">手机号</p>
                <p><input placeholder="请输入手机号" v-model="accouont"></p>
            </div>
            <div class="commondiv">
                <p style="margin-bottom:0.1rem;">密码</p>
                <p><input type="password" placeholder="请输入密码" v-model="password"></p>
            </div>
            <div class="commondiv clrarfix">
                <span class="fl"><span style="color: #999999;">还没有账号</span> <a class="blue" @click='go("register")'>注册</a></span>
                <a class="fr blue" @click='go("loginByCode")'>验证码登录</a>
            </div>
            <div class="bottomBtn">
                <button @click="commit">登录</button>
            </div>
        </div>
    </div>
</template>

<script>
import { MessageBox  } from 'mint-ui';

export default {
  name: 'Login',
  data () {
    return {
      accouont: '',
      password: '',
      path:''
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
        if(!this.password){
            MessageBox.alert('请输入密码');
            return false;
        }
        this.$router.push('index');
    },
    go (name) {
        this.$router.push(name);
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
.commondiv{margin-bottom:0.3rem;}
.commondiv input{width:100%;border: none;border-bottom: 1px solid #ccc;height:0.5rem;line-height: 0.5rem;border-radius: 0;background: #F7F7F7;}
.commondiv input:focus {border-bottom: 1px solid #448AFF;}
.bottomBtn{margin-top:1.5rem;}
.bottomBtn button{width:100%;height: 0.74rem;color:#fff;background: #448AFF;border:1px solid #448AFF;font-size:0.36rem;border-radius: 4px;}
</style>