<template>
  <div>
    <div class="dyHeader">
        <ul class="clearfix">
            <li class="active"><router-link to="/myFocus/personalCenter/focusUser">用户</router-link></li>
            <li><router-link to="/personalCenter/myFocus/focusModules">板块</router-link></li>
            <li><router-link to="/personalCenter/myFocus/focusContent">内容</router-link></li>
        </ul>
    </div>
    <div class="line"></div>
    <div v-for='item of itemList'>
        <div class="commondiv clearfix">
            <div class=" leftdiv">
              <router-link tag="div" :to="{path:'/personalCenter/otherUser'}">
                  <img :src="item.headerImg">
                  <div class="namediv">
                      <P class="name">{{item.name}}</P>
                      <P class="label">{{item.label}}</P>
                  </div>
              </router-link>  
            </div>
            <button class="btn fr">已关注</button>
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
          name: '王雷雷',
          label: '我们欢迎更多！',
          headerImg: require('../../../assets/img/man.png')
        },
        {
          name: 'Jane',
          label: '我们欢迎更多！',
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
.commondiv{height:1.34rem;padding:0.2rem 0.35rem;}
.dyHeader{width:100%;height: 0.88rem;line-height: 0.88rem;font-size:0.32rem;padding:0 0.2rem;}
.dyHeader ul li{float: left;width: 1.23rem;height: 0.88rem;line-height: 0.88rem;text-align: center;}
li a{display: inline-block;width:100%;height: 100%;color: #999;}
ul .active a{border-bottom:2px solid #29B6F6;color: #29B6F6;}
.leftdiv{position:relative;}
.leftdiv img{width:0.9rem;position: absolute;height:0.9rem;top:0;left: 0;border-radius: 0.9rem;}
.namediv{position: absolute;width:4rem;left: 1.1rem; top: 0.06rem;}
.namediv .name{font-size:0.32rem;color: #3A3A3A;}
.namediv .label{font-size:0.28rem;color: #999;}
.btn{width:1.45rem;height:0.66rem; background:#D8D8D8;border-radius: 4px;border:1px solid #D8D8D8;font-size:0.28rem;color:#fff;margin-top: 0.13rem;}
</style>