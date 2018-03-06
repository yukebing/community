<template>
    <div id='reply_detail'>
        <div class='reply_list_wrapper'>
            <div class='reply_list_item' v-for='(item, index) of replyList'>
                <router-link tag="div" :to="{path:'/personalCenter/otherUser'}">
                    <p class='reply_list_item_title clearfix'>
                        <i class='fl'><img src="../assets/img/add.png"></i>
                        <span style='color: #3A3A3A;'>{{item.replyUser}}<span style='margin: 0 0.1rem;'>回复</span>{{item.replyTo}}</span>
                        <span style='color: #999;' class='fr'>{{item.formTime}}</span>
                    </p>
                </router-link>
                <p class='reply_list_item_content'>{{item.formContent}}</p>
                <p class='reply_list_item_desc'><i class='fl'><img src="../assets/img/good-gray.png"></i>{{item.goodNum}} · <a @click='reply(item.replyUser)' style='color: #999;'>回复</a> · <a @click='showReportWrapper(index)'>举报</a></p>
                <div class="report_wrapper" v-if='item.showReportWrapper'>
                    <button @click='report(index, "广告")'>广告</button>
                    <button @click='report(index, "淫秽")'>淫秽</button>
                    <button @click='report(index, "其他")'>其他</button>
                </div>               
            </div>
        </div>
        <button class='fr send_reply_btn' @click="onFocus">回复<br>评论</button>
        <my-message-box :show= 'showBox' @change="hidBox" :replayAuthor="author" ref="author"></my-message-box>
        <h4>推荐活动</h4>
        <div class='page_List'>
            <div class='page_List_wrapper'>
                 <ul>
                    <li class='tab_item' v-for='(item, index) of tabItemList' @click='go("activityDetail")'>
                        <div class='tab_item_left'>

                        </div>
                        <div class='tab_item_right'>
                            <div class='tab_item_title'>{{item.title}}</div>
                            <div class='tab_item_desc'>{{item.focusNum}} 关注·{{item.ducNum}}评论·关注</div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<style scoped>
    /* 回复详情列表*/
    i{width: 0.5rem;height: 0.5rem;display: inline-block;margin-right: 0.2rem;}
    i img{width: 100%;height: 100%;}
    #reply_detail {
        padding-top: 0.2rem;
    }
    #reply_detail >h4 {
        font-size: 0.32rem;
        font-weight: normal;
        color: #999;
        padding: 0.2rem 0.3rem;
    }
    #reply_detail .reply_list_wrapper {
        width: 100%;
        background: #fff;
    }
    #reply_detail .reply_list_wrapper .reply_list_item {
        position: relative;
        width: 100%;
        padding-bottom: 0.3rem;
        padding: 0.3rem;
        border-bottom: 1px solid #d8d8d8;
    }
    #reply_detail .reply_list_wrapper .reply_list_item .report_wrapper {
        position: absolute;
        top: 2.6rem;
        left: 3.1rem;
        width: 1.5rem;
        background: #fff;
        z-index: 99;
        box-shadow: 0px 0px 1px 0.01px #888;
        overflow: hidden;
    }
    #reply_detail .reply_list_wrapper .reply_list_item .report_wrapper button {
        width: 100%;
        padding: 0.2rem 0.5rem 0.2rem 0.2rem;
        border: none;
        background: #fff;
        color: #666;
    }
    #reply_detail .reply_list_wrapper .reply_list_item .reply_list_item_title {
        line-height: 0.55rem;
    }
    #reply_detail .reply_list_wrapper .reply_list_item .reply_list_item_title span {
        font-size: 0.32rem;
    }
    #reply_detail .reply_list_wrapper .reply_list_item .reply_list_item_content {
        padding-left: 0.7rem;
        color: #666;
    }
    #reply_detail .reply_list_wrapper .reply_list_item .reply_list_item_desc {
        margin-top: 0.3rem;
        line-height: 0.55rem;
        padding-left: 0.7rem;
        color: #999;
    }

    /* 底部回复框*/
    #reply_detail .send_reply_btn {
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
        z-index: 12;
    }

    @keyframes upanddown
    {
        0%   {bottom: 0.7rem;}
        50%  {bottom: 0.8rem;}
        100% {bottom: 0.7rem;}
    }
    #reply_detail .send_reply_inp input:focus {
        border: 1px solid #448AFF;;
    }
    #reply_detail .send_reply_inp span {
        font-size: 0.32rem;
        color: #999;
    }

    /* 推荐文章*/
    #reply_detail .page_List_title {
        padding: 0.2rem;
        font-size: 0.35rem;
        color: #999999;
    }
    #reply_detail .page_List_wrapper {
        width: 100%;
    }

    #reply_detail .page_List_wrapper .tab_item {
        position: relative;
        margin-bottom: 0.3rem;
        padding: 0.2rem 0.2rem 0.2rem 2.6rem;
        height: 2.1rem;
        background: #fff;
    }
    #reply_detail .page_List_wrapper .tab_item .tab_item_left {
        position: absolute;
        top: 0.2rem;
        left: 0.2rem;
        width: 2.4rem;
        height: 1.7rem;
        background: #ccc;
    }
    #reply_detail .page_List_wrapper .tab_item .tab_item_title {
        font-family: PingFangSC-forumdium;
        padding-left: 0.2rem;
        font-size: 0.3rem;
        font-weight: bolder;
        color: #3A3A3A;
    }
    #reply_detail .page_List_wrapper .tab_item .tab_item_desc {
        position: absolute;
        bottom: 0.2rem;
        left: 2.8rem;
        color: #999999;
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
                author:'',//回复
                showBox: false,
                sendReplyInpPlace: '回复：徐月',
                replyNum: Math.floor(Math.random()*200 + 100),
                replyList: [
                    {
                        replyId: Math.floor(Math.random()*200 + 100),
                        replyUser: 'XYTang',
                        replyTo: '徐月',
                        formTime: '前天 21：11',
                        formContent: '收款卡刷卡科技啥道具卡三德科技疯狂进攻我人饿哦我微积分你给的嘉年华诶我',
                        goodNum: Math.floor(Math.random()*200 + 100),
                        showReportWrapper: false
                    },
                    {
                        replyId: Math.floor(Math.random()*200 + 100),
                        replyUser: 'XY',
                        replyTo: '徐月',
                        formTime: '前天 15：11',
                        formContent: '收款卡刷卡科技啥道具卡三德科技疯狂进攻我人饿哦我微积分你给的嘉年华诶我',
                        goodNum: Math.floor(Math.random()*200 + 100),
                        showReportWrapper: false
                    }
                ],
                tabItemList: [
                    {
                        title: '全部全部全部全部全部全部',
                        focusNum: 1233,
                        ducNum: 123
                    },
                    {
                        title: '全部全部全部全部全部全部',
                        focusNum: 323,
                        ducNum: 132
                    },
                    {
                        title: '全部全部全部全部全部全部全部',
                        focusNum: 3332,
                        ducNum: 1212
                    }
                ]
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
                this.showBox = true
            },
            //对评论的评论进行回复
            reply (replyTo) {
                this.sendReplyInpPlace = `回复：${replyTo}`;
                this.author = replyTo;
                this.showBox = true;
                this.$refs.author.answerMessage();

                // console.log(replyTo);
            },
            go (name) {
                this.$router.push({name: name});
            },
            showReportWrapper (index) {
                this.replyList[index].showReportWrapper = !this.replyList[index].showReportWrapper;
            },
            report (index, type) {
                this.replyList[index].showReportWrapper = false;
                MessageBox.confirm(`你确定举报该信息，举报原因：${type}?`).then(action => {
                    alert(`${type}举报成功`)
                }, () => {
                });
            }
        }
    }

</script>