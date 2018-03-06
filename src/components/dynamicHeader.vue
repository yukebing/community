<template>
    <div class="dyHeader">
        <ul class="clearfix">
            <li><router-link to="/personalCenter/myDynamic/tiezi">帖子</router-link></li>
            <li><router-link to="/personalCenter/myDynamic/ask">提问</router-link></li>
            <li><router-link to="/personalCenter/myDynamic/interact">互动</router-link></li>
        </ul>
    </div>
</template>
<script>
</script>
<style scoped>
.dyHeader{width:100%;height: 0.88rem;line-height: 0.88rem;font-size:0.32rem;padding:0 0.2rem;}
.dyHeader ul li{float: left;width: 1.23rem;height: 0.88rem;line-height: 0.88rem;text-align: center;}
li a{display: inline-block;width:100%;height: 100%;color: #999;}
.dyHeader li .router-link-active{border-bottom:2px solid #29B6F6;color: #29B6F6;}
</style>