/*
 * @FilePath: /xyingliu.github.io/Users/xyingliu/code/blog/vuepress-starter/docs/.vuepress/config.js
 * @Description: 描述
<<<<<<< HEAD
 * @Author: 只道寻常
 * @LastEditTime: 2022-03-01 10:05:37
 */
=======
 * @Author: 刘晓莹
 * @LastEditTime: 2022-03-07 14:02:23
 */

>>>>>>> 293d9ffa (feature: 增加md文件)
module.exports = {
  title: "只道寻常的前端小破站",
  description: "一些笔记和生活杂谈",
  themeConfig: {
    logo: "/images/bear.svg",

<<<<<<< HEAD
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
=======
  autoOpenBrowser: true,
  plugins: {
    // 中文文件夹转拼音路径
    "permalink-pinyin": {
      lowercase: true, // Converted into lowercase, default: true
      separator: "-", // Separator of the slug, default: '-'
    },
    // 侧边栏自动生成
    "vuepress-plugin-auto-sidebar": {
      title: {
        mode: "titlecase",
        map: {
          "/vue/": "vue不间断更新",
          "/optimization/": "优化方案集",
          "/various/": "杂七杂八的文章",
        },
      },
      sort: {
        mode: "asc",
      },
      // 侧边栏显示深度到h3
      sidebarDepth: 2,
      // 折叠
      collapse: {
        open: false,
>>>>>>> 293d9ffa (feature: 增加md文件)
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
