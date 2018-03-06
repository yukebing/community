<template>
    <div class="message_box" v-show='show' :style="messageBoxStyle">
        <div class="shadow" @click="hidBox"></div>
        <div class="text_area" :style="textAreaStyle">
            <!-- 通过子组件传过来的参数 -->
            <div class="title" v-if="answerFlag">
                回复：{{replayName}}
            </div>
            <!-- 通过路由传过来的参数 -->
            <div class="title" v-if="replyFlag">
                回复：{{forumUser}}
            </div>
            <!-- 对评论的评论进行回复 -->
            <div class="title" v-if="authorFlag">
                回复：{{replayAuthor}}
            </div>
            <div class="title" v-if="commentFlag">
                评论
            </div>
            <textarea class="text_content" placeholder="请输入您的评论" @focus="onFocus" @blur="onBlur"></textarea>
            <div class=" btn_wrapper">
                <button class="send">发布</button>
                <button class="default" @click="cancel">取消</button>
            </div>
        </div>
    </div>
</template>
<style scoped>
    .text_area {
    }
    .message_box {
        position: fixed;
        top: 0;
        left: 0;
        z-index: 33;
    }
    .message_box .shadow {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: #ccc;
        opacity: 0.8;
    }
    .message_box .text_area {
        position: relative;
        z-index: 12;
        overflow: hidden;
        background: #fff;
        margin: 0.2rem;
        padding: 0.2rem;
    }
    .message_box .text_content {
        width: 100%;
        height: 3rem;
        padding: 0.2rem;
        font-size: 0.32rem;
        border: none;
        background: #fff;
        border: 1px solid #cec7c7;
    }
    #message_box textarea::-webkit-input-placeholder {
        font-size: 0.28rem;
    }
    #message_box textarea:-moz-placeholder {
        font-size: 0.28rem;
    }
    #message_box textarea::-moz-placeholder {
        font-size: 0.28rem;
    }
    #message_box textarea:-ms-input-placeholder {
        font-size: 0.28rem;
    }
    .message_box .text_content:focus {
        border: 1px solid #448AFF;
    }
    .message_box .btn_wrapper {
        padding: 0.2rem;
        text-align: center;
        background: #fff;
    }
    .message_box .btn_wrapper button {
        width: 45%;
        height: 0.8rem;
        border-radius: 0.08rem;
        border: none;
        font-size: 0.32rem;
    }
    button.send {
        background: #448AFF;
        color: #fff; 
    }
    button.default {
        background: #D8D8D8;
        color: #666; 
    }
    .title{
        font-size: 0.28rem;
        color: #3A3A3A;
        letter-spacing: 0;
        margin-bottom: 0.15rem;
    }
</style>
<script>

    export default {

        components: {
        },
        props: {
            show: {
                type: Boolean,
                required: true,
                default: false,
                
              },
            replayName:{
                type:''
            },
            replayAuthor:{
                type:''
            }
        },
        data () {
            return {
                messageBoxStyle: '',
                textAreaStyle: '',
                forumUser:'', //回帖人
                commentFlag:true,//评价
                replyFlag:false, //回复
                answerFlag:false, //回复,组件传过来的值
                authorFlag:false //对评论的评论进行回复
            }
        },
        created () {
            let wHeight = document.body.clientHeight
            let wWidth = document.body.clientWidth
            this.messageBoxStyle = `width: ${wWidth}px;height: ${wHeight}px;`
        },
        mounted () {
            $('.shadow').on('touchmove', function(e) {
                e.preventDefault();
            })
            if(this.$route.query.forumUser){
                //从回复入口进入
                this.commentFlag = false;
                this.replyFlag  = true;
                this.forumUser = this.$route.query.forumUser;
                // console.log(this.forumUser);
            }
            // console.log(this.replayName);
            
        },
        watch: {
        },
        methods: {
            onFocus () {
            },
            onBlur () {
            },
            hidBox() {
                this.$emit('change', null)
            },
            cancel () {
                this.hidBox()
            },
            replayMessage (){
               this.commentFlag = false;
               this.replyFlag = false; 
               this.authorFlag = false;
               this.answerFlag = true;
            },
            closeMessage (){
                this.commentFlag = true;
                this.replyFlag = false; 
                this.answerFlag = false;
                this.authorFlag = false;
            },
            //对评论的评论进行回复
            answerMessage (){
                 this.authorFlag = true;
                 this.commentFlag = false;
                 this.replyFlag = false; 
                 this.answerFlag = false;
            }
        }
    }

</script>