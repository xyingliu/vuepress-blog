/*
 * @FilePath: /xyingliu.github.io/Users/xyingliu/code/blog/vuepress-blog/docs/.vuepress/config.js
 * @Description: 描述
 * @Author: 刘晓莹
 * @LastEditTime: 2022-03-03 16:17:09
 */
module.exports = {
  title: "只道寻常的前端小站点",
  description: "一些笔记和生活杂谈",
  theme: "antdocs",
  logo: "/assets/logo.svg",
  base: "/",
  head: [["link", { rel: "icon", href: "/assets/logo.svg" }]],
  markdown: {
    lineNumbers: false,
  },
  themeConfig: {
    smoothScroll: true,
    lastUpdated: "Last Updated",
    repo: "https://github.com/zpfz/vuepress-creator",
    editLinks: false,
  },

  plugins: {
    // 中文文件夹转拼音路径
    "permalink-pinyin": {
      lowercase: true, // Converted into lowercase, default: true
      separator: "-", // Separator of the slug, default: '-'
    },
    // 侧边栏自动生成
    "vuepress-plugin-auto-sidebar": {
      sort: {
        mode: "asc",
      },
      sidebarDepth: 2,
      title: {
        mode: "titlecase",
        map: {
          "/histories/": "每日小记",
          "/study/": "前端杂章记录",
          "/life/": "生活记录",
          "/captegory/": "标签",
        },
      },
      collapse: {
        open: true,
      },
    },
    // 头部导航栏自动生成
    autonav: {
      enable: true,
    },
  },
}
