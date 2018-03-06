<template>
    <div id='forum_detail'>
        <h4>评论({{forumNum}})</h4>
        <div class='forum_list_wrapper'>
            <div class='forum_list_item' v-for='(item, index) of forumList'>
                <router-link tag="div" :to="{path:'/personalCenter/otherUser'}">
                    <p class='forum_list_item_title clearfix'>
                        <i class='fl'><img src="../assets/img/add.png"></i>
                        <span style='color: #3A3A3A;'>{{item.forumUser}}</span>
                        <span style='color: #999;font-size: 0.28rem;' class='fr'>{{item.formTime}}</span>
                    </p>
                </router-link>    
                <p class='forum_list_item_content'>{{item.formContent}}</p>
                <p class='forum_list_item_desc'><i class='fl'><img src="../assets/img/good-gray.png"></i>{{item.goodNum}} <span @click="replay(item.forumUser)">· 回复 </span>· <router-link :to="{path:'/reply/detail',query:{forumUser:item.forumUser}}"  style='color: #999;'>查看回复</router-link> · <a @click='showReportWrapper(index)'>举报</a></p>
                <div class="report_wrapper" v-if='item.showReportWrapper'>
                    <button @click='report(index, "广告")'>广告</button>
                    <button @click='report(index, "淫秽")'>淫秽</button>
                    <button @click='report(index, "其他")'>其他</button>
                </div>
            </div>
        </div>
        <my-message-box :show= 'showBox'  @change="hidBox" :replayName="sendToSon" ref="myMessage"></my-message-box>
        <button class='fr send_form_btn' @click="onFocus">发布<br>评论</button>  
    </div>
</template>
<style scoped>
i {
  width: 0.4rem;
  height: 0.4rem;
  padding-top: 0.04rem;
  display: inline-block;
  margin-right: 0.1rem;
}
i img {
  width: 100%;
  height: 100%;
}

#forum_detail {
  font-family: PingFangSC-Regular;
}
#forum_detail > h4 {
  font-size: 0.32rem;
  font-weight: normal;
  color: #999;
  padding: 0.2rem 0.3rem;
}
#forum_detail .forum_list_wrapper {
  width: 100%;
  background: #fff;
}
#forum_detail .forum_list_wrapper .forum_list_item {
  position: relative;
  width: 100%;
  padding-bottom: 0.3rem;
  padding: 0.3rem;
  border-bottom: 1px solid #d8d8d8;
}
#forum_detail .forum_list_wrapper .forum_list_item .report_wrapper {
  position: absolute;
  top: 2.6rem;
  left: 4.5rem;
  width: 1.5rem;
  background: #fff;
  z-index: 99;
  box-shadow: 0px 0px 1px 0.01px #888;
  overflow: hidden;
}
#forum_detail .forum_list_wrapper .forum_list_item .report_wrapper button {
  width: 100%;
  padding: 0.2rem 0.5rem 0.2rem 0.2rem;
  border: none;
  background: #fff;
  color: #666;
}
#forum_detail .forum_list_wrapper .forum_list_item .forum_list_item_title {
  line-height: 0.55rem;
}
#forum_detail .forum_list_wrapper .forum_list_item .forum_list_item_title span {
  font-size: 0.32rem;
}
#forum_detail .forum_list_wrapper .forum_list_item .forum_list_item_content {
  padding-left: 0.7rem;
  color: #666;
}
#forum_detail .forum_list_wrapper .forum_list_item .forum_list_item_desc {
  margin-top: 0.3rem;
  line-height: 0.55rem;
  padding-left: 0.7rem;
  color: #999;
}
#forum_detail .send_form_btn {
  position: fixed;
  bottom: 0.7rem;
  right: 0.5rem;
  width: 1.2rem;
  height: 1.2rem;
  border-radius: 50% 50%;
  background: #448aff;
  border: 1px solid #448aff;
  -webkit-appearance: none; /*去除系统默认的样式*/
  color: #fff;
  animation: upanddown 2s infinite;
}
.message_box{
    width: 100% !important;
}
/* .message_box .text_area{
    top:25% !important;
} */
.message_box .text_area{
     top:25% !important;
}

@keyframes upanddown
{
    0%   {bottom: 0.7rem;}
    50%  {bottom: 0.8rem;}
    100% {bottom: 0.7rem;}
}

#forum_detail .send_form_inp input:focus {
  border: 1px solid #448aff;
}
#forum_detail .send_form_inp span {
  font-size: 0.32rem;
  color: #999;
}
</style>
<script>
    import { MessageBox } from 'mint-ui'
    import MyMessageBox from './messageBox.vue'
    export default {

        components: {
            MyMessageBox
        },
        props: {
        },
        data () {
            return {
                sendToSon: '',
                showBox: false,
                forumNum: Math.floor(Math.random()*200 + 100),
                forumList: [
                    {
                        forumId: Math.floor(Math.random()*200 + 100),
                        forumUser: 'XYTang',
                        formTime: '前天 21:11',
                        formContent: '收款卡刷卡科技啥道具卡三德科技疯狂进攻我人饿哦我微积分你给的嘉年华诶我',
                        goodNum: Math.floor(Math.random()*200 + 100),
                        showReportWrapper: false
                    },
                    {
                        forumId: Math.floor(Math.random()*200 + 100),
                        forumUser: 'XY',
                        formTime: '前天 15：11',
                        formContent: '收款卡刷卡科技啥道具卡三德科技疯狂进攻我人饿哦我微积分你给的嘉年华诶我',
                        goodNum: Math.floor(Math.random()*200 + 100),
                        showReportWrapper: false
                    },
                    {
                        forumId: Math.floor(Math.random()*200 + 100),
                        forumUser: 'XYTang',
                        formTime: '前天 21:11',
                        formContent: '收款卡刷卡科技啥道具卡三德科技疯狂进攻我人饿哦我微积分你给的嘉年华诶我',
                        goodNum: Math.floor(Math.random()*200 + 100),
                        showReportWrapper: false
                    },
                    {
                        forumId: Math.floor(Math.random()*200 + 100),
                        forumUser: 'XY',
                        formTime: '前天 15：11',
                        formContent: '收款卡刷卡科技啥道具卡三德科技疯狂进攻我人饿哦我微积分你给的嘉年华诶我',
                        goodNum: Math.floor(Math.random()*200 + 100),
                        showReportWrapper: false
                    },
                    {
                        forumId: Math.floor(Math.random()*200 + 100),
                        forumUser: 'XYTang',
                        formTime: '前天 21:11',
                        formContent: '收款卡刷卡科技啥道具卡三德科技疯狂进攻我人饿哦我微积分你给的嘉年华诶我',
                        goodNum: Math.floor(Math.random()*200 + 100),
                        showReportWrapper: false
                    },
                    {
                        forumId: Math.floor(Math.random()*200 + 100),
                        forumUser: 'XY',
                        formTime: '前天 15：11',
                        formContent: '收款卡刷卡科技啥道具卡三德科技疯狂进攻我人饿哦我微积分你给的嘉年华诶我',
                        goodNum: Math.floor(Math.random()*200 + 100),
                        showReportWrapper: false
                    },
                    {
                        forumId: Math.floor(Math.random()*200 + 100),
                        forumUser: 'XYTang',
                        formTime: '前天 21:11',
                        formContent: '收款卡刷卡科技啥道具卡三德科技疯狂进攻我人饿哦我微积分你给的嘉年华诶我',
                        goodNum: Math.floor(Math.random()*200 + 100),
                        showReportWrapper: false
                    },
                    {
                        forumId: Math.floor(Math.random()*200 + 100),
                        forumUser: 'XY',
                        formTime: '前天 15：11',
                        formContent: '收款卡刷卡科技啥道具卡三德科技疯狂进攻我人饿哦我微积分你给的嘉年华诶我',
                        goodNum: Math.floor(Math.random()*200 + 100),
                        showReportWrapper: false
                    }
                ],
                interval: null
            }
        },
        created () {
        },
        mounted () {
        },
        watch: {
        },
        methods: {
            hidBox () {
                this.showBox = false
            },
            onFocus () {
                this.showBox = true;
                this.$refs.myMessage.closeMessage();//调用meaaageBox子组件的方法
                // console.log(value);
            },
            replay (userName) {
                this.showBox = true;
                this.sendToSon = userName;
                this.$refs.myMessage.replayMessage();//调用meaaageBox子组件的方法
            },
            onBlur () {
            },
            scrollToEnd () {
                document.body.scrollTop = document.body.scrollHeight;
            },
            showReportWrapper (index) {
                this.forumList[index].showReportWrapper = !this.forumList[index].showReportWrapper;
            },
            report (index, type) {
                this.forumList[index].showReportWrapper = false;
                MessageBox.confirm(`你确定举报该信息，举报原因：${type}?`).then(action => {
                    alert(`${type}举报成功`)
                }, () => {
                });
            }
        }
    }

</script>