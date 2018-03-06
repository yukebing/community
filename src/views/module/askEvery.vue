<template>
      <div id="box">
        <div class="searchBox">
          <input
            type="text" 
            class="search" 
            placeholder="请输入您的问题" 
            v-model='inputText' 
            @keyup='show($event)' 
            @keydown.down='down()' 
            @keydown.up.prevent='up()'  
          >
          <router-link to='/module/askNext'>下一步</router-link>
        </div>     
        <ul v-if="result.length > 0">
            <p style="font-size: 0.28rem;color: #999;margin-bottom: 0.1rem;">以下可能是您要问的</p>
          <li v-for="(item, index) in result" :class='{bgcolor: index==nowIndex}' @click="gotoItem(item)" :key="item">
            <p style="font-size: 0.32rem;color: #3A3A3A;">{{item}}</p>
            <p style="font-size: 0.28rem;color: #999;">2355人关注 · 456评论 · 17分钟前</p>            
          </li>
        </ul>
      </div>
</template>
<script>
export default {
  data(){
    return  {
      inputText: '',
      text: '',
      nowIndex: -1,
      result: []
    }
  },
  mounted:function(){

  },
  methods: {
        show:function(event) {
          if (event.keyCode == 38 || event.keyCode == 40) {
            if (this.nowIndex < -1){
              return;
            }
            if (this.nowIndex != this.result.length && this.nowIndex != -1) {
              this.inputText = this.result[this.nowIndex];
            }
            return;
          }
          //enter键被按下
          if (event.keyCode == 13) {
            window.open('https://www.baidu.com/s?wd=' + this.inputText, '_blank');
            this.inputText = '';//清空
          }
          this.text = this.inputText;
          this.$http.jsonp('https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su', {
            params: {
              wd: this.inputText
            },
            jsonp: 'cb'
          }).then(function(res) {
            this.result = res.data.s;//搜索到的结果
          });
        },
        goto:function(event) {
          window.open('https://www.baidu.com/s?wd=' + this.inputText, '_blank');
          this.inputText = '';
        },
        gotoItem:function(item) {
          window.open('https://www.baidu.com/s?wd=' + item, '_blank');
          this.inputText = '';//清空数据
        },
        down:function() {
          this.nowIndex++;
          if (this.nowIndex == this.result.length) {
            //没有搜索到数据
            this.nowIndex = -1;
            this.inputText = this.text;
          }
        },
        up:function() {
          this.nowIndex--;
          if (this.nowIndex < -1){
            this.nowIndex = -1;
            return;
          }
          if (this.nowIndex == -1) {
            this.nowIndex = this.result.length;
            this.inputText = this.text;
          }
        }
      }
}
</script>
<style scoped>
  #box {
      font-family: PingFangSC-Regular;
  }
  a {
      display: inline-block;
      width: 1rem;
      color: #3A3A3A;
      font-size: 0.32rem;
  }
  .searchBox{
    width: 7.5rem;
    height: 0.98rem;
    background: #fff;
    position: relative;
    border-bottom: 1px solid #D8D8D8;
  }
  .search {
    -webkit-appearance: none; /*去除系统默认的样式*/
    width: 5.8rem;
    height: 0.67rem;
    font-size: 0.32rem;
    background: #fff;
    border: none;
    border-radius: 0.08rem;
    margin: 0.16rem 0.13rem 0.15rem 0.3rem;
    padding-left: 0.1rem;
    padding-right: 0.1rem;
  }
  .search:focus {
    border: 1px solid #d8d8d8;
  }
  .searchImg{
    position: absolute;
    right: 0.5rem;
    bottom: 0.3rem;
    width: 0.4rem;
    height: 0.4rem;
  }
  ::-moz-placeholder {  
    color: mediumvioletred;  
    text-indent: 0.2rem; /* 没有用 */  
    opacity: 1!important;  
    width:1.4rem;
    height:0.4rem; 
    font-size:0.28rem;
    color:rgba(153,153,153,1);
    line-height:0.4rem;
}  
:-ms-input-placeholder {  
    color: mediumvioletred;  
    text-indent: 0.2rem;
    width:1.4rem;
    height:0.4rem; 
    font-size:0.28rem;
    color:rgba(153,153,153,1);
    line-height:0.4rem; 
}  
::-webkit-input-placeholder {  
    color: mediumvioletred;  
    text-indent: 0.2rem; 
    width:1.4rem;
    height:0.4rem; 
    font-size:0.28rem;
    color:rgba(153,153,153,1);
    line-height:0.4rem;
}  
ul{
padding: 0;
margin-top: 0.3rem;
padding: 0.2rem;
background: #fff;
}
li{
list-style: none;
padding: 0.2rem 0;
border-bottom: 1px solid #D8D8D8;
}
li p {
    margin-top: 0.1rem;
}
.bgcolor {
background: #ccc;
}
</style>


