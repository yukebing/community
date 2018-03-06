<template>
  <div style="padding-bottom: 1rem;">
    <div class="head">
      <div class="head-img fl">
        <img src="../../assets/img/icon-01.png">
      </div>
      <div class="head-info fl">
        <p class="head-title">预防</p>
        <p class="head-attention-num">关注数：<span>2345</span></p>
      </div>
      <div class="head-attention-add fr" @click="fousOn" ref="care">
        +关注
      </div>
    </div>
    <div class="nav">
      <router-link tag='div' :to="{path:'/module/prevent/dynamic'}">动态</router-link>
      <router-link tag='div' :to="{path:'/module/prevent/hot'}">热门</router-link>
      <router-link tag='div' :to="{path:'/module/prevent/essence'}">精华</router-link>
    </div>
    <div class="underline"></div>
    <router-view></router-view>
  </div>
</template>

<script>
import { Toast } from 'mint-ui';
export default{
      data(){
        return{
          fousFlag:true
        }     
      },
      mounted:function(){

      },
      methods:{
        fousOn:function(){
          if(this.fousFlag===true){
            this.$refs.care.innerHTML = "已关注";
            this.fousFlag = false;
          Toast({
            message: '已关注',
            position: 'top',
            duration: 1000
          });
          }
         else {
            this.$refs.care.innerHTML = "+关注";
            this.fousFlag = true;
              Toast({
              message: '+关注',
              position: 'top',
              duration: 1000
            });
         }

          
        }
      }
    }

</script>

<style scoped>
  .fl{
    float: left;
  }
  .fr{
    float: right;
  }
  .head{
    width:7.5rem;
    height:1.9rem;
    padding:0.4rem 0.3rem 0 0.46rem;
    overflow: hidden;
    border-bottom:1px solid #D8D8D8;
  }
  .head-img{
    width:0.94rem;
    height:0.94rem;
    margin-right: 0.25rem;
  }
  .head-img>img{
    width: 100%;
  }
  .head-title{
    font-size: 0.32rem;
    color: #666;
  }
  .head-attention-num{
    font-size: 0.28rem;
    color: #666;
  }
  .head-attention-add{
    width:1.45rem;
    height:0.66rem;
    line-height: 0.66rem;
    text-align: center;
    background: #29B6F6;
    border: 1px solid #FFFFFF;
    border-radius: 4px;
    color: #FFFFFF;
    margin-top: 0.035rem;
  }
  .nav{
    height:0.9rem;
    width:7.5rem;
    line-height: 0.83rem;
    overflow: hidden;
  }
  .nav>div{
    float: left;
    margin-left: 0.26rem;
    font-size: 0.32rem;
    color: #666;
    padding:0 0.2rem;
  }
  .nav>.router-link-active{
    color: #29B6F6;
    border-bottom: 2px solid #29B6F6;;
    font-weight: bold;

  }
  .underline{
    width: 100%;
    height:0.2rem;
    background: #ddd;
  }
</style>
