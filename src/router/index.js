import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    component(resolve) {
      require(['views/login.vue'], resolve)
    },
    meta: {
      pageTitle: '密码登录'
    }
  },
  {
    path: '/register',
    component(resolve) {
      require(['views/register.vue'], resolve)
    },
    meta: {
      pageTitle: '注册'
    }
  },
  {
    path: '/loginByCode',
    component(resolve) {
      require(['views/loginByCode.vue'], resolve)
    },
    meta: {
      pageTitle: '验证码登录'
    }
  },
  //首页部分
  {
    path: '/indexPage/search',
    component(resolve) {
      require(['views/indexPage/search.vue'], resolve)
    },
    meta: {
      pageTitle: '搜索'
    }
  },
  {
    path: '/indexPage/posting',
    component(resolve) {
      require(['views/indexPage/posting.vue'], resolve)
    },
    meta: {
      pageTitle: '发帖'
    }
  },
  {
    path: '/module/askEvery',
    component(resolve) {
      require(['views/module/askEvery.vue'], resolve)
    },
    meta: {
      pageTitle: '提问'
    }
  },
  {
    path: '/module/askNext',
    component(resolve) {
      require(['views/module/askNext.vue'], resolve)
    },
    meta: {
      pageTitle: '提问'
    }
  },
  {
    path: '/indexPage/postDetail',
    component(resolve) {
      require(['views/indexPage/postDetail.vue'], resolve)
    },
    meta: {
      pageTitle: '帖子详情'
    }
  },
  {
    path: '/indexPage/selectArea',
    component(resolve) {
      require(['views/indexPage/selectArea.vue'], resolve)
    },
    meta: {
      pageTitle: '选择板块'
    }
  },
  //首页部分
  {
    name: 'activityDetail',
    path: '/activity/detail',
    title: '活动详情',
    component(resolve) {
      require(['views/activity/detail.vue'], resolve)
    },
    meta: {
      pageTitle: '活动详情'
    }
  },
  {
    name: 'forumDetail',
    path: '/forum/detail',
    title: '评论',
    component(resolve) {
      require(['views/forumDetail.vue'], resolve)
    },
    meta: {
      pageTitle: '评论'
    }
  },
  {
    name: 'replyDetail',
    path: '/reply/detail',
    title: '评论',
    component(resolve) {
      require(['views/replyDetail.vue'], resolve)
    },
    meta: {
      pageTitle: '评论'
    }
  },
  {
    path: '/',
    component(resolve) {
      require(['views/base.vue'], resolve)
    },
    children: [{
      name: 'index',
      path: '/index',
      title: '主页',
      component(resolve) {
        require(['views/index.vue'], resolve)
      },
      meta: {
        pageTitle: '主页'
      }
    },
    {
      name: 'moduleIndex',
      path: '/module/index',
      title: '板块主页',
      component(resolve) {
        require(['views/module/index.vue'], resolve)
      },
      meta: {
        pageTitle: '板块主页'
      }
    },
    {
      name: 'activityIndex',
      path: '/activity/index',
      title: '活动主页',
      component(resolve) {
        require(['views/activity/index.vue'], resolve)
      },
      meta: {
        pageTitle: '活动主页'
      }
    },
    {
      name: 'personalCenter',
      path: '/personalCenter/index',
      title: '个人中心',
      component(resolve) {
        require(['views/personalCenter/index.vue'], resolve)
      },
      meta: {
        pageTitle: '个人中心'
      }
    },
    //板块跳转页面
    //预防
    {
      name: 'modulePrevent',
      path: '/module/prevent',
      title: '预防',
      redirect: '/module/prevent/dynamic',
      component(resolve) {
        require(['views/module/prevent.vue'], resolve)
      },
      meta: {
        pageTitle: '预防'
      },
      children: [
        {
          name: 'preventDynamic',
          path: '/module/prevent/dynamic',
          title: '预防',
          component(resolve) {
            require(['views/module/prevents/dynamic.vue'], resolve)
          },
          mete: {
            pageTitle: '预防'
          }
        },
        {
          name: 'preventHot',
          path: '/module/prevent/hot',
          title: '预防',
          component(resolve) {
            require(['views/module/prevents/hot.vue'], resolve)
          },
          mete: {
            pageTitle: '预防'
          }
        },
        {
          name: 'preventEssence',
          path: '/module/prevent/essence',
          title: '预防',
          component(resolve) {
            require(['views/module/prevents/essence.vue'], resolve)
          },
          mete: {
            pageTitle: '预防'
          }
        }
      ]
    },
    //咨询
    {
      name: 'moduleInformation',
      path: '/module/information',
      title: '咨询',
      component(resolve) {
        require(['views/module/information.vue'], resolve)
      },
      mete: {
        pageTitle: '咨询'
      }
    },
    //提问
    {
      name: 'moduleAskDynamic',
      path: '/module/ask',
      title: '提问',
      redirect: '/module/ask/dynamic',
      component(resolve) {
        require(['views/module/ask.vue'], resolve)
      },
      meta: {
        pageTitle: '提问'
      },
      children: [{
        name: 'askDynamic',
        path: '/module/ask/dynamic',
        title: '提问',
        component(resolve) {
          require(['views/module/prevents/dynamic.vue'], resolve)
        },
        mete: {
          pageTitle: '提问'
        }
      },
      {
        name: 'askHot',
        path: '/module/ask/hot',
        title: '提问',
        component(resolve) {
          require(['views/module/prevents/hot.vue'], resolve)
        },
        mete: {
          pageTitle: '提问'
        }
      },
      {
        name: 'askEssence',
        path: '/module/ask/essence',
        title: '预防',
        component(resolve) {
          require(['views/module/prevents/essence.vue'], resolve)
        },
        mete: {
          pageTitle: '提问'
        }
      },
      ]
    },
    //肺癌
    {
      name: 'moduleLungCancerDynamic',
      path: '/module/lungCancer',
      title: '肺癌',
      redirect: '/module/lungCancer/dynamic',
      component(resolve) {
        require(['views/module/lungCancer.vue'], resolve)
      },
      meta: {
        pageTitle: '肺癌'
      },
      children: [{
        name: 'lungCancerDynamic',
        path: '/module/lungCancer/dynamic',
        title: '提问',
        component(resolve) {
          require(['views/module/prevents/dynamic.vue'], resolve)
        },
        mete: {
          pageTitle: '肺癌'
        }
      },
      {
        name: 'lungCancerHot',
        path: '/module/lungCancer/hot',
        title: '肺癌',
        component(resolve) {
          require(['views/module/prevents/hot.vue'], resolve)
        },
        mete: {
          pageTitle: '肺癌'
        }
      },
      {
        name: 'lungCancerEssence',
        path: '/module/lungCancer/essence',
        title: '肺癌',
        component(resolve) {
          require(['views/module/prevents/essence.vue'], resolve)
        },
        mete: {
          pageTitle: '肺癌'
        }
      }
      ]
    },
    // 其他人个人中心
    // zyh （它人）个人中心
    {
      name: 'other',
      path: '/personalCenter/otherUser',
      title: '个人中心其他人',
      component(resolve) {
        require(['views/personalCenter/OtherCenter/otherUser.vue'], resolve)
      },
      meta: {
        pageTitle: '某人个人中心'
      }
    },
    {
      name: 'otherDynamic',
      path: '/personalCenter/otherUser/otherDynamic',
      title: '他人动态',
      component(resolve) {
        require(['views/personalCenter/OtherCenter/prevents/otherDynamic.vue'], resolve)
      },
      mete: {
        pageTitle: '他人动态'
      }
    }
    ]
  },
  // 我的动态
  {
    path: '/',
    component(resolve) {
      require(['views/personalCenter/myDynamic/dynamic.vue'], resolve)
    },
    children: [{
      name: 'tiezi',
      path: '/personalCenter/myDynamic/tiezi',
      title: '帖子',
      component(resolve) {
        require(['views/personalCenter/myDynamic/tiezi.vue'], resolve)
      },
      meta: {
        pageTitle: '我的动态'
      }
    },
    {
      name: 'ask',
      path: '/personalCenter/myDynamic/ask',
      title: '提问',
      component(resolve) {
        require(['views/personalCenter/myDynamic/ask.vue'], resolve)
      },
      meta: {
        pageTitle: '我的动态'
      }
    },
    {
      name: 'interact',
      path: '/personalCenter/myDynamic/interact',
      title: '互动',
      component(resolve) {
        require(['views/personalCenter/myDynamic/interact.vue'], resolve)
      },
      meta: {
        pageTitle: '我的动态'
      }
    }
    ]
  },
  //帖子详情
  {
    name: 'tieziDetail',
    path: '/personalCenter/myDynamic/tieziDetail',
    title: '我的关注',
    component(resolve) {
      require(['views/personalCenter/myDynamic/tieziDetail.vue'], resolve)
    },
    meta: {
      pageTitle: '帖子详情'
    }
  },
  // 我的关注
  {
    name: 'focusUser',
    path: '/personalCenter/myFocus/focusUser',
    title: '我的关注',
    component(resolve) {
      require(['views/personalCenter/myFocus/focusUser.vue'], resolve)
    },
    meta: {
      pageTitle: '我的关注'
    }
  },
  {
    name: 'focusModules',
    path: '/personalCenter/myFocus/focusModules',
    title: '我的关注',
    component(resolve) {
      require(['views/personalCenter/myFocus/focusModules.vue'], resolve)
    },
    meta: {
      pageTitle: '我的关注'
    }
  },
  {
    name: 'focusContent',
    path: '/personalCenter/myFocus/focusContent',
    title: '我的关注',
    component(resolve) {
      require(['views/personalCenter/myFocus/focusContent.vue'], resolve)
    },
    meta: {
      pageTitle: '我的关注'
    }
  },
  // 我的粉丝
  {
    name: 'fansUser',
    path: '/personalCenter/myFans',
    title: '我的关注',
    component(resolve) {
      require(['views/personalCenter/myFans/fans.vue'], resolve)
    },
    meta: {
      pageTitle: '我的粉丝'
    }
  },
  {
    name: 'accountSetting',
    path: '/personalCenter/accountSetting',
    title: '帐号设置',
    component(resolve) {
      require(['views/personalCenter/accountSetting/index.vue'], resolve)
    },
    meta: {
      pageTitle: '帐号设置'
    }
  },
  {
    name: 'accountSettingMsgSetting',
    path: '/personalCenter/msgSetting',
    title: '消息设置',
    component(resolve) {
      require(['views/personalCenter/accountSetting/msgSetting.vue'], resolve)
    },
    meta: {
      pageTitle: '消息设置'
    }
  },
  {
    name: 'accountSettingEmailSetting',
    path: '/personalCenter/emailSetting',
    title: '邮箱设置',
    component(resolve) {
      require(['views/personalCenter/accountSetting/emailSetting.vue'], resolve)
    },
    meta: {
      pageTitle: '邮箱设置'
    }
  },
  {
    name: 'accountSettingPhoneNumSetting',
    path: '/personalCenter/phoneNumSetting',
    title: '修改手机',
    component(resolve) {
      require(['views/personalCenter/accountSetting/phoneNumSetting.vue'], resolve)
    },
    meta: {
      pageTitle: '修改手机'
    }
  },
  {
    name: 'accountSettingPwdSetting',
    path: '/personalCenter/accountPwdSetting',
    title: '修改密码',
    component(resolve) {
      require(['views/personalCenter/accountSetting/accountPwdSetting.vue'], resolve)
    },
    meta: {
      pageTitle: '修改密码'
    }
  },
  {
    name: 'accountSettingUpdataAccountInfo',
    path: '/personalCenter/updataAccountInfo',
    title: '修改资料',
    component(resolve) {
      require(['views/personalCenter/accountSetting/updataAccountInfo.vue'], resolve)
    },
    meta: {
      pageTitle: '修改资料'
    }
  },
  //我的消息
  {
    name: 'message',
    path: '/personalCenter/myMessage/message',
    title: '我的消息',
    component(resolve) {
      require(['views/personalCenter/myMessage/message.vue'], resolve)
    },
    meta: {
      pageTitle: '消息'
    }
  },
  {
    name: 'notice',
    path: '/personalCenter/myMessage/notice',
    title: '我的消息',
    component(resolve) {
      require(['views/personalCenter/myMessage/notice.vue'], resolve)
    },
    meta: {
      pageTitle: '通知'
    }
  },
  {
    name: 'help',
    path: '/personalCenter/help',
    title: '我的关注',
    component(resolve) {
      require(['views/personalCenter/help.vue'], resolve)
    },
    meta: {
      pageTitle: '反馈帮助'
    }
  },
  {
    name: 'askDetail',
    path: '/indexPage/askDetail',
    title: '提问详情',
    component(resolve) {
      require(['views/indexPage/askDetail.vue'], resolve)
    },
    meta: {
      pageTitle: '提问详情'
    }
  },
  {
    // 消息
    name: 'information',
    path: '/personalCenter/otherUser/information',
    title: '聊天/发消息',
    component(resolve) {
      require(['views/personalCenter/OtherCenter/prevents/information.vue'], resolve)
    },
    mate: {
      pageTitle: '聊天/发消息',
    }
  },
  ]
});
