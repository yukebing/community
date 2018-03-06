<template>
      <div id="box">
        <div class="searchBox">
          <input
            type="text" 
            class="search" 
            placeholder="输入关键字" 
            v-model='inputText' 
            @keyup='show($event)' 
            @keydown.down='down()' 
            @keydown.up.prevent='up()'  
          >
          <img src="../../assets/img/big.png" alt="" class="searchImg">
        </div>     
        <ul>
          <li v-for="(item, index) in result" :class='{bgcolor: index==nowIndex}' @click="gotoItem(item)" :key="item">
            {{item}}
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
          console.log(event);
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
            console.log(res.data);
            this.result = res.data.s;//搜索到的结果
          });
        },
        goto:function(event) {
          console.log(event);
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
  .searchBox{
    width: 7.5rem;
    height: 0.98rem;
    background: rgba(216,216,216,1);
    position: relative;
  }
  .search{
    width: 6.9rem;
    height: 0.67rem;
    background: rgba(255,255,255,1);
    border-radius: 0.08rem;
    outline: none;
    margin: 0.16rem 0.3rem 0.15rem 0.3rem;
    padding-left: 0.3rem;
    padding-right: 0.6rem;
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
    margin-top: 6px;
    margin-left: 10px;
  }
  li{
    list-style: none;
    margin: 4px;
  }
  li:hover{
    background: #ccc;
  }
  .bgcolor {
    background: #ccc;
  }
</style>


