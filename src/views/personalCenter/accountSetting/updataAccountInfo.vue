<template>
    <div id='update_account_info'>
        <div class='headImg_nickname clearfix'>
            <div class='headImg_wrapper fl text-center'>
                <div class='headImg'>
                    <img-btn></img-btn>
                </div>
                <p class='desc'>编辑</p>
            </div>
            <div class='nickname_wrapper fl'>
                <p style='margin-bottom: 0.3rem;'><input type="text" placeholder="请输入昵称" v-model="nickname"></p>
                <p><input type="text" placeholder="个性签名（简单介绍下自己）" v-model="introduceSelf"></p>
            </div>
        </div>
        <div class='other_info'>
            <div class='other_info_item'>    
                <div class='label fl'>性别：</div>
                <p><input type="text" placeholder="请选择性别" v-model="sex" @click="sheetVisible = true" onfocus="this.blur();"></p>
            </div>
            <div class='other_info_item'>    
                <div class='label fl'>行业：</div>
                <p><input type="text" placeholder="请选择您所在的行业" v-model="job"></p>
            </div>
            <!-- <div class='other_info_item'>    
                <div class='label fl'>地址：</div>
                <p><input type="text" placeholder="浙江省  杭州市  滨江区" v-model="address"></p>
            </div>
            <div class='other_info_item'>    
                <div class='label fl'>详细地址：</div>
                <p><input type="text" placeholder="迎春东路迎春北苑3号楼502" v-model="detailAddress"></p>
            </div> -->
        </div>
        <div class='update_account_info_footer text-center'>
            <button @click="onSubmit">保存</button>        
        </div>
        <mt-actionsheet
            :actions="actions"
            v-model="sheetVisible">
        </mt-actionsheet>
    </div>
</template>
<style scoped>
    #update_account_info {
        font-family: PingFangSC-Regular;
        width: 100%;
        overflow: hidden;
    }
    #update_account_info .headImg_nickname {
        padding: 0.2rem;
    }
    #update_account_info .headImg_nickname .headImg_wrapper {
        padding-bottom: 0.1rem;
        margin-right: 0.4rem;
    }
    #update_account_info .headImg_nickname .headImg_wrapper .headImg {
        width: 1.44rem;
        height: 1.44rem;
        border-radius: 50%;
        background: #ccc;
    }
    #update_account_info .headImg_nickname .headImg_wrapper .desc {
        color: #999;
    }
    #update_account_info .headImg_nickname .nickname_wrapper {
        width: 5rem;
    }
    #update_account_info input::-webkit-input-placeholder {
        font-size: 0.28rem;
    }
    #update_account_info input:-moz-placeholder {
        font-size: 0.28rem;
    }
    #update_account_info input::-moz-placeholder {
        font-size: 0.28rem;
    }
    #update_account_info input:-ms-input-placeholder {
        font-size: 0.28rem;
    }
    #update_account_info input{
        width:100%;
        border: none;
        border-bottom: 1px solid #ccc;
        height:0.7rem;
        line-height: 0.7rem;
        border-radius: 0;
        background: #F7F7F7;
        font-size: 0.32rem;
        color: #3A3A3A;
    }

    #update_account_info .other_info {
        padding: 0 0.3rem;
    }
    #update_account_info .other_info .other_info_item {
        padding: 0.3rem 0 0.1rem 0;
        border-bottom: 1px solid #ccc;
    }
    #update_account_info .other_info .label {
        padding-top: 0.08rem;
        font-size: 0.32rem;
        margin-right: 0.2rem;
        color: #3A3A3A;
    }
    #update_account_info .other_info input {
        width: 5.5rem;
        border: none;
        height:0.6rem;
        line-height: 0.6rem;
        border-radius: 0;
        background: #F7F7F7;
        font-size: 0.32rem;
        color: #3A3A3A;
    }
    #update_account_info .other_info input:last-child {
        width: 4.6rem;
    }
    #update_account_info .update_account_info_footer {
        width: 100%;
        padding: 0 0.3rem;
        margin: 2rem 0;
    }
    #update_account_info .update_account_info_footer {
        width: 100%;
        margin: 1rem 0;
        height: 0.8rem;
        line-height: 0.8rem;
        padding: 0 0.3rem;
    }
    #update_account_info .update_account_info_footer button {
        width: 100%;
        height: 100%;
        font-size: 0.36rem;
        border: none;
        border-radius: 0.1rem;
        color: #fff;
        background: #448AFF;
    }
</style>
<script>
    import { Actionsheet, MessageBox } from 'mint-ui'
    import imgBtn from './testImg.vue'
    export default {

        components: {
            Actionsheet,
            imgBtn
        },
        props: {
        },
        data () {
            return {
                nickname: '',
                introduceSelf: '',
                sex: '',
                job: '',
                address: '',
                detailAddress: '',
                sheetVisible: false,
                actions: [
                    {
                        'name': '男',
                        'method': () =>{
                            this.chooseSex('男')
                        }
                    },
                    {
                        'name': '女',
                        'method': () =>{
                            this.chooseSex('女')
                        }
                    }
                ]
            }
        },
        created () {
        },
        mounted () {
        },
        watch: {
        },
        methods: {
            chooseSex (sex) {
                this.sex = sex
            },
            onSubmit () {
                if(!this.nickname){
                    MessageBox.alert('昵称不能为空！').then(action => {
                    });
                    return false;
                }
                alert(`信息保存成功！`);
            }
        }
    }

</script>