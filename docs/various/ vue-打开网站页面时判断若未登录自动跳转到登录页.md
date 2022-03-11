---
title: 打开网站页面时判断若未登录自动跳转到登录页
---

1. 在配置路由的 index.js 中给需要 token 页面的路由加上 mata 对象

如：

```
 {
    path: '/setResult',
    name: 'appletSettingResult',
    // 判断是否需要登录
    meta: {
        requireAuth: true,
    },
    component: r => require.ensure([], () => r(require('../components/appletSettings/appletSettingStep/appletSettingStepResult.vue'))),
},
```

2. 在 main.js 中加上一下判断是否已经存储 token 值

```
// 进入项目页面时判断是否有token，没有则跳转到登陆页
router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requireAuth)) { // 判断该路由是否需要登录权限
        console.log('需要登录', to);
        if (sessionStorage.getItem('token')) { // 判断当前的token是否存在 ； 登录存入的token
            next();
        }
        else {
            next({
                path: '/signIn'
            })
        }
    }
    else {
        next();
    }
})
```
