<template>
  <div class="brand">
      <div class="title"><p>选择板块</p></div>
      <div class="content">
          <div class="category" v-for="(content,index) in category">
              <div class="category_title">
                  {{content.title}}
              </div>
              <div class="item" v-for="(content ,index) in content.item" :class="{item_active:content.name == bandArea ? true:false}">
                  <label class="selectBox"><input type="radio" v-model="bandArea" :value="content.name" class="select" @click="selectArea" />{{content.name}}</label>                 
              </div>
          </div>
      </div>
      <router-link tag="div" :to="{path:'/indexPage/postDetail'}">
            <div class="post">发布</div>
      </router-link>      
  </div>
</template>
<script>
export default {
  data() {
    return {
        bandArea:'',//用户选中的板块
        category:[
            {
            title:'预防',
            item:[
                {name:'鼻咽癌'},
                {name:'科普癌症'},
                {name:'宫颈癌'},
                {name:'肺癌'},
                {name:'肝癌'},
                {name:'前列腺癌'},
                {name:'食管癌'},
                {name:'结直肠癌'},
                {name:'乳腺癌'},
                {name:'胰腺癌'},
                {name:'胃癌'},
                ]           
            },
            {
            title:'早筛',
            item:[
                {name:'基因早筛'},{name:'临床早筛'}
                ]
            },
            {
            title:'治疗',
            item:[
                {name:'用药指导'},{name:'动态监测'}
                ]
            },
            {
            title:'其他',
            item:[
                {name:'话题'},{name:'提问'}
                ]
            }
        ]
    };
  },
  
  methods:{
      selectArea:function(){
          this.$nextTick(function(){
              console.log("你选中的是"+this.bandArea);
          });     
      }
  }
};
</script>
<style scoped>
.brand {
  background: #ffffff;
  width: 100%;
  height: auto;
}
.title {
    background: #d8d8d8;
    color: #666666;
    height: 0.86rem;
    width: 7.5rem;
}
.title > p {
 padding:0.2rem 0 0.2rem 0.46rem;
font-size: 0.32rem;
}
.content{
    margin: 0.2rem 0 0.2rem 0.28rem;
}
.category_title{
   margin-bottom: 0.15rem;
    margin-left: 0.15rem;
    font-size: 0.36rem;
    color: #999999;
    margin-top: 0.3rem;
}
.item{
   display: inline-block;
    width: 1.4rem;
    text-align: center;
    height: 0.6rem;
    background: #D8D8D8;
    color: #fff;
    line-height: 0.6rem;
    margin: 0.2rem 0.17rem;
    font-size: 0.28rem;
    position: relative;
    border-radius: 6px;
}
.item_active{
    background: #29B6F6; 
    color: #fff;
}
.selectBox{
    position: relative;
    left: 0rem;
    bottom: 0rem;
    display: inline-block;
    width: 1.4rem;
    height: 0.6rem;
}
.select{
    width: 1.4rem;
    height: 0.6rem;
    visibility: hidden;
    position: absolute;
    left: 0rem;
    bottom: 0rem;
    outline: none;  
}
.post{
    font-size: 0.36rem;
    background: #448AFF;
    color: #fff;
    text-align: center;
    margin: 0.26rem 0.3rem;
    width: 6.9rem;
    height: 0.74rem;
    line-height: 0.74rem;
}
</style>

