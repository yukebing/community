<template>
    <div id='account_setting_index'>
        <div class='group' style='margin-bottom: 0.3rem;' @click='go("accountSettingUpdataAccountInfo")'>
            <p>修改资料<img class="fr" src="../../../assets/img/gray-right.png"></span></p>
        </div>
        <div class='group hasline' @click='go("accountSettingPwdSetting")'>
            <p>修改账号密码<img class="fr" src="../../../assets/img/gray-right.png"></span></p>
        </div>
        <div class='group hasline' @click='go("accountSettingPhoneNumSetting")'>
            <p>手机号<span><img class="fr" src="../../../assets/img/gray-right.png"></span></p>
        </div>
        <div class='group' style='margin-bottom: 0.3rem;' @click='go("accountSettingEmailSetting")'>
            <p>邮箱<img class="fr" src="../../../assets/img/gray-right.png"></span></p>
        </div>
        <div class='group' @click='go("accountSettingMsgSetting")'>
            <p>消息设置<img class="fr" src="../../../assets/img/gray-right.png"></span></p>
        </div>
        <div class='account_setting_index_footer text-center'>
            <button style='color:#888;background: #fff;' @click="cancelAccount">退出账号</button>        
        </div>
    </div>
</template>
<style scoped>
#account_setting_index {
    font-family: PingFangSC-Regular;
    width: 100%;
    height: 100%;
    overflow: hidden;
}
#account_setting_index .group {
    position: relative;
    height: 1.12rem;
    width: 100%;
    font-size: 0.32rem;
    color: #3A3A3A;
    line-height: 1.12rem;
    background: #fff;
    color: #3A3A3A;
    padding: 0 0.3rem;
}
#account_setting_index .group img {
    width: 0.4rem;
    height: 0.4rem;
    margin-top: 0.35rem;
}
#account_setting_index .hasline.group:after {
    position: absolute;
    bottom: 0;
    right: 0;
    content: '';
    width: 7.2rem;
    height: 1px;
    background: #D8D8D8;
}
#account_setting_index .group:first-child {
    margin-top: 0.5rem;
}
#account_setting_index .group p {
    font-size: 0.32rem;
}
#account_setting_index .account_setting_index_footer {
    width: 100%;
    margin: 1rem 0;
    height: 0.8rem;
    line-height: 0.8rem;
}
#account_setting_index .account_setting_index_footer button {
    width: 100%;
    height: 100%;
    font-size: 0.36rem;
    border: none;
    border-radius: 0.1rem;
}
</style>
<script>
    import { MessageBox, Cell, myButton } from 'mint-ui'

    export default {

        components: {
            Cell,
            myButton
        },
        props: {
        },
        data () {
            return {
                phoneNum: '158****5945',
                email: '未设置'
            }
        },
        created () {
        },
        mounted () {
        },
        watch: {
        },
        methods: {
            go (name) {
                this.$router.push({name: name})
            },
            cancelAccount () {
                MessageBox.confirm('你确定退出账号?').then(action => {
                    console.log(action)
                    alert(`退出账号成功！`);
                }, () => {
                });
            }
        }
    }

</script>