<template>
  <div class="main-list">
      <div v-for="(obj,index) in preventDynamicList" :key="obj.userName">
            <router-link to="/personalCenter/otherUser" tag="div">
                <div class="users">
                  <img :src="obj.userImg" alt="">
                  <span>{{obj.userName}}</span>
                  <p class="fr">{{obj.date}}</p>
                </div>
            </router-link>   
            <router-link tag="div" :to="{path:'/indexPage/postDetail'}" class="item">    
              <div class="title">
                {{obj.title}}
              </div>
              <img :src="obj.mainImg" v-if="obj.mainImg!=''" class="list-banner">
              <div class="simpleMain">{{obj.simpleMain}}</div>
              <div class="attended">
                <span>{{obj.attended}}</span>已关注·<span>{{obj.comment}}</span>评论·<span>关注</span>
              </div>
              <div class="underline"></div>
            </router-link>    
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      preventDynamicList: [
        {
          userImg: "../../../static/img/icon-01.png",
          userName: "李江豪",
          date: "7分钟前",
          title: "动态标题",
          mainImg: "",
          simpleMain: "微信朋友圈怎么快速找以前发过的内容?微信朋友圈怎么快速找以前发过的内容?",
          attended: 2345,
          comment: 345
        },
        {
          userImg: "../../../static/img/icon-01.png",
          userName: "吕红秋",
          date: "7分钟前",
          title: "动态标题",
          mainImg: "../../../static/img/test.png",
          simpleMain: "微信朋友圈怎么快速找以前发过的内容?微信朋友圈怎么快速找以前发过的内容?",
          addended: 2345,
          comment: 345
        },
        {
          userImg: "../../../static/img/icon-01.png",
          userName: "王浩东",
          date: "7分钟前",
          title: "动态标题",
          mainImg: "",
          simpleMain: "微信朋友圈怎么快速找以前发过的内容?微信朋友圈怎么快速找以前发过的内容?",
          addended: 2345,
          comment: 345
        },
        {
          userImg: "../../../static/img/icon-01.png",
          userName: "王恩华",
          date: "7分钟前",
          title: "动态标题",
          mainImg: "../../../static/img/test.png",
          simpleMain: "微信朋友圈怎么快速找以前发过的内容?微信朋友圈怎么快速找以前发过的内容?",
          addended: 2345,
          comment: 345
        },
        {
          userImg: "../../../static/img/icon-01.png",
          userName: "张恒平",
          date: "7分钟前",
          title: "动态标题",
          mainImg: "",
          simpleMain: "微信朋友圈怎么快速找以前发过的内容?微信朋友圈怎么快速找以前发过的内容?",
          addended: 2345,
          comment: 345
        },
        {
          userImg: "../../../static/img/icon-01.png",
          userName: "蛋总",
          date: "7分钟前",
          title: "动态标题",
          mainImg: "../../../static/img/test.png",
          simpleMain: "微信朋友圈怎么快速找以前发过的内容?微信朋友圈怎么快速找以前发过的内容?",
          addended: 2345,
          comment: 345
        }
      ]
    };
  }
};
</script>

<style scoped>
.fl {
  float: left;
}
.fr {
  float: right;
}
.underline {
  width: 100%;
  height: 0.2rem;
  background: #ddd;
  box-sizing: content-box;
  padding: 0 0.3rem;
  margin-left: -0.3rem;
}
.item {
  padding: 0 0.3rem;
  overflow: hidden;
}
.users {
  height: 0.8rem;
  width: 100%;
  padding: 0.2rem 0.3rem 0.2rem 0.3rem;
  line-height: 0.4rem;
}
.users > img {
  width: 0.38rem;
  height: 0.38rem;
  vertical-align: middle;
}
.users > span {
  font-size: 0.28rem;
  color: #999999;
}
.users > p {
  display: inline-block;
  font-size: 0.28rem;
  color: #999999;
}
.title {
  font-size: 0.32rem;
  color: #3a3a3a;
  font-weight: bold;
  height: 0.45rem;
  line-height: 0.45rem;
}
.simpleMain {
  font-size: 0.28rem;
  line-height: 0.4rem;
  color: #666;
}
.attended {
  height: 0.8rem;
  line-height: 0.8rem;
  color: #999999;
  font-size: 0.28rem;
}
.list-banner {
  width: 100%;
  margin: 0.2rem 0;
}
</style>
