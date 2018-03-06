<template>
    <div class="helpTitle">
        <p><input placeholder="请输入标题" v-model="title"></p>
        <p><textarea placeholder="请输入内容" v-model="content"></textarea></p>
        <div class="imgDiv">
            <ul class="clearfix">
                <li v-if="imgs.length>0" v-for='(item ,index ) in imgs' style="position:relative">
                    <img :src="item">
                    <img src="../../assets/img/close.png" alt="" class="delectBtn" @click="delete_img(index)">
                </li>
                <li style="position:relative" v-if="imgs.length>=6 ? false : true">
                    <img src="../../assets/img/addimg.png"><input class="upload" @change='add_img'  type="file">
                    <!-- <img src="../../assets/img/close.png" alt="" class="delectBtn" @click="delete_img"> -->
                </li>
            </ul>
        </div>
        <div v-if="showFlag" class='group' style='margin-bottom: 0.3rem;'>
            <p>匿名提问</p>
            <div class='swith_wrapper'>
                <my-switch v-model="anonymous"></my-switch>
            </div>
        </div>
        <div class="uploadDiv" :class="{'disabled': !content || !title}">
            <button @click="uploadImage">
                <router-link to="../indexPage/selectArea" v-if="!showFlag">选择板块</router-link>
                <router-link to="/indexPage/askDetail" v-if="showFlag"><div>发布</div></router-link>
                
            </button>
        </div>
        
    </div>
</template>
<script>
import { MessageBox  } from 'mint-ui';
import mySwitch from './accountSetting/mySwitch.vue';
export default {
  components: {
    mySwitch
  },
  data () {
    return {
      anonymous: false,// 是否匿名
      way:'',//路由传过来的参数
      showFlag:true,//匿名提问模块
      title: '',
      content: '',
      imgs: [],
      imgData: {
        accept: 'image/gif, image/jpeg, image/png, image/jpg',
        }
    }
  },
  mounted: function() {  
    //   console.log(this.$route.query.way);
        this.way = this.$route.query.way;
        if(this.way == 1){
            //从提问路由进来
            this.showFlag = true;
        }
        else if(this.way == 2){
            //从发帖路由进来
            this.showFlag = false;
        }
  },
  methods: {
        delete_img(index){
            console.log(index);
            this.imgs.splice(index,1);
            // console.log(item);            
        },
        add_img(event){  
            if(this.imgs.length>5){
                //最多只能添加6张图片
                return false;
            }
            var reader =new FileReader();
            var img1=event.target.files[0];
            var type=img1.type;//文件的类型，判断是否是图片
            var size=img1.size;//文件的大小，判断图片的大小
            if(this.imgData.accept.indexOf(type) == -1){
                MessageBox.alert('请选择我们支持的图片格式！');
                return false;
            }
            if(size>2097152){
                MessageBox.alert('请选择2M以内的图片！');
                return false;
            }
            reader.readAsDataURL(img1);
            var that=this;
            reader.onloadend=function(){
                that.imgs.push(reader.result)
            }     
        },
        uploadImage: function() {
            console.log(this.imgs);
            return false;
            var obj = {};
            obj.images=this.imgs
            $.ajax({
                type: 'post',
                url: "",
                data: obj,
                dataType: "json",
                success: function(data) {
                    if(data.status){
                        MessageBox.alert(data.msg);
                        return false;
                    }else{
                        MessageBox.alert(data.msg);
                        return false;
                    }
                }
            });
        }
    }
  
}

</script>
<style scoped>
.helpTitle input{background: #F7F7F7;width:100%;height:0.98rem;padding:0 0.2rem;font-size:0.32rem;border:none;border-bottom:1px solid #d8d8d8;border-radius:0;line-height:0.98rem;}
.helpTitle textarea{background: #F7F7F7;width:100%;height: 3.5rem;border:none;border-bottom:1px solid #d8d8d8;border-radius:0;font-size:0.28rem;padding: 0.2rem;}
.imgDiv{margin-top:0.3rem;}
.helpTitle li{float:left;width:1.9rem;height:1.6rem;margin:0.1rem 0.3rem;}
.helpTitle li img{width:100%;height:100%;}
.upload{width:100%;height:100%;z-index: 99999;opacity: 0;position: absolute;left:0;top:0;}
.uploadDiv{margin-top:0.3rem;padding:0 0.3rem;}
.uploadDiv button{width: 100%;height: 0.74rem;color: #fff;background: #448AFF;border: 1px solid #448AFF;font-size: 0.36rem;border-radius: 4px;}
.uploadDiv.disabled button{color: #666;background: #D8D8D8;border: 1px solid #D8D8D8;}
.uploadDiv.disabled button a{color: #666;}
.delectBtn{
    width: 0.4rem !important;
    height: 0.4rem !important;
    position: absolute;
    right: -0.2rem;
    bottom: -0.2rem;
}
.uploadDiv>button>a{
    color: #fff;
}
.group {
    position: relative;
    background: #fff;
    height: 1.12rem;
    line-height: 1.12rem;
    font-size: 0.32rem;
    padding: 0 0.3rem;
    margin: 0.2rem 0;
    color: #3A3A3A;
    overflow: hidden;
}
.group .swith_wrapper {
    position: absolute;
    right: 0.3rem;
    bottom:0.25rem;
}
</style>