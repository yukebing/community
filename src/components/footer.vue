<template>
    <div class="footer">
        <ul class="clearfix" @click="footerBtn">
            <li @click="close"><router-link to="/index"><i class="index"></i> <p>主页</p></router-link></li>
            <li @click="close"><router-link to="/module/index"><i class="forum"></i> <p>板块</p></router-link></li>
            <!-- <li><router-link to="/indexPage/posting"><img class="add" src="../assets/img/add.png"></router-link></li> -->
            <li>
                <div class="add_wrapper">
                    <img class="add" src="../assets/img/add.png" @click="showMore">
                    <router-link :to="{path:'/indexPage/posting',query:{way:1}}" v-if="show">
                        <img  class="ask" src="../assets/img/ask.png">
                    </router-link>
                    <router-link :to="{path:'/indexPage/posting',query:{way:2}}" v-if="show">
                        <img v-if="show" class="posting" src="../assets/img/posting.png">
                    </router-link>
                </div>
                
            </li>
            <li @click="close"><router-link to="/activity/index"><i class="activity"></i> <p>活动</p></router-link></li>
            <li @click="close"><router-link to="/personalCenter/index"><i class="me"></i> <p>我的</p></router-link></li>
        </ul>
        <div v-if="showdowFlag" class="showdow"></div>    
    </div>
</template>
<script>
    export default{
        data(){
            return{
                show:false, //控制提问与发帖显示框
                showdowFlag:false //遮罩
            }
        },
        methods:{
            showMore:function(){
                this.show = !this.show;
                this.showdowFlag = !this.showdowFlag
            },
            //关闭遮罩
            close:function(){
                this.show = false;
                this.showdowFlag = false;
            },
            footerBtn:function(){
            //     for(var i = 0 ;i<)
            //     // if(this.show == true && this.showdowFlag == true){
            //     //     this.show = false;
            //     //     this.showdowFlag = false;//关闭遮罩
            //     // }
            //     // else{

            //     // }
            // }
            // console.log(this.clearfix.length);
        }
    }  
} 
</script>
<style scoped>
.footer ul li {
  float: left;
  width: 20%;
  height: 100%;
  text-align: center;
  padding-top: 0.1rem;
}
li a {
  display: inline-block;
  width: 100%;
  height: 100%;
}
li .add_wrapper {
  width: 1.05rem;
  height: 1.05rem;
  position: relative;
  top: -0.3rem;
  z-index: 50;
}
.add {
  position: absolute;
  top: -0.3rem;
  left: 0.25rem;
  width: 1.05rem;
  height: 1.05rem;
}
.ask {
  position: absolute;
  top: -1.5rem;
  left: -1.3rem;
  width: 1.24rem;
  height: 1.24rem;
}
.posting {
  position: absolute;
  top: -1.5rem;
  right: -1.8rem;
  width: 1.24rem;
  height: 1.24rem;
}
.showdow {
  position: fixed;
  width: 100%;
  height: 100%;
  opacity: 0.43;
  background: #000000;
  bottom: 0.98rem;
  z-index: 30;
}
li i {
  width: 0.4rem;
  height: 0.4rem;
  display: inline-block;
}
li .index {
  background: url("../assets/img/index.png");
  background-size: cover;
}
li .forum {
  background: url("../assets/img/forum.png");
  background-size: cover;
}
li .activity {
  background: url("../assets/img/activity.png");
  background-size: cover;
}
li .me {
  background: url("../assets/img/me.png");
  background-size: cover;
}
.footer li p {
  color: #999;
}

li .router-link-active .index {
  background: url("../assets/img/index-on.png");
  background-size: cover;
}
li .router-link-active .forum {
  background: url("../assets/img/forum-on.png");
  background-size: cover;
}
li .router-link-active .activity {
  background: url("../assets/img/activity-on.png");
  background-size: cover;
}
li .router-link-active .me {
  background: url("../assets/img/me-on.png");
  background-size: cover;
}
li .router-link-active p {
  color: #29b6f6;
}
</style>