/*
 * @FilePath: /xyingliu.github.io/Users/xyingliu/code/blog/vuepress-blog/docs/.vuepress/config.js
 * @Description: 描述
 * @Author: 刘晓莹
 * @LastEditTime: 2022-03-02 18:01:13
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
    nav: require("./nav.js"),
    lastUpdated: "Last Updated",
    repo: "https://github.com/zpfz/vuepress-creator",
    editLinks: false,
  },
  
  plugins: {
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
  },
}
