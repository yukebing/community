<template>   
    <div class="detail">
        <div class="belong">
            <span>所属板块：</span> <span class="mName">肺癌</span>
        </div>
        <div class="tieziName">
            壹基因诚邀您加盟千亿基因检测市场<span class="edit">[修改]</span>
        </div>
        <div class="contentDiv">
            <div class="personInfo clearfix">
                <img class="fl">
                <div class="fl leftDiv">
                    <p class="name">王雷雷</p>
                    <p class="lebal">个性签名</p>
                </div>
            </div>
            <div class="text">我们欢迎更多的热心米粉加入小米社区同城会团队，担起这份光荣责任！ 小米同城会是各地喜爱小米、志同道合的人团结在一起的民间米粉组织，同城会会长是小米同城会活动的主导者，负责协助官方管理和组织民间线下活动，聚集所在城市米粉交流心得、分享爱好、结交朋友，从而扩大小米影响力。目前海内外已有近百个小米同城会，百余位同城会会长，现小米社区面向全国米粉，长期招募有志者加入同城会长团队，共同创建团结友爱的同城会大家庭。加入小米同城会，让未来的你喜欢现在不凡的自己！we are 伐木累！ 同城会会长特权 1、荣誉身份。同城会会长专属认证勋章 2、产品特权。优秀会长具有优先获得小米热销产品的F码及体验新品的机会 3、线下特权。优秀会长优先参与官方线下及年度重大活动的机会。 4、丰厚福利。每月考核达标的会长可获得小米社区官方提供的神秘奖励。 5、近距离与官方团队沟通，结识志同道合朋友，锻炼组织协调能力。 同城会会长招募条件 所申请的同城会需属于地级市，现在不支持开通县级市同城会； 另申请前需先了解同城会是否有在职会长， 只有当前无同城会会长或会长人数小于3人，方可提出申请； </div>
            <p style="padding:0 0.3rem;margin-bottom:0.15rem;" class="text-right">编辑于 13:23</p>
            <p style="padding:0 0.3rem;" class="text-right">版权归作者所有</p>
        </div>
        <div class="recommend">推荐文章</div>
        <div>
            <div v-for='item of itemList'>
                <div class="commondiv">
                    <div class="name">
                        <img :src="item.headerImg"><span>{{item.name}}</span>
                    </div>
                    <p class="title"><router-link to="/personalCenter/myDynamic/tieziDetail">{{item.title}}</router-link></p>
                    <p v-if="item.hasImg"><img class="hasImg" :src="item.hasImg"></p>
                    <p class="content">{{item.content}}</p>
                    <p class="bottom">
                        <span>{{item.focusNum}}已关注</span> · <span>{{item.commentNum}}评论</span>
                    </p>
                </div>
            </div>
        </div>
        <div class="bottomDiv clearfix">
            <div>
                <img src="../../../assets/img/good-gray.png">
                <p>已赞 1234</p>
            </div>
            <div>
                <img src="../../../assets/img/focus.png">
                <p>关注 1234</p>
            </div>
            <div>
                <img src="../../../assets/img/forum.png">
                <p>评论 1234</p>
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
          headerImg: require('../../../assets/img/man.png'),
          name: '小雷雷',
          title: '这是帖子的标题',
          hasImg: require('../../../assets/img/test.png'),
          content: '这是帖子的内容这是帖子的内容这是帖子的内容这是帖子的内容这是帖子的内容这是帖子的内容这是帖子的内容这是帖子的内容',
          focusNum: '55',
          commentNum: '85',
          id: '1'
        },
        {
          headerImg: require('../../../assets/img/woman.png'),
          name: '大雷雷',
          title: '这是帖子的标题',
          content: '这是帖子的内容这是帖子的内容这是帖子的内容这是帖子的内容这是帖子的内容这是帖子的内容这是帖子的内容这是帖子的内容',
          focusNum: '21',
          commentNum: '35',
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
.detail{color:#666;font-size:0.28rem;}
.detail .belong{padding:0.25rem 0.3rem;background: #fff;}
.belong .mName{display: inline-block;width:1.2rem;height:0.46rem; background:rgba(233,233,233,1);border-radius:4px ;line-height:0.46rem;color:#999;text-align: center; }
.tieziName{padding:0.25rem 0.3rem;color:#3A3A3A;font-size:0.36rem;background: #fff;margin-top: 0.2rem;}
.tieziName .edit{color:#666;font-size:0.28rem;margin-left:0.1rem;}
.contentDiv{background: #fff;margin-top:0.2rem;padding-bottom:0.8rem;}
.contentDiv .personInfo{padding:0.2rem 0.3rem;color:#3A3A3A;font-size:0.28rem;border-bottom: 1px solid #d8d8d8;}
.personInfo img{width:0.66rem;height:0.66rem;border-radius:0.66rem;margin-right:0.15rem;position: relative;top: 2px;}
.personInfo .lebal{color: #999;font-size:0.24rem;}
.contentDiv .text{padding:0.32rem 0.3rem 0.65rem 0.3rem;text-align: justify;line-height: 0.45rem;}
.recommend{padding:0.25rem 0.3rem;background:#e9e9e9;}

.commondiv{padding:0.25rem 0.3rem;font-size:0.28rem;background: #fff; margin-bottom: 0.2rem;}
.commondiv .name{color:#999;}
.name img{width:0.4rem;height: 0.4rem;border-radius: 0.4rem;margin-right:0.15rem;vertical-align: middle;position: relative;top: -2px;}
.commondiv .title {margin:0.15rem 0;font-weight: bold;}
.title a{font-size: 0.32rem;color: #3A3A3A;}
.commondiv .content{font-size:0.28rem;color:#666;margin-bottom:0.16rem;}
.commondiv .bottom{color: #999999;}
.commondiv .hasImg{width: 100%;height: 2.5rem;margin-bottom: 0.15rem;}
.bottomDiv{padding:0 0.3rem 0.2rem 0.3rem;}
.bottomDiv>div{width:33.3%;float:left;text-align: center;}
.bottomDiv>div img{width: 0.4rem;height: 0.4rem}
.bottomDiv>div p{font-size:0.24rem;text-align: center;color:#999;}
</style>