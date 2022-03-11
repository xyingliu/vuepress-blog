---
title: 博客搭建不完全记录
---

<!-- nav 开头的文件夹将会成为导航栏，如果手动配置了 themeConfig.nav 将自动合并。
nav.10.文件名, 10.文件名……会自动去掉前缀、排序数字。
非 nav 开头文件夹会成为 Group。
文件夹 01.guide--nc 以 --nc 结尾意为设置 Group 默认展开。
文件夹 01.guide--d2 以 --d数字 结尾，为设置目录深度。 -->

## 一、使用的插件

### 1. 头部 nav 导航栏自动生成

> 使用插件 [vuepress-plugin-autonav ](https://github.com/webmasterish/vuepress-plugin-autonav)

### 2. 侧边栏 navbar 自动生成

> 使用插件 [vuepress-plugin-auto-sidebar ](vuepress-plugin-auto-sidebar)

> 侧边栏文件名称规则

规则 1. 网站中使用的是 “日期 - 名称” 的格、式命名文件的。
规则 2. 这一个文件中的文章会默认按照日期排序
规则 3. 配置拼音格式
```
plugins: {
'permalink-pinyin': {
  lowercase: true, // 小些
  separator: '-' // 横线分割
}
}
```

### 3. 文件中文命名在路径链接中转为拼音显示

> 使用插件 [vuepress-plugin-permalink-pinyin ](https://github.com/viko16/vuepress-plugin-permalink-pinyin)

## 二、 markdown 文件中的配置说明

> markdown 文件中的文章中可以设置这篇文章的显示方式,本人在使用过程中用到的配置如下
>
> > ```
> > title: 文章大标题
> > displayAllHeaders: true/false
> > sidebarDepth:0/1/2
> > autonav:
> >   enable: false
> >   order: -1
> > ```

### 1. title: 文章大标题

- 同样也可以直接在 markdwon 中使用 `# 文章大标题`，显示效果一样

### 2. displayAllHeaders: true

> 这个文件夹下的标题在侧边栏显示到 h3 标题

- 可以在配置中直接设置整个博客或者某个文件夹下的标题显示深度

### 3. sidebarDepth

> 这个文件夹下的标题在侧边栏显示几层

- sidebarDepth 数值最大为 2，这个时候显示到 h3
- 比如是`sidebarDepth: 1`,那么在侧边栏中显示 h2 级的标题， `sidebarDepth: 2`,那么在侧边栏中显示 h2、h3 级的标题
  ```
  ---
  sidebarDepth: 2
  ---
  ## 一、h2标题显示
  ###  1、h3标题显示
  ####   a、四层标题到这层就不在侧边栏显示了
  ```

### 4. autoIgnore: true

> 这篇文章是否显示在侧边栏中

### 5. autonav

> 是否在 header 导航栏中显示这个文件夹

```
autonav:
  enable: false     // enable显示设置
  order: -1          // 排序

// 注意： 个人使用时，文件夹下的README.md下配置才生效的
```
