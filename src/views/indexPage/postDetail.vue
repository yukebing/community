<template>
  <div class="post_wrapper">
      <router-link tag="div" :to="{path:'/module/prevent/dynamic'}">
        <div class="head">
            <div class="brandArea">所属板块：</div>
            <div class="brandName"><span>肺癌</span></div>
        </div>
      </router-link>
      <div class="white"></div>
      <div class="describe">
          我们欢迎更多的热心米粉加入小米社区同城会团队，担起这份光荣责任！
      </div>
      <div class="white"></div>
      <div class="signature_wrapper">
        <router-link tag="div" :to="{path:'/personalCenter/otherUser'}" style="overflow:hidden;float:left;">
          <span class="img_wrapper">
              <img src="../../assets/img/man.png" alt="" style="width:0.66rem;height:0.66rem">
          </span>
          <div style="display:inline-block">
              <div class="name">殷义军踢了你一脚</div>
              <div class="signature">个人签名跟人签名个人签名</div>
          </div>
        </router-link>  
          <div class="cation" v-if="visitFlag" @click="fousOnText" ref="care">
              <p>
                   +关注
              </p>            
          </div>
      </div>
      <div class="content">
          <div class="text">
              <div class="margin_auto">
                  我们欢迎更多的热心米粉加入小米社区同城会团队，担起这份光荣责任！ 
              </div>
              <div class="margin_auto">
                  小米同城会是各地喜爱小米、志同道合的人团结在一起的民间米粉组织，同城会会长是小米同城会活动的主导者，负责协助官方管理和组织民间线下活动，聚集所在城市米粉交流心得、分享爱好、结交朋友，从而扩大小米影响力。目前海内外已有近百个小米同城会，百余位同城会会长，现小米社区面向全国米粉，长期招募有志者加入同城会长团队，共同创建团结友爱的同城会大家庭。加入小米同城会，让未来的你喜欢现在不凡的自己！we are 伐木累！ 
              </div>
              <div class="margin_auto">
                  <p>同城会会长特权</p>
                  <p>1、荣誉身份。同城会会长专属认证勋章</p>
                  <p>2、产品特权。优秀会长具有优先获得小米热销产品的F码及体验新品的机会 </p>
                  <p>3、线下特权。优秀会长优先参与官方线下及年度重大活动的机会。</p>
                  <p>4、丰厚福利。每月考核达标的会长可获得小米社区官方提供的神秘奖励。</p>
                  <p>5、近距离与官方团队沟通，结识志同道合朋友，锻炼组织协调能力。</p>
              </div>
              <div class="margin_auto">
                  <p>同城会会长招募条件</p>
                  <p>所申请的同城会需属于地级市，现在不支持开通县级市同城会；</p>
                  <p>另申请前需先了解同城会是否有在职会长，</p>
                  <p style="margin-bottom:0.3rem">只有当前无同城会会长或会长人数小于3人，方可提出申请；</p>
                  <p>1、热爱小米、诚实靠谱、善于交友、认真负责； </p>
                  <p>2、性格成熟，待人彬彬有礼，开朗热情，持之以恒，同时具有创新意识；</p>
                  <p>3、生活在所申请城市，具备组织线下活动能力和抗压能力；</p>
                  <p>4、目前为小米VIP用户，无其他小米特殊用户组职务，单一纯粹;</p>
                  <p>5、有较好的论坛帖子编辑能力，有出众的优秀帖或者精华帖；</p>
                  <p>6、无论坛严重违规和灌水记录，未被禁言禁访过；</p>
                  <p>7、愿意无条件服从小米社区管理，遵守各项管理规定；</p>
                  <p>8、爱好摄影、设计、微博控、交友圈广的申请者优先考虑！</p>
              </div>
              <div>

              </div>
          </div>
          <div class="person">
             <div class="person1">编辑于 13:23</div>
             <div class="person2">版权归作者所有</div>
             <div class="modify" v-if="!visitFlag">
                 <router-link to="/indexPage/posting">修改</router-link>
             </div>
             <div class="delete" v-if="!visitFlag">删除</div>
          </div>
          <!-- 推荐文章模块 -->
          <div class="recomand_wrapper">
               <div class="brand">
                   推荐文章
               </div>
               <div class="recomand_text">
                    <div  v-for="n in 3">
                        <div class="index_content">
                            <router-link tag="div" :to="{path:'/personalCenter/otherUser'}">
                              <div class="name">
                                      <img src="../../assets/img/girl2.jpg" alt="" class="report_img">
                                      <span class="reportName">官方-小媚</span>
                              </div>
                            </router-link>  
                            <div>
                                <div class="content_title">标题标题标题标题标题标题标题标题</div>
                                        <div class="content_img_box">
                                            <img src="../../assets/img/test.png" alt="" class="content_img">
                                        </div>
                                        <div class="content_text">
                                            微信朋友圈里怎么快速查找以前发过的内容?微信朋友圈里怎么快速
                                </div>
                            </div>
                                
                            <div class="toppicList">
                                <span class="attentionNum">2355已关注</span>
                                <span class="commentaryNum">·456评论</span>
                                <span class="attention">关注</span>     
                            </div>
                        </div>
                        <div class="white"></div>
                    </div>
            </div>
          </div>
      </div>
      <div class="communication">
        <div class="area"  @click="zan">
            <div class="imgWrapper" :class="{unZan:zanFlag,zan:!zanFlag}">
                <!-- <img src="../../assets/img/good-gray.png" alt="" class=""> -->
            </div>
            <div ref="zanText">
                已赞{{zanNum}}
            </div>
        </div>
        <div class="area" @click="fous">
            <div class="imgWrapper" :class="{unfousImg:fousFlag,fousImg:!fousFlag}">
                <!-- <img src="../../assets/img/collect.png" alt=""> -->
            </div>
            <div ref="attention">
                关注
            </div>
        </div>
        <div class="area">
          <router-link to="/forum/detail">
            <div class="imgWrapper">
                <img src="../../assets/img/forum.png" alt="">
            </div>
            <div>
                评论
            </div>
          </router-link>  
        </div>                    
      </div>
  </div>
</template>
<script>
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      visitFlag: true, //true表示游客身份 false//表示本人
      fousFlag: true, //关注标志位
      zanFlag: true, //点赞标志位
      zanNum: 1234, //点赞数
      fousText: true //关注帖子标志位
    };
  },
  mounted:function(){
    //  console.log(this.$route.query.role);
    //本尊身份
     if(this.$route.query.role == 'self'){
       this.visitFlag = false;
      //  console.log(this.visitFlag);
     }
     //游客身份
     else{
       this.visitFlag = true;
     }
  },
  methods: {
    //关注
    fous: function() {
      if (this.fousFlag == true) {
        this.fousFlag = false;
        // this.$refs.attention.style
        this.$refs.attention.style.color = "#29b6f6";
        Toast({
          message: "已关注",
          position: "bottom",
          duration: 1000
        });
      } else {
        this.fousFlag = true;
        this.$refs.attention.style.color = "#999999";
        Toast({
          message: "取消关注",
          position: "bottom",
          duration: 1000
        });
      }
    },
    //点赞
    zan: function() {
      if (this.zanFlag == true) {
        this.zanFlag = false;
        this.zanNum++;
        this.$refs.zanText.style.color = "#29b6f6";
        Toast({
          message: "已点赞",
          position: "bottom",
          duration: 1000
        });
      } else {
        this.zanFlag = true;
        this.zanNum--;
        this.$refs.zanText.style.color = "#999999";
        Toast({
          message: "取消点赞",
          position: "bottom",
          duration: 1000
        });
      }
    },
    //关注他人
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
    //关注帖子
    fousOnText: function() {
      if (this.fousText === true) {
        this.$refs.care.innerHTML = "取消关注";
        this.$refs.care.style.background = "#eee";
        this.$refs.care.style.color = "#999";
        this.fousText = false;
        Toast({
          message: "已关注",
          position: "top",
          duration: 1000
        });
      } else {
        this.$refs.care.innerHTML = "+关注";
        this.$refs.care.style.background = "#29B6F6";
        this.$refs.care.style.color = "#fff";
        this.fousText = true;
        Toast({
          message: "取消关注",
          position: "top",
          duration: 1000
        });
      }
    }
  }
};
</script>

<style scoped>
.post_wrapper {
  background: #fff;
}
.head {
  height: 0.85rem;
}
.brandArea {
  height: 0.62rem;
  font-size: 0.28rem;
  color: rgba(102, 102, 102, 1);
  line-height: 0.62rem;
  display: inline-block;
  margin: 0.22rem 0.22rem 0.22rem 0.3rem;
}
.brandName {
  width: 1.18rem;
  height: 0.46rem;
  background: rgba(233, 233, 233, 1);
  border-radius: 0.08rem;
  display: inline-block;
  line-height: 0.46rem;
  text-align: center;
}
.brandName > span {
  width: 0.56rem;
  height: 0.4rem;
  font-size: 0.28rem;
  color: rgba(153, 153, 153, 1);
  line-height: 0.4rem;
}
.white {
  width: 7.5rem;
  height: 0.2rem;
  background: rgba(247, 247, 247, 1);
}
.describe {
  width: 6.9rem;
  height: 1.24rem;
  font-size: 0.36rem;
  color: rgba(58, 58, 58, 1);
  line-height: 0.5rem;
  margin: 0.24rem auto;
  margin-bottom: 0;
}
.signature_wrapper {
  margin: 0.2rem auto;
  border-bottom: 1px solid #ccc;
  clear: both;
  overflow: hidden;
}
.img_wrapper {
  display: inline-block;
  margin: 0.1rem 0.1rem 0.2rem 0.37rem;
}
.name {
  height: 0.4rem;
  font-size: 0.28rem;
  color: rgba(58, 58, 58, 1);
  line-height: 0.4rem;
}
.signature {
  height: 0.33rem;
  font-size: 0.24rem;
  color: rgba(153, 153, 153, 1);
  line-height: 0.33rem;
}
.text {
  width: 6.9rem;
  margin: 0.3rem auto;
  font-size: 0.28rem;
  color: rgba(102, 102, 102, 1);
  line-height: 0.4rem;
}

.cation {
  display: inline-block;
  width: 1.45rem;
  height: 0.66rem;
  background: rgba(41, 182, 246, 1);
  border-radius: 0.04rem;
  line-height: 0.66rem;
  float: right;
  margin-right: 0.3rem;
  margin-top: 0.14rem;
  text-align: center;
}
.cation > p {
  color: #fff;
  font-size: 0.28rem;
}

.margin_auto {
  margin: 0.3rem auto;
}
.person {
  color: #3a3a3a;
  margin: 0.4rem;
  margin-top: 1.2rem;
  height: 2.1rem;
  text-align: right;
  position: relative;
}
.modify {
  position: absolute;
  right: 2rem;
  top: 1.1rem;
  background: #ffffff;
  padding: 0.1rem 0.2rem;
  border-radius: 0.08rem;
  color: #666666;
  border: 1px solid #666666;
}
.modify > a {
  color: #666666;
}
.delete {
  position: absolute;
  right: 0.4rem;
  top: 1.1rem;
  background: #ffffff;
  padding: 0.1rem 0.2rem;
  border-radius: 0.08rem;
  color: #666666;
  border: 1px solid #666666;
}
.brand {
  width: 7.5rem;
  height: 0.88rem;
  background: rgba(233, 233, 233, 1);
  padding: 0.22rem 0 0.26rem 0.3rem;
  font-size: 0.28rem;
  margin: 0 auto;
}
.recomand_text {
  margin: 0.3rem auto;
}
.index_content {
  padding: 0 0.3rem;
}
.report_img {
  width: 0.38rem;
  height: 0.38rem;
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
.mint-swipe-bg1 {
  background: red;
}
.mint-swipe-bg2 {
  background: yellow;
}
.mint-swipe-bg3 {
  background: #29b6f6;
}
.white {
  background: #e9e9e9;
  height: 0.17rem;
  margin: 0.2rem 0;
}
.communication {
  display: flex;
  width: 7.5rem;
  height: 1.08rem;
  background: #f7f7f7;
  padding: 0.1rem 0;
  position: fixed;
  bottom: 0;
  left: 0;
  color: #999999;
}
.area {
  flex: 1;
  text-align: center;
}
.imgWrapper {
  display: inline-block;
  padding: 0;
  /* padding-top: 0.03rem; */
}
.imgWrapper > img {
  width: 0.38rem;
  height: 0.38rem;
}
.unZan {
  width: 0.38rem;
  height: 0.38rem;
  background-image: url(../../assets/img/good-gray.png);
  background-size: 100% 100%;
}
.zan {
  width: 0.38rem;
  height: 0.38rem;
  background-image: url(../../assets/img/good.png);
  background-size: 100% 100%;
}
.fousImg {
  width: 0.38rem;
  height: 0.38rem;
  background-image: url(../../assets/img/collect-on.png);
  background-size: 100% 100%;
}
.unfousImg {
  width: 0.38rem;
  height: 0.38rem;
  background-image: url(../../assets/img/collect.png);
  background-size: 100% 100%;
}
.area > a {
  color: #999999;
}
</style>



