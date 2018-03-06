<template>
  <div>
    <div class="line"></div>
    <div v-for='item of itemList'>
      <div class="commondiv">
        <router-link tag="p" :to="{path:'/indexPage/askDetail'}" class="title">{{item.title}}</router-link>
        <p class="bottom">
          <span>{{item.focusNum}}已关注</span> · <span>{{item.commentNum}}评论</span>  <span></span>
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      itemList: [
        {
          title: '我们欢迎更多的热心米粉加入小米社区同城会团队，担起这份光荣责任！',
          focusNum: '55',
          commentNum: '85',
          time: '15',
          id: '1'
        },
        {
          title: '我们欢迎更多的热心米粉加入小米社区同城会团队，担起这份光荣责任！',
          focusNum: '55',
          commentNum: '85',
          time: '20',
          id: '2'
        }
      ]
    }
  },
  mounted: function() {
  }
}
</script>
<style scoped>
.commondiv{padding:0.25rem 0.3rem;font-size:0.28rem;border-bottom:1px solid #D8D8D8;}
.commondiv .title{font-size: 0.32rem;color: #3A3A3A;margin:0 0 0.2rem 0;font-weight: bold;}
.commondiv .bottom{color: #999999;}
</style>
