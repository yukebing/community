<template>
  <div>
    <div v-for='item of itemList'>
      <div class="line"></div>
      <router-link tag="div" :to="{path:'/forum/detail'}">
        <div class="commondiv">
          <p>评论了文章 <span class="title">{{item.title}}</span></p>
          <p class="content">{{item.content}}</p>
          <p class="bottom">
            <span>{{item.focusNum}}点赞</span> · <span>查看评论</span>
          </p>
        </div>
      </router-link>  
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      itemList: [
        {
          title: '如何减肥',
          content: '我们欢迎更多的热心米粉加入小米社区同城会团队，担起这份光荣责任！',
          focusNum: '55',
          commentNum: '85',
          time: '15'
        },
        {
          title: '如何减肥！',
          content: '我们欢迎更多的热心米粉加入小米社区同城会团队，担起这份光荣责任！',
          focusNum: '55',
          commentNum: '85',
          time: '20'
        }
      ]
    }
  },
  mounted: function() {
  }
}
</script>
<style scoped>
.commondiv{padding:0.25rem 0.3rem;font-size:0.28rem;color:#999999;}
.commondiv .title{color: #3A3A3A;font-weight: bold;}
.commondiv .content{margin:0.1rem 0 0.2rem 0;color:#535353;}
.commondiv .bottom{color: #999999;}
</style>