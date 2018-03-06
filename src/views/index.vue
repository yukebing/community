<template>
    <div class="index_wrapper">
       <div class="luobo-wrapper">
            <mt-swipe :auto="2000">
              <mt-swipe-item class="mint-swipe-bg"><img src="../assets/img/banner1.png" alt=""></mt-swipe-item>
              <mt-swipe-item class="mint-swipe-bg"><img src="../assets/img/banner2.png" alt=""></mt-swipe-item>
              <mt-swipe-item class="mint-swipe-bg"><img src="../assets/img/banner3.png" alt=""></mt-swipe-item>
              <mt-swipe-item class="mint-swipe-bg"><img src="../assets/img/banner4.png" alt=""></mt-swipe-item>
            </mt-swipe>
       </div>
       <div class="titleBox">
            <div class="title-box">
                <router-link to="/module/information">资讯</router-link>
                <router-link to="/module/ask">提问</router-link>
                <router-link to="/module/prevent">预防</router-link>
                <router-link to="/module/prevent">早筛</router-link>
                <router-link to="/module/prevent">治疗</router-link>
            </div>
            <div class="search-box">
                <router-link to="/indexPage/search"><img src="../assets/img/search.png" alt="" style="width:1.24rem"></router-link>   
            </div>                    
            <!-- <div class="search-wrapper"> 
                <mt-search value.sync="value" cancel-text="取消" placeholder="搜索"></mt-search>
            </div>       -->
       </div>
       <div class="toppic">
           <router-link to="/indexPage/askDetail"><span class="question">大家正在讨论：</span><span class="toppic_title">我的基因报告评分是高还是低？</span></router-link>
       </div>
       <div  v-for="n in 10">
           <div class="index_content">
                <router-link to="/personalCenter/otherUser">
                  <div class="name">
                      <img src="../assets/img/collect.png" alt="" class="report_img">
                      <span class="reportName">官方-小媚</span>
                  </div>
                </router-link>  
                <div>
                    <router-link :to="{path:'/indexPage/postDetail'}">
                        <div class="content_title">标题标题标题标题标题标题标题标题</div>
                        <div class="content_img_box">
                            <img src="../assets/img/test.png" alt="" class="content_img">
                        </div>
                        <div class="content_text">
                            微信朋友圈里怎么快速查找以前发过的内容?微信朋友圈里怎么快速
                        </div>
                    </router-link>    
                </div>
                
                <div class="toppicList">
                    <span class="attentionNum">2355已关注</span>
                    <span class="commentaryNum">·456评论</span>
                    <span class="attention" ref="attention" @click="fousOn">关注</span>     
                </div>
            </div>
            <div class="white"></div>
       </div>
      
    </div>
</template>

<script>
 import { Toast } from 'mint-ui';
 export default{
   data(){
     return{
       attentionFlag:true //关注标志位
     }
   },
   mounted:function(){

   },
   methods:{
     fousOn:function(){
       console.log(this.$refs.attention);
     }
   }
 }
</script>
<style scoped>
.luobo-wrapper {
  height: 2.7rem;
  margin-bottom: 0.25rem;
}
.titleBox {
  clear: both;
  width: 100%;
  overflow: hidden;
  margin: 0.14rem 0 0.14rem;
  background: #fff;
}
.title-box {
  background: #ffffff;
  margin: 0.1rem auto;
  float: left;
  margin-top: 0.2rem;
}

.title-box > a {
  color: #29b6f6;
  text-decoration: none;
  margin-left: 0.4rem;
}
.title-box > a:hover {
  color: red;
}
.search-wrapper {
  float: right;
  width: 100px;
  padding-right: 20px;
  overflow: hidden;
}
.search-box {
  float: right;
  margin: 0.15rem 0;
  padding-right: 0.3rem;
}
.search-box > input {
  outline: none;
  width: 1.2rem;
  border-radius: 0.1rem;
  border-style: solid;
  border-color: #f0f0f6;
  padding: 0.05rem;
}

.search-box > a {
  color: #29b6f6;
  text-decoration: none;
  display: inline-block;
}
.search-box > a:hover {
  color: red;
}
.title {
  font-size: 0.28rem;
  color: #29b6f6;
  letter-spacing: 0;
  margin: 0.06rem 0.16rem;
}
.mint-search {
  height: 100%;
  border-radius: 20px;
}
.mint-searchbar-inner {
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  background: transparent;
  border-radius: 2px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  height: 0.46rem;
}
.mint-searchbar {
  position: relative;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  background-color: #d9d9d9;
  box-sizing: border-box;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  padding: 0 10px;
  z-index: -2;
}
.mint-searchbar-inner .mintui-search {
  color: #918888;
  background: transparent;
}
.mintui {
  font-size: 20px !important;
}
.mint-searchbar-core {
  background: transparent;
}
.toppic {
  background: #e9e9e9;
  margin: 0.12rem auto;
  height: 0.63rem;
  line-height: 0.63rem;
  padding: 0 0.3rem;
}
.question {
  font-size: 0.28rem;
  color: #999999;
  letter-spacing: 0;
}
.toppic_title {
  font-size: 0.28rem;
  color: #3a3a3a;
  letter-spacing: 0;
}
.index_content {
  padding: 0 0.3rem;
}
.report_img {
  width: 0.38rem;
  vertical-align: middle;
}
.reportName {
  font-size: 0.28rem;
  color: #29b6f6;
  letter-spacing: 0;
  vertical-align: middle;
}
.content_title {
  font-size: 0.32rem;
  color: #3a3a3a;
  letter-spacing: 0;
  font-weight: bold;
  margin-top: 0.17rem;
}
.content_text {
  font-size: 0.28rem;
  color: #666666;
  letter-spacing: 0.01rem;
  line-height: 0.4rem;
}
.content_img {
  width: 100%;
  height: auto;
}
.toppicList {
  font-size: 0.28rem;
  color: #999999;
  letter-spacing: 0;
  margin: 0.16rem 0;
}
.content_img_box {
  margin: 0.2rem auto;
}
.mint-swipe-bg > img{
  width:100%;
  height:2.7rem;
}
.mint-swipe,.mint-swipe-items-wrap{
  overflow: visible;
}
.white {
  background: #e9e9e9;
  height: 0.17rem;
  margin: 0.2rem 0;
}
</style>
