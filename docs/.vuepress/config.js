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
    nav: require("./config/nav"),
    sidebar: require("./config/sidebar"),
    lastUpdated: "Last Updated",
    repo: "https://github.com/zpfz/vuepress-creator",
    editLinks: false,
  },
}
