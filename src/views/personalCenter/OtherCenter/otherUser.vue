<template>
    <div class="personal">
        <div class="user">
            <div class="userpic"><img src="../../../assets/img/man.png"></div>
            <div class="usertext">
                <p class="onetext fl">殷义军踢了你一脚</p>
                <p class="onetext fl"><span class="fl">关注：2345</span><span class="fr">粉丝：2345</span></p>
            </div>
            <div class="btn fr  fs28" @click="fousOn" ref="care">+关注</div>
        </div> 
        <div class="lt30"></div>           
        <p class="bodyleft">个人签名</p>
        <div class="lt20"></div>  
        <p class="bodyleft cl fs28" style="padding-bottom:0.5rem;">这个人很懒什么都没留下</p>
        <div class="lt20color"></div>
        <div class="dynamic bodyleft bodyright">
            <router-link to="/personalCenter/otherUser/otherDynamic" tag="div" style="overflow:hidden">
                <div class="fl">
                    <img class="smallico" src="../../../../src/assets/img/message.png">
                    <span>他的动态</span>
                </div>
                <div class="fr">
                    <span class="fs28 cl">57</span>
                    <span class="fs28 cl">></span>
                </div>
            </router-link>
        </div>
        <div class="lt20color"></div>
        <div class="dynamic bodyleft bodyright">
         <router-link to="/personalCenter/otherUser/information" tag="div">
            <span class="tack">发消息</span>
        </router-link>
        </div>
        <div class="lt20color"></div>
       
    </div>
</template>
<script>
import { Toast } from 'mint-ui';
export default {
  data(){
      return{
        fousFlag:true //关注标志位
      }
  },
  methods:{
       fousOn:function(){
          if(this.fousFlag===true){
            this.$refs.care.innerHTML = "取消关注";
            this.$refs.care.style.background = "#eee";
            this.$refs.care.style.color="#999";
            this.fousFlag = false;
          Toast({
            message: '已关注',
            position: 'top',
            duration: 1000
          });
          }
         else {
            this.$refs.care.innerHTML = "+关注";
            this.$refs.care.style.background = "#29B6F6";
            this.$refs.care.style.color="#fff";
            this.fousFlag = true;
              Toast({
              message: '取消关注',
              position: 'top',
              duration: 1000
            });
         }

          
        }
      }
}
</script>

<style scoped>
    a{color:#3A3A3A}
    .personal{width:100%;height:13.3rem;color:#3A3A3A;background:#fff;font-size:0.32rem;}
    .fl{float:left;}
    .fr{float:right;}
    .cl{color:#999;}
    .lt20{height:0.2rem;}
    .lt30{height:0.3rem;}
    .fs28{font-size:0.28rem;}
    .fs32{font-size:0.32rem;}
    .lt20color{height:0.2rem;background:#E9E9E9;}
    .bodyleft{padding-left:0.3rem;}
    .bodyright{padding-right:0.3rem;}
    .user{
        width:100%;
        overflow: hidden;
        padding:0.59rem 0.34rem 0.71rem ; 
        border:1px solid #eee;
    }
    .userpic{
        width:1.2rem;
        height:1.2rem;
        float:left;
        margin-right:0.44rem;
    }
    .userpic>img{
        width:100%;
        height:100%;
    }
    .usertext{
        width:2.89rem;
        float:left;
        font-size:0.36rem;
    }
    .onetext{
        width:100%;
        height:0.33rem;
        margin-bottom:10px;
    }
    .onetext>span{
        width:1.3rem;
        font-size:0.24rem;
    }
    .btn{
        width: 1.45rem;
        height: 0.66rem;
        line-height: 0.66rem;
        background: rgb(41, 182, 246);
        text-align: center;
        color: #fff;
    }
    /* 个性签名 （标签 ：签名）*/
    .signature{
        
    }
    /* 他人的动态 && 发送消息的展示div）*/
    .dynamic{
        width:100%;
        height:0.85rem;
        line-height:0.85rem;
    }
    .smallico{
        width:0.45rem;
        height:0.45rem; 
        vertical-align: middle;
        text-align: center;
    }
    /* 发送消息 */
    .tack{display:block;text-align:center;}
    /* 底部空白 */
    .footer_another{
        height:4.3rem;
        background:#fff;
    }
</style>