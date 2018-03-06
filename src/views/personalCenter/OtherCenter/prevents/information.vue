<template>
    <div class="content">
        <div class="tackhead">
            <span class="fc">发私信给</span>
            <span>userName</span>
        </div>
        <div class="tackcontent leftp">
            <div v-for="item of itemList" style="padding:0.2rem 0;">
                <div class="tackimg"><img :src="item.headerImg"></div>
                <div class="tackwho">{{item.name}}</div>
                <div class="arrow">
                    <div class="tackText">{{item.content}}</div>
                    <div class="send"></div>
                </div>            
            </div>
        </div>
        <div class="tackbtn">
            <input placeholder="请输入" ></input>
            <button type="button" >发送</button>
        </div>
    </div>
</template> 
<script>
export default {
    data () {
        return {
        itemList: [
            {
            headerImg: require('../../../../assets/img/man.png'),
            name: 'zzz',
            content: '在么？',
            },
            {
            headerImg: require('../../../../assets/img/woman.png'),
            name: 'xxx',
            content: '这是帖子的内容这是帖子的内容这是帖子的内容这是帖子的内容这是帖子的内容这是帖子的内容这是帖子的内容这是帖子的内容',
            },
                    {
            headerImg: require('../../../../assets/img/woman.png'),
            name: 'xxx',
            content: '这是帖子的内容这是帖子的内容这是帖子的内容这是帖子的内容这是帖子的内容这是帖子的内容这是帖子的内容这是帖子的内容',
            }, {
            headerImg: require('../../../../assets/img/man.png'),
            name: 'zzz',
            content: '在么？',
            },
            {
            headerImg: require('../../../../assets/img/woman.png'),
            name: 'xxx',
            content: '这是帖子的内容这是帖子的内容这是帖子的内容这是帖子的内容这是帖子的内容这是帖子的内容这是帖子的内容这是帖子的内容',
            },
                    {
            headerImg: require('../../../../assets/img/woman.png'),
            name: 'xxx',
            content: '这是帖子的内容这是帖子的内容这是帖子的内容这是帖子的内容这是帖子的内容这是帖子的内容这是帖子的内容这是帖子的内容',
            }, {
            headerImg: require('../../../../assets/img/man.png'),
            name: 'zzz',
            content: '在么？',
            },
            {
            headerImg: require('../../../../assets/img/woman.png'),
            name: 'xxx',
            content: '这是帖子的内容这是帖子的内容这是帖子的内容这是帖子的内容这是帖子的内容这是帖子的内容这是帖子的内容这是帖子的内容',
            },
                    {
            headerImg: require('../../../../assets/img/woman.png'),
            name: 'xxx',
            content: '这是帖子的内容这是帖子的内容这是帖子的内容这是帖子的内容这是帖子的内容这是帖子的内容这是帖子的内容这是帖子的内容',
            }
        ]
        }
    },
    mounted: function() {
    },
    
}
</script>
<style scoped>
    .content{
        width:100%;
        padding: 0.25rem 0;
        background:#fff;
        min-height: -webkit-fill-available;
    }
    .fc{color:#D8D8D8;}
    .leftp{padding-left:0.3rem;}
    /* 对话头部 */
    .tackhead{width:100%;padding:0.3rem 0 0.3rem 0.3rem; border-bottom:1px solid #eee;position:fixed;top:0;background:#fff;background: #fff;z-index: 1;}
    /* 对话内容边框填充*/
    .tackcontent{margin: 1rem 0;}
    /* 对话框样式*/ 
    .arrow {
        width: fit-content;
        position:relative;
        background:#D8D8D8;
        border-radius:5px; /* 圆角 */
        margin: 0.3rem 1rem 0;
        clear:both  ;
    }
    /*聊天用户头像*/
    .tackimg{width:0.7rem;height:0.7rem;margin-left:0.2rem;float:left;}
    .tackimg>img{width:100%;height:100%;}
    .tackwho{width:0.7rem;height:0.7rem;margin-left:0.2rem;float:left;padding-top:0.1rem;font-weight:bold;}
    .arrow .send{
        position:absolute;
        top:-0.03rem;
        left:0.3rem; /* 圆角的位置需要细心调试哦 */
        width:0;
        height:0;
        font-size:0;
        border:solid 8px;
        border-color:#D8D8D8;
        transform:rotate(43deg);
        z-index:;
    }
    .tackText{
        display:inline-block;
        padding:0.35rem;
        word-break: break-all;
        word-wrap: break-word;
    }
    /* 输入框 */
    .tackbtn{
        width:100%;
        height:1.2rem;
        padding:0.13rem 0 0.13rem 0.3rem;
        border-top:1px solid #eee;
        position: fixed;
        bottom: 0px;
        background:#fff;
    }
    .tackbtn>input{
        height:0.72rem;
        width:5.77rem;
        border-radius:5px;
        border:1px solid #ccc;
        padding-left:5px;
     }
    .tackbtn>button{
        line-height:0.72rem;
        background:#fff;
        border:none;
        font-size:0.32rem;
        color:#999;
    }
</style>