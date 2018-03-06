<template>
  <div style="padding-bottom: 1rem;">
    <div class="head">
      <div class="head-img fl">
        <img src="../../assets/img/icon-01.png">
      </div>
      <div class="head-info fl">
        <p class="head-title">资讯</p>
        <p class="head-attention-num">关注数：<span>2345</span></p>
      </div>
      <div class="head-attention-add fr" @click="fousOn" ref="care">
        +关注
      </div>
    </div>
    <div class="main-list">
      <div class="item" v-for="obj in preventDynamicList">
        <div class="underline"></div>
        <div class="title">
          {{obj.title}}
        </div>
        <div class="simpleMain">{{obj.simpleMain}}</div>
        <div class="attended">
          <span>{{obj.attended}}</span>已关注·<span>{{obj.comment}}</span>评论·<a>关注</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      fousFlag: true, //关注标志位
      preventDynamicList: [
        {
          title: "标题标题标题标题标题",
          simpleMain: "微信朋友圈怎么快速找以前发过的内容?微信朋友圈怎么快速找以前发过的内容?",
          attended: 2345,
          comment: 345
        },
        {
          title: "标题标题标题标题标题",
          simpleMain: "微信朋友圈怎么快速找以前发过的内容?微信朋友圈怎么快速找以前发过的内容?",
          addended: 2345,
          comment: 345
        },
        {
          title: "标题标题标题标题标题",
          simpleMain: "微信朋友圈怎么快速找以前发过的内容?微信朋友圈怎么快速找以前发过的内容?",
          addended: 2345,
          comment: 345
        },
        {
          title: "标题标题标题标题标题",
          simpleMain: "微信朋友圈怎么快速找以前发过的内容?微信朋友圈怎么快速找以前发过的内容?",
          addended: 2345,
          comment: 345
        },
        {
          title: "标题标题标题标题标题",
          simpleMain: "微信朋友圈怎么快速找以前发过的内容?微信朋友圈怎么快速找以前发过的内容?",
          addended: 2345,
          comment: 345
        },
        {
          title: "标题标题标题标题标题",
          simpleMain: "微信朋友圈怎么快速找以前发过的内容?微信朋友圈怎么快速找以前发过的内容?",
          addended: 2345,
          comment: 345
        }
      ]
    };
  },
  methods: {
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
    }
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
.head {
  width: 7.5rem;
  height: 1.9rem;
  padding: 0.4rem 0.3rem 0 0.46rem;
  overflow: hidden;
  border-bottom: 1px solid #d8d8d8;
}
.head-img {
  width: 0.94rem;
  height: 0.94rem;
  margin-right: 0.25rem;
}
.head-img > img {
  width: 100%;
}
.head-title {
  font-size: 0.32rem;
  color: #666;
}
.head-attention-num {
  font-size: 0.28rem;
  color: #666;
}
.head-attention-add {
  width: 1.45rem;
  height: 0.66rem;
  line-height: 0.66rem;
  text-align: center;
  background: #29b6f6;
  border: 1px solid #ffffff;
  border-radius: 4px;
  color: #ffffff;
  margin-top: 0.035rem;
}
.item {
  padding: 0 0.3rem;
  overflow: hidden;
}
.title {
  font-size: 0.32rem;
  color: #3a3a3a;
  font-weight: bold;
  height: 0.9rem;
  line-height: 0.9rem;
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
