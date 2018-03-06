<template>
    <div id='activity_detail'>
        <div class='page_wrapper'>
            <div class='page_title'>
                <h1>壹基因诚邀您加盟千亿基因检测市场</h1>
                <p class='tiforum'>时间：2017.10.29~2017.11.09</p>
            </div>
            <div class='page_content'>
                <div class='part'>我们欢迎更多的热心米粉加入小米社区同城会团队，担起这份光荣责任！</div>
                <div class='part'>小米同城会是各地喜爱小米、志同道合的人团结在一起的民间米粉组织，同城会会长是小米同城会活动的主导者，负责协助官方管理和组织民间线下活动，聚集所在城市米粉交流心得、分享爱好、结交朋友，从而扩大小米影响力。目前海内外已有近百个小米同城会，百余位同城会会长，现小米社区面向全国米粉，长期招募有志者加入同城会长团队，共同创建团结友爱的同城会大家庭。加入小米同城会，让未来的你喜欢现在不凡的自己！we are 伐木累！</div>
                <div class='part'>
                    <p>同城会会长特权</p>
                    <p>1、荣誉身份。同城会会长专属认证勋章</p>
                    <p>2、产品特权。优秀会长具有优先获得小米热销产品的F码及体验新品的机会</p>
                    <p>3、线下特权。优秀会长优先参与官方线下及年度重大活动的机会。</p>
                    <p>4、丰厚福利。每月考核达标的会长可获得小米社区官方提供的神秘奖励。</p>
                    <p>5、近距离与官方团队沟通，结识志同道合朋友，锻炼组织协调能力。</p>
                </div>
                <div class='part'>
                    <p>同城会会长招募条件</p>
                    <p>所申请的同城会需属于地级市，现在不支持开通县级市同城会；</p>
                    <p>另申请前需先了解同城会是否有在职会长，</p>
                    <p>只有当前无同城会会长或会长人数小于3人，方可提出申请；</p>
                </div>
                <div class='part'>
                    <p>1、热爱小米、诚实靠谱、善于交友、认真负责；</p>
                    <p>2、性格成熟，待人彬彬有礼，开朗热情，持之以恒，同时具有创新意识；</p>
                    <p>3、生活在所申请城市，具备组织线下活动能力和抗压能力；</p>
                    <p>4、目前为小米VIP用户，无其他小米特殊用户组职务，单一纯粹；</p>
                    <p>6、无论坛严重违规和灌水记录，未被禁言禁访过；</p>
                    <p>7、愿意无条件服从小米社区管理，遵守各项管理规定；</p>
                    <p>8、爱好摄影、设计、微博控、交友圈广的申请者优先考虑！</p>
                </div>
                <div class='inscribe'>
                    <p>编辑于 13:23</p>
                    <p>版权归作者所有</p>
                </div>
            </div>
        </div>
        <div class='page_List'>
            <div class='page_List_title'>
                推荐活动
            </div>
            <div class='page_List_wrapper'>
                 <ul>
                    <li class='tab_item' v-for='(item, index) of tabItemList' @click='go("detail")'>
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
        <div class="footer">
            <ul class="clearfix">
                <li><a @click='toggleGood'><i class="good" :class='{ "good-on": gooded }'></i> <p>点赞{{goodNum}}</p></a></li>
                <li><a @click='toggleFocus'><i class="focus" :class='{ "focus-on": focused }'></i> <p>关注{{focusNum}}</p></a></li>
                <li><router-link to='/forum/detail'><i class="forum"></i> <p>评论{{forumNum}}</p></router-link></li>
            </ul>
        </div>
    </div>
</template>
<style scoped>
    #activity_detail {
        font-family: PingFangSC-Regular;
        width: 100%;
        background: #F7F7F7;
        padding-bottom: 1rem;
    }
    #activity_detail .page_wrapper {
        width: 100%;
        text-align: center;
    }
    #activity_detail .page_wrapper .page_title {
        background: #fff;
        padding: 0.2rem 0;
    }
    #activity_detail .page_wrapper .page_title h1{
        padding: 0.2rem;
        font-size: 0.4rem;
        color: #3A3A3A;
     }
    #activity_detail .page_wrapper .tiforum {
        font-size: 0.3rem;
        color: #999999;
    }
    #activity_detail .page_wrapper .page_content {
        text-align: left;
        color: #666666;
        margin: 0.2rem 0 0 0;
        padding: 0.2rem 0.2rem 0.5rem 0.2rem;
        background: #fff;
        font-size: 0.32rem;
    }
    #activity_detail .page_wrapper .page_content .part {
        margin-bottom: 0.5rem;
    }
    #activity_detail .page_wrapper .page_content .inscribe {
        margin-top: 1.2rem;
        text-align: right;
        color: #3A3A3A;
    }
    #activity_detail .page_List_title {
        padding: 0.2rem;
        font-size: 0.35rem;
        color: #999999;
    }
    #activity_detail .page_List_wrapper {
        width: 100%;
    }

    #activity_detail .page_List_wrapper .tab_item {
        position: relative;
        margin-bottom: 0.3rem;
        padding: 0.2rem 0.2rem 0.2rem 2.6rem;
        height: 2.1rem;
        background: #fff;
    }
    #activity_detail .page_List_wrapper .tab_item .tab_item_left {
        position: absolute;
        top: 0.2rem;
        left: 0.2rem;
        width: 2.4rem;
        height: 1.7rem;
        background: #ccc;
    }
    #activity_detail .page_List_wrapper .tab_item .tab_item_title {
        font-family: PingFangSC-forumdium;
        padding-left: 0.2rem;
        font-size: 0.3rem;
        font-weight: bolder;
        color: #3A3A3A;
    }
    #activity_detail .page_List_wrapper .tab_item .tab_item_desc {
        position: absolute;
        bottom: 0.2rem;
        left: 2.8rem;
        color: #999999;
    }
    .footer ul li{float: left;width:33%;height: 100%;text-align: center;padding-top: 0.1rem;}
    li a{display: inline-block;width:100%;height: 100%;}
    li .add{width:1.05rem;height: 1.05rem;position: relative;top:-0.3rem}
    li i{width: 0.4rem;height: 0.4rem;display: inline-block;}
    li .good{background: url('../../assets/img/good-gray.png');background-size: cover;}
    li .good.good-on{background: url('../../assets/img/good.png');background-size: cover;}
    li .focus{background: url('../../assets/img/focus.png');background-size: cover;}
    li .focus.focus-on{background: url('../../assets/img/focus-on.png');background-size: cover;}
    li .forum{background: url('../../assets/img/forum.png');background-size: cover;}
    .footer li p{color:#999;}

    li .a:active .good{background: url('../../assets/img/good.png');background-size: cover;}
    li .a:active .focus{background: url('../../assets/img/focus-on.png');background-size: cover;}
    li .a:active .forum{background: url('../../assets/img/forum-on.png');background-size: cover;}
    li .a:active p{color:#29B6F6;}
</style>
<script>
    import { Toast } from 'mint-ui'
    export default {

        components: {
        },
        props: {
        },
        data () {
            return {
                gooded: false,
                goodNum: Math.floor(Math.random()*200 + 100),
                focused: true,
                focusNum: Math.floor(Math.random()*200 + 100),
                forumNum: Math.floor(Math.random()*200 + 100),
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
            toggleGood () {
                if (this.gooded) {
                    this.goodNum--
                    Toast({
                        message: '取消点赞!',
                        position: 'middle'
                    })
                } else {
                    this.goodNum++
                    Toast({
                        message: '已点赞!',
                        position: 'middle'
                    })
                }
                this.gooded = !this.gooded
            },
            toggleFocus () {
                if (this.focused) {
                    this.focusNum--
                    Toast({
                        message: '取消关注!',
                        position: 'middle'
                    })
                } else {
                    this.focusNum++
                    Toast({
                        message: '已关注!',
                        position: 'middle'
                    })
                }
                this.focused = !this.focused
            },
            go (name) {
                this.$router.push(name);
            }
        }
    }

</script>