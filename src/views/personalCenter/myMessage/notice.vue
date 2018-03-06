<template>
  <div>
    <div class="dyHeader">
        <ul class="clearfix">
            <li><router-link to="/personalCenter/myMessage/message">私信</router-link></li>
            <li class="active"><router-link to="/myMessage/personalCenter/notice">通知</router-link></li>
        </ul>
    </div>
    <div class="line"></div>
    <div v-for='item of itemList'>
        <div class="commondiv">
            <div class="leftdiv clearfix">
                <img :src="item.headerImg">
                <div class="namediv">
                    <P class="name clearfix">
                        <span class="fl">{{item.name}}</span>
                        <span class="fr" style="font-size:0.24rem;color:#999;">{{item.time}}</span>
                    </P>
                    <P class="label">{{item.content}}</P>
                </div>
            </div>
        </div>
        <div class="line"></div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      itemList: [
        {
          name: '李璐给你私信',
          content: '你好，我是你的新朋友哦',
          time: '1分钟前',
          headerImg: require('../../../assets/img/man.png')
        },
        {
          name: '哈哈回复你的帖子',
          content: '回复：你真是个大傻逼啊！',
          time: '2017/11/5',
          headerImg: require('../../../assets/img/woman.png')
        },
        {
          name: '李璐点赞你的帖子',
          content: '点赞：你真是个大傻逼啊！',
          time: '2017/11/5',
          headerImg: require('../../../assets/img/woman.png')
        }
      ]
    }
  },
  mounted: function() {
  }
}
</script>
<style scoped>
.commondiv{padding:0.35rem;}
.dyHeader{width:100%;height: 0.88rem;line-height: 0.88rem;font-size:0.32rem;padding:0 0.2rem;}
.dyHeader ul li{float: left;width:50%;height: 0.88rem;line-height: 0.88rem;text-align: center;}
li a{display: inline-block;width:1.8rem;height: 100%;color: #999;}
ul .active a{border-bottom:2px solid #29B6F6;color: #29B6F6;}
.leftdiv{position:relative;}
.leftdiv img{width:0.9rem;height:0.9rem;border-radius: 0.9rem;float:left;margin-right:0.15rem;}
.namediv{width:83%;float:left;}
.namediv .name{font-size:0.32rem;color: #666;margin-bottom:0.1rem;}
.namediv .label{font-size:0.28rem;color: #999;}
.btn{width:1.45rem;height:0.66rem; background:#D8D8D8;border-radius: 4px;border:1px solid #D8D8D8;font-size:0.28rem;color:#fff;margin-top: 0.13rem;}
</style>