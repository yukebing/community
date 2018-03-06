<template>
 <div style="margin: 0 auto 1.2rem;">
    <div v-for='item of itemList'>
      <router-link :to="{path:'/indexPage/postDetail'}" tag="div">
        <div class="line"></div>
        <div class="commondiv">
          <div class="name">
            <img :src="item.headerImg"><span>{{item.name}}</span>
          </div>
          <p class="title">{{item.title}}</p>
          <p v-if="item.hasImg"><img class="hasImg" :src="item.hasImg"></p>
          <p class="content">{{item.content}}</p>
          <p class="bottom">
            <span>{{item.focusNum}}已关注</span> · <span>{{item.commentNum}}评论</span> · 关注
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
          headerImg: require('../../../../assets/img/man.png'),
          name: 'zyh',
          title: '这是帖子的标题',
          hasImg: require('../../../../assets/img/test.png'),
          content: '这是帖子的内容这是帖子的内容这是帖子的内容这是帖子的内容这是帖子的内容这是帖子的内容这是帖子的内容这是帖子的内容',
          focusNum: '55',
          commentNum: '85'
        },
        {
          headerImg: require('../../../../assets/img/woman.png'),
          name: 'zyh',
          title: '这是帖子的标题',
          content: '这是帖子的内容这是帖子的内容这是帖子的内容这是帖子的内容这是帖子的内容这是帖子的内容这是帖子的内容这是帖子的内容',
          focusNum: '21',
          commentNum: '35'
        },
                {
          headerImg: require('../../../../assets/img/woman.png'),
          name: 'zyh',
          title: '这是帖子的标题',
          content: '这是帖子的内容这是帖子的内容这是帖子的内容这是帖子的内容这是帖子的内容这是帖子的内容这是帖子的内容这是帖子的内容',
          focusNum: '21',
          commentNum: '35'
        }
      ]
    }
  },
  mounted: function() {
  }
}
// </script>
<style scoped>
.commondiv{padding:0.25rem 0.3rem;font-size:0.28rem;}
.commondiv .name{color:#999;}
.name img{width:0.4rem;height: 0.4rem;border-radius: 0.4rem;margin-right:0.15rem;vertical-align: middle;position: relative;top: -2px;}
.commondiv .title{font-size: 0.32rem;color: #3A3A3A;margin:0.15rem 0;font-weight: bold;}
.commondiv .content{font-size:0.28rem;color:#666;margin-bottom:0.16rem;}
.commondiv .bottom{color: #999999;}
.commondiv .hasImg{width: 100%;height: 2.5rem;margin-bottom: 0.15rem;}
</style>