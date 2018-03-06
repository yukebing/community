<template>
  <div class="main-list">
<<<<<<< HEAD
    <router-link tag="div" :to="{path:'/indexPage/askDetail'}" class="item" v-for="obj in preventDynamicList" key="n">
      <div class="users">
        <img :src="obj.userImg" alt="">
        <span>{{obj.userName}}</span>
        <p class="fr">{{obj.date}}</p>
      </div>
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
</template>

<script>
  export default {
    data(){
      return{
        preventDynamicList:[
          {
            userImg:'../../../static/img/icon-01.png',
            userName:'张无忌',
            date:'7分钟前',
            title:'不得不说的秘密',
            mainImg:'',
            simpleMain:'张无忌喜欢赵敏。张无忌喜欢赵敏。张无忌喜欢赵敏。张无忌喜欢赵敏。张无忌喜欢赵敏。',
            attended:2345,
            comment:345,
          },
          {
            userImg:'../../../static/img/icon-01.png',
            userName:'周芷若',
            date:'7分钟前',
            title:'不得不说的秘密',
            mainImg:'../../../static/img/test.png',
            simpleMain:'周芷若喜欢张无忌。周芷若喜欢张无忌。周芷若喜欢张无忌。周芷若喜欢张无忌。周芷若喜欢张无忌。',
            addended:2345,
            comment:345,
          },
          {
            userImg:'../../../static/img/icon-01.png',
            userName:'宋青书',
            date:'7分钟前',
            title:'不得不说的秘密',
            mainImg:'',
            simpleMain:'宋青书喜欢周芷若。宋青书喜欢周芷若。宋青书喜欢周芷若。宋青书喜欢周芷若。',
            addended:2345,
            comment:345,
          },
          {
            userImg:'../../../static/img/icon-01.png',
            userName:'赵敏',
            date:'7分钟前',
            title:'不得不说的秘密',
            mainImg:'../../../static/img/test.png',
            simpleMain:'反正不喜欢宋青书。反正不喜欢宋青书。反正不喜欢宋青书。反正不喜欢宋青书。反正不喜欢宋青书。',
            addended:2345,
            comment:345,
          },
          {
            userImg:'../../../static/img/icon-01.png',
            userName:'殷六侠',
            date:'7分钟前',
            title:'不得不说的秘密',
            mainImg:'',
            simpleMain:'厉害了跟不悔妹妹在一起 。厉害了跟不悔妹妹在一起 。厉害了跟不悔妹妹在一起 。',
            addended:2345,
            comment:345,
          },
          {
            userImg:'../../../static/img/icon-01.png',
            userName:'杨逍',
            date:'7分钟前',
            title:'不得不说的秘密',
            mainImg:'../../../static/img/test.png',
            simpleMain:'老情敌成了女婿？！老情敌成了女婿？！老情敌成了女婿？！老情敌成了女婿？！老情敌成了女婿？！',
            addended:2345,
            comment:345,
          },
        ]
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
  .underline{
    width: 100%;
    height:0.2rem;
    background: #ddd;
    box-sizing: content-box;
    padding:0 0.3rem;
    margin-left: -0.3rem;
  }
  .item{
    padding:0 0.3rem;
    overflow: hidden;
  }
  .users{
      height: 0.8rem;
      width: 100%;
      padding: 0.2rem 0.3rem 0.2rem 0.3rem;
      line-height: 0.4rem;
  }
  .users>img{
    width:0.38rem;
    height:0.38rem;
    vertical-align: middle;
  }
  .users>span{
    font-size: 0.28rem;
    color: #999999;
  }
  .users>p{
    display: inline-block;
    font-size: 0.28rem;
    color: #999999;
  }
  .title{
    font-size: 0.32rem;
    color: #3a3a3a;
    font-weight:bold;
    height:0.45rem;
    line-height:0.45rem;
  }
  .simpleMain{
    font-size: 0.28rem;
    line-height:0.4rem;
    color: #666;
  }
  .attended{
    height:0.8rem;
    line-height: 0.8rem;
    color: #999999;
    font-size: 0.28rem;
  }
  .list-banner{
    width:100%;
    margin:0.2rem 0;
  }
</style>
