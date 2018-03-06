<template>
  <ul style="overflow-x: hidden;">
    <div class="underline"></div>
    <ul class="ask">
      <div class="ask-head">
        <div class="ask-title">我们欢迎更多的热心米粉加入小米社区同城会团队，担起这份光荣责任！</div>
        <div class="attend">
          <p>123已关注 ·345条评论</p>
          <button  @click="fousOn" ref="care">+关注</button>
        </div>
      </div>
      <div class="line"></div>
      <div class="ask-author">
        作者：<span>匿名提问</span>
      </div>
      <ul class="imgbox">
        <li><img src="../../assets/img/girl1.jpg" alt="" class="listImg"></li>
        <li><img src="../../assets/img/girl2.jpg" alt="" class="listImg"></li>
        <li><img src="../../assets/img/girl3.jpg" alt="" class="listImg"></li>
        <li><img src="../../assets/img/girl4.jpg" alt="" class="listImg"></li>
        <li><img src="../../assets/img/girl1.jpg" alt="" class="listImg"></li>
        <li><img src="../../assets/img/girl2.jpg" alt="" class="listImg"></li>
      </ul>
      <div class="text_describe">
          问题描述问题描述问题描述问题描述问题描述问题描述问题描述问题描述问题描述问题描述问题描述问题描述问题描述问题描述
      </div>
    </ul>
    <div class="all-ask">全部回答</div>
    <div class="ask-list" v-for="(item,index) in forumList">
      <div class="list-top">
        <div class="aname-img">
          <img src="../../assets/img/girl4.jpg">
        </div>
        <p class="aname">{{item.forumUser}}</p>
        <span class="atime">{{item.formTime}}</span>
      </div>
      <div class="list-middle">{{item.formContent}}</div>
      <div class="list-bottom clearfix">
        <!-- <i><img src="../../assets/img/good-gray.png"></i> -->
        <p class='forum_list_item_desc'><i class='fl' @click="addGood(index)"><img src="../../assets/img/good-gray.png"></i>{{item.goodNum}} <span @click="replay(item.forumUser)">· 回复 </span>· <router-link :to="{path:'/reply/detail',query:{forumUser:item.forumUser}}"  style='color: #999;'>查看回复</router-link> · <a @click='showReportWrapper(index)'>举报</a></p>
            <div class="report_wrapper" v-if='item.showReportWrapper'>
                <button @click='report(index, "广告")'>广告</button>
                <button @click='report(index, "淫秽")'>淫秽</button>
                <button @click='report(index, "其他")'>其他</button>
             </div>
      </div>
    </div>
    <my-message-box :show= 'showBox'  @change="hidBox" :replayName="sendToSon" ref="myMessage"></my-message-box>
    <button class='fr send_form_btn' @click="onFocus">发布<br>评论</button>
  </ul>
</template>

<script>
import { MessageBox } from "mint-ui";
import { Toast } from 'mint-ui';
import MyMessageBox from ".././messageBox.vue";
export default {
  data() {
    return {
      a: 0,
      sendToSon: "",
      showBox: false,
      fousFlag:true,
      good:true,//点赞标志位
      forumNum: Math.floor(Math.random() * 200 + 100),
      forumList: [
        {
          forumId: Math.floor(Math.random() * 200 + 100),
          forumUser: "XYTang",
          formTime: "前天 21:11",
          formContent: "收款卡刷卡科技啥道具卡三德科技疯狂进攻我人饿哦我微积分你给的嘉年华诶我",
          goodNum: Math.floor(Math.random() * 200 + 100),
          showReportWrapper: false
        },
        {
          forumId: Math.floor(Math.random() * 200 + 100),
          forumUser: "XY",
          formTime: "前天 15：11",
          formContent: "收款卡刷卡科技啥道具卡三德科技疯狂进攻我人饿哦我微积分你给的嘉年华诶我",
          goodNum: Math.floor(Math.random() * 200 + 100),
          showReportWrapper: false
        },
        {
          forumId: Math.floor(Math.random() * 200 + 100),
          forumUser: "XYTang",
          formTime: "前天 21:11",
          formContent: "收款卡刷卡科技啥道具卡三德科技疯狂进攻我人饿哦我微积分你给的嘉年华诶我",
          goodNum: Math.floor(Math.random() * 200 + 100),
          showReportWrapper: false
        },
        {
          forumId: Math.floor(Math.random() * 200 + 100),
          forumUser: "XY",
          formTime: "前天 15：11",
          formContent: "收款卡刷卡科技啥道具卡三德科技疯狂进攻我人饿哦我微积分你给的嘉年华诶我",
          goodNum: Math.floor(Math.random() * 200 + 100),
          showReportWrapper: false
        },
        {
          forumId: Math.floor(Math.random() * 200 + 100),
          forumUser: "XYTang",
          formTime: "前天 21:11",
          formContent: "收款卡刷卡科技啥道具卡三德科技疯狂进攻我人饿哦我微积分你给的嘉年华诶我",
          goodNum: Math.floor(Math.random() * 200 + 100),
          showReportWrapper: false
        },
        {
          forumId: Math.floor(Math.random() * 200 + 100),
          forumUser: "XY",
          formTime: "前天 15：11",
          formContent: "收款卡刷卡科技啥道具卡三德科技疯狂进攻我人饿哦我微积分你给的嘉年华诶我",
          goodNum: Math.floor(Math.random() * 200 + 100),
          showReportWrapper: false
        },
        {
          forumId: Math.floor(Math.random() * 200 + 100),
          forumUser: "XYTang",
          formTime: "前天 21:11",
          formContent: "收款卡刷卡科技啥道具卡三德科技疯狂进攻我人饿哦我微积分你给的嘉年华诶我",
          goodNum: Math.floor(Math.random() * 200 + 100),
          showReportWrapper: false
        },
        {
          forumId: Math.floor(Math.random() * 200 + 100),
          forumUser: "XY",
          formTime: "前天 15：11",
          formContent: "收款卡刷卡科技啥道具卡三德科技疯狂进攻我人饿哦我微积分你给的嘉年华诶我",
          goodNum: Math.floor(Math.random() * 200 + 100),
          showReportWrapper: false
        }
      ],
      interval: null
    };
  },
  methods: {
    hidBox() {
      this.showBox = false;
    },
    onFocus() {
      this.showBox = true;
      this.$refs.myMessage.closeMessage(); //调用meaaageBox子组件的方法
      // console.log(value);
    },
    replay(userName) {
      this.showBox = true;
      this.sendToSon = userName;
      this.$refs.myMessage.replayMessage(); //调用meaaageBox子组件的方法
    },
    //点赞
    addGood:function(index){
      for(var i =0 ;i<this.forumList.length;i++){
        if( i === index){
          if(this.good === true){
            Toast({
              message: "已点赞",
              position: "middle",
              duration: 1000
            });
            this.good = false;
          }
          else{
            Toast({
              message: "取消点赞",
              position: "middle",
              duration: 1000
            });
            this.good = true;
          }
        }
      }
     
    },
    onBlur() {},
    scrollToEnd() {
      document.body.scrollTop = document.body.scrollHeight;
    },
    showReportWrapper(index) {
      this.forumList[index].showReportWrapper = !this.forumList[index]
        .showReportWrapper;
    },
    fousOn: function() {
      if (this.fousFlag === true) {
        this.$refs.care.innerHTML = "取消关注";
        this.$refs.care.style.background = "#eee";
        this.$refs.care.style.color = "#999";
        this.fousFlag = false;
        Toast({
          message: "已关注",
          position: "top",
          duration: 1000
        });
      } else {
        this.$refs.care.innerHTML = "+关注";
        this.$refs.care.style.background = "#29B6F6";
        this.$refs.care.style.color = "#fff";
        this.fousFlag = true;
        Toast({
          message: "取消关注",
          position: "top",
          duration: 1000
        });
      }
    },
    report(index, type) {
      this.forumList[index].showReportWrapper = false;
      MessageBox.confirm(`你确定举报该信息，举报原因：${type}?`).then(
        action => {
          alert(`${type}举报成功`);
        },
        () => {}
      );
    }
  },
  components: {
    MyMessageBox
  }
};
</script>

<style scoped>
i {
  width: 0.4rem;
  height: 0.4rem;
  padding-top: 0.04rem;
  display: inline-block;
  margin-right: 0.1rem;
}
i img {
  width: 100%;
  height: 100%;
}
.underline {
  width: 100%;
  height: 0.2rem;
  background: #e9e9e9 100%;
}
.line {
  border-bottom: 1px solid #d8d8d8;
}
.ask {
  padding: 0.26rem 0.3rem 0rem 0.3rem;
}
.ask-title {
  color: #3a3a3a;
  font-size: 0.32rem;
  line-height: 0.45rem;
  font-weight: bold;
}
.attend {
  height: 0.8rem;
  width: 100%;
  overflow: hidden;
}
.line {
  height: 1px;
  width: 7.5rem;
  color: #d8d8d8;
  margin-left: -0.3rem;
}
.attend > p {
  color: #999999;
  font-size: 0.28rem;
  line-height: 0.8rem;
  height: 100%;
  display: inline-block;
}
.attend > button {
  width: 1.45rem;
  height: 0.66rem;
  background: #29b6f6;
  border-radius: 0.04rem;
  border: 0;
  color: #ffffff;
  float: right;
  margin-top: 0.02rem;
}
.ask-author {
  height: 1rem;
  width: 7.5rem;
  line-height: 1rem;
  color: #999999;
}
.all-ask {
  width: 7.5rem;
  padding-left: 0.3rem;
  height: 0.88rem;
  background: #e9e9e9;
  line-height: 0.88rem;
  color: #999999;
}
.ask-list {
  border-bottom: 1px solid #d8d8d8;
  position: relative;
}
.list-top {
  padding: 0.3rem;
  height: 1.1rem;
  width: 100%;
}
.aname-img {
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
  overflow: hidden;
  float: left;
}
.aname-img > img {
  width: 100%;
}
.aname {
  font-size: 0.28rem;
  color: #3a3a3a;
  font-weight: bold;
  line-height: 0.5rem;
  float: left;
  margin-left: 0.1rem;
}
.atime {
  font-size: 0.28rem;
  color: #999999;
  line-height: 0.5rem;
  float: right;
}
.list-middle {
  padding: 0 0.3rem 0 0.9rem;
  color: #666;
  font-size: 0.28rem;
  line-height: 0.4rem;
}
.list-bottom > i {
  width: 0.3rem;
  height: 0.3rem;
  padding-top: 0.03rem;
  margin-right: 0.1rem;
  float: left;
}
.list-bottom > i > img {
  width: 100%;
}
.list-bottom {
  /* padding: 0.18rem 0.3rem 0.2rem 0.9rem; */
  color: #999999;
  overflow: hidden;
  margin-bottom: 0.3rem;
}
.reply {
  font-size: 0.28rem;
  color: #999999;
  line-height: 0.4rem;
}
.imgbox {
  clear: both;
  overflow: hidden;
  margin-bottom: 0.3rem;
}
.imgbox li {
  float: left;
  list-style: none;
  margin: 0.1rem 0.2rem 0.1rem 0;
}
imgbox li > :last-child {
  margin-right: 0;
}
.listImg {
  width: 2.1rem;
  height: 1.84rem;
}
.text_describe {
  font-size: 0.28rem;
  margin: 0.3rem 0;
  color: #666666;
}
@keyframes upanddown {
  0% {
    bottom: 0.7rem;
  }
  50% {
    bottom: 0.8rem;
  }
  100% {
    bottom: 0.7rem;
  }
}
.send_form_btn {
  position: fixed;
  bottom: 0.7rem;
  right: 0.5rem;
  width: 1.2rem;
  height: 1.2rem;
  border-radius: 50% 50%;
  background: #448aff;
  border: 1px solid #448aff;
  -webkit-appearance: none; /*去除系统默认的样式*/
  color: #fff;
  animation: upanddown 2s infinite;
}
.forum_list_item_desc {
  margin-top: 0.3rem;
  line-height: 0.55rem;
  padding-left: 0.9rem;
  color: #999;
}
.report_wrapper {
  position: absolute;
  top: 2.6rem;
  left: 4.5rem;
  width: 1.5rem;
  background: #fff;
  z-index: 99;
  box-shadow: 0px 0px 1px 0.01px #888;
  overflow: hidden;
}
.report_wrapper button {
  width: 100%;
  padding: 0.2rem 0.5rem 0.2rem 0.2rem;
  border: none;
  background: #fff;
  color: #666;
}
</style>
