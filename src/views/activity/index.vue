<template>
    <div id='activity_index'>
        <div style='width: 100%;height: 2.7rem;'>
            <mt-swipe :auto="2000">
              <mt-swipe-item class="mint-swipe-bg"><img src="../../assets/img/banner1.png" alt=""></mt-swipe-item>
              <mt-swipe-item class="mint-swipe-bg"><img src="../../assets/img/banner2.png" alt=""></mt-swipe-item>
              <mt-swipe-item class="mint-swipe-bg"><img src="../../assets/img/banner3.png" alt=""></mt-swipe-item>
              <mt-swipe-item class="mint-swipe-bg"><img src="../../assets/img/banner4.png" alt=""></mt-swipe-item>
            </mt-swipe>
        </div>
        <div style='width: 100%;line-height: 1rem;'>
            <mt-navbar v-model="selected">
                <mt-tab-item id="1" style='color:#999;font-size: 0.25rem;'>全部</mt-tab-item>
                <mt-tab-item id="2" style='color:#999;font-size: 0.25rem;'>进行中</mt-tab-item>
                <mt-tab-item id="3" style='color:#999;font-size: 0.25rem;'>未开始</mt-tab-item>
                <mt-tab-item id="4" style='color:#999;font-size: 0.25rem;'>已结束</mt-tab-item>
            </mt-navbar>
        </div>
        <div class='tab_item_wrapper'>
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
</template>
<style scoped>
    #activity_index {
        width: 100%;
        background: #F7F7F7;
    }
    #activity_index .tab_item_wrapper {
        width: 100%;
        padding-top: 0.3rem;
    }
    #activity_index .tab_item_wrapper .tab_item {
        position: relative;
        margin-bottom: 0.3rem;
        padding: 0.2rem 0.2rem 0.2rem 2.6rem;
        height: 2.1rem;
        background: #fff;
    }
    #activity_index .tab_item_wrapper .tab_item .tab_item_left {
        position: absolute;
        top: 0.2rem;
        left: 0.2rem;
        width: 2.4rem;
        height: 1.7rem;
        background: #ccc;
    }
    #activity_index .tab_item_wrapper .tab_item .tab_item_title {
        font-family: PingFangSC-Medium;
        padding-left: 0.2rem;
        font-size: 0.3rem;
        font-weight: bolder;
        color: #3A3A3A;
    }
    #activity_index .tab_item_wrapper .tab_item .tab_item_desc {
        position: absolute;
        bottom: 0.2rem;
        left: 2.8rem;
        color: #999999;
    }
    .mint-swipe-bg > img{
        width:100%;
        height:2.7rem;
    }
    .mint-swipe,.mint-swipe-items-wrap{
     overflow: visible;
    }
</style>
<script>
    import { Swipe, SwipeItem, Navbar, TabItem } from 'mint-ui'
    export default {

        components: {
            Swipe,
            SwipeItem,
            Navbar,
            TabItem
        },
        props: {
        },
        data () {
            return {
                selected: '1',
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
            'selected': 'doSomething'
        },
        methods: {
            go (name) {
                this.$router.push(name);
            },
            doSomething () {
                if (this.selected === '1') {
                    this.tabItemList = this.tabItemList.map(function(item) {
                        return {
                            title: '全部全部全部全部全部全部全部全部全部全部全部',
                            focusNum: Math.floor(Math.random()*500) + 500,
                            ducNum: Math.floor(Math.random()*500) + 500
                        }
                    })
                }
                if (this.selected === '2') {
                    this.tabItemList = this.tabItemList.map(function(item) {
                        return {
                            title: '进行中进行中进行中进行中进行中进行中',
                            focusNum: Math.floor(Math.random()*500) + 500,
                            ducNum: Math.floor(Math.random()*500) + 500
                        }
                    })
                }
                if (this.selected === '3') {
                    this.tabItemList = this.tabItemList.map(function(item) {
                        return {
                            title: '未开始未开始未开始未开始未开始未开始未开始',
                            focusNum: Math.floor(Math.random()*500) + 500,
                            ducNum: Math.floor(Math.random()*500) + 500
                        }
                    })
                }
                if (this.selected === '4') {
                    this.tabItemList = this.tabItemList.map(function(item) {
                        return {
                            title: '已结束已结束已结束已结束已结束已结束已结束',
                            focusNum: Math.floor(Math.random()*500) + 500,
                            ducNum: Math.floor(Math.random()*500) + 500
                        }
                    })
                }
            }
        }
    }

</script>