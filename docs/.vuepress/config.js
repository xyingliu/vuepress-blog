/*
 * @FilePath: /xyingliu.github.io/Users/xyingliu/code/blog/vuepress-starter/docs/.vuepress/config.js
 * @Description: 描述
 * @Author: 只道寻常
 * @LastEditTime: 2022-03-01 10:05:37
 */
module.exports = {
  title: "只道寻常的前端小破站",
  description: "一些笔记和生活杂谈",
  themeConfig: {
    logo: "/images/bear.svg",

    // 头部菜单设置
    nav: [
      { text: "首页", link: "/" },
      { text: "每日小记", link: "/histories/" },
      {
        text: "前端杂章记录",
        items: [
          { text: "VUE吐血学习ing", link: "/study/vue/" },
          { text: "get优化小技巧", link: "/study/optimization/" },
          { text: "项目点分析", link: "/study/projects/" },
        ],
      },
      { text: "生活", link: "/life/" },
    ],

    // 侧边菜单设置
    displayAllHeaders: true, // 默认值：false
    sidebar: {
      navbar: false,
      "/study/vue/": [
        {
          title: "vue的不间断更新",
          collapsable: true,
          children: [
            { title: "目录", path: "/study/vue/source1" },
            { title: "源码学习-router", path: "/study/vue/source1" },
            { title: "源码学习-extends", path: "/study/vue/source2" },
          ],
        },
      ],
    },
  },
}
