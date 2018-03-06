<template>
    <div class="personal">
        <div class="personInfo">
            <p><img class="headerimg" src="../../assets/img/man.png"></p>
            <p class="name">王雷雷</p>
            <p><router-link to="/personalCenter/myFocus/focusUser" tag="span"><span style="margin-right:0.7rem;">关注：2345</span></router-link> <router-link to="/personalCenter/myFans" tag="span"><span>粉丝：2345</span></router-link></p> 
        </div>
        <div class="listContent">
            <div style="padding:0 0.3rem">
                <div class="commondiv clearfix">
                    <a>
                        <div class="fl">
                            <img src="../../assets/img/note.png"> <span>查看报告</span>
                        </div>
                        <img class="rightArrow fr" src="../../assets/img/gray-right.png">
                    </a>
                </div>
                <div class="smallLine"></div>
                <div class="commondiv clearfix">
                    <router-link to="/personalCenter/myDynamic/tiezi">
                        <div class="fl">
                            <img src="../../assets/img/message.png"> <span>我的动态</span>
                        </div>
                        <img class="rightArrow fr" src="../../assets/img/gray-right.png">
                    </router-link>
                </div>
                <div class="smallLine"></div>
                <div class="commondiv clearfix">
                    <router-link to="/personalCenter/myFocus/focusUser">
                    <div class="fl">
                        <img src="../../assets/img/focus-on.png"> <span>我的关注</span>
                    </div>
                    <img class="rightArrow fr" src="../../assets/img/gray-right.png">
                    </router-link>
                </div>
            </div>
            <div class="line"></div>
            <div style="padding:0 0.3rem">
                <div class="commondiv clearfix">
                    <router-link to="/personalCenter/myMessage/message">
                    <div class="fl">
                        <img src="../../assets/img/contact.png"> <span>我的消息</span>
                    </div>
                    <img class="rightArrow fr" src="../../assets/img/gray-right.png">
                    </router-link>
                </div>
                <div class="smallLine"></div>
                <div class="commondiv clearfix">
                    <router-link to="/personalCenter/help">
                    <div class="fl">
                        <img src="../../assets/img/me-on.png"> <span>反馈帮助</span>
                    </div>
                    <img class="rightArrow fr" src="../../assets/img/gray-right.png">
                    </router-link>
                </div>
                <div class="smallLine"></div>
                <div class="commondiv clearfix">
                    <router-link to="/personalCenter/accountSetting">
                    <div class="fl">
                        <img src="../../assets/img/focus-on.png"> <span>账号设置</span>
                    </div>
                    <img class="rightArrow fr" src="../../assets/img/gray-right.png">
                    </router-link>
                </div>
                <div class="smallLine"></div>
            </div>
        </div>
    </div>
</template>
<script>

</script>

<style scoped>
.personal{padding-bottom:0.8rem;}
.personInfo{width:100%;height:3.6rem;padding:0.58rem 0;text-align: center;background-image: linear-gradient(270deg, #C3CFE2 0%, #F5F7FA 100%);font-size: 0.28rem;color: #3A3A3A;}
.headerimg{width:1.2rem;height:1.2rem;border-radius:1.2rem;}
.name{font-size: 0.36rem;margin:0.15rem 0 0.2rem 0;}
.listContent{padding-bottom:0.5rem;}
.listContent .commondiv{height:1.12rem;width: 100%;font-size:0.32rem;color: #3A3A3A;line-height: 1.12rem;}
.listContent .smallLine{width:100%;height: 1px;background: #D8D8D8;}
.commondiv a>div img{width:0.4rem;height: 0.4rem;position: relative;top: 4px;}
.commondiv .rightArrow{width: 0.4rem;height:0.4rem;margin-top: 0.35rem;}
.commondiv a{color: #3A3A3A;display: inline-block;width: 100%;height: 100%;}
</style>