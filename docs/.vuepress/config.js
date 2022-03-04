/*
 * @FilePath: /xyingliu.github.io/Users/xyingliu/code/blog/vuepress-blog/docs/.vuepress/config.js
 * @Description: 描述
 * @Author: 刘晓莹
 * @LastEditTime: 2022-03-04 18:59:49
 */
// const pathList = require.context('./commond', true, /\.(md)$/)

const fs = require("fs")

let files = []

function PathDir(path) {
  let that = this
  // markdown文件匹配
  // /^{$str}.*?{$end}$/
  const mdRegExp = /^.*(README)\.(md)$/
  if (fs.statSync(path).isFile() && mdRegExp.test(path)) {
    const file = fs.readFileSync(path).toString().split("\n")
    console.log("filefilefile====>", file)
    let map = file.findIndex((value) => {
      const hasTtitle = value.includes("title: ")
      if (hasTtitle) {
        return value
      }
    })
    let autonav = file.findIndex((value) => {
      const ignore = value.includes("autonav")
      if (ignore) {
        return value
      }
    })
    if (map === -1 || autonav === -1) {
      return file
    }
    const $str = "./docs"
    const $end = "/README.md"
    const key = path.match(/docs(\S*)README.md/)[1]
    let title = String(map).split(": ")[1]
    // console.log('files',files);
    return title
      ? (files = {
          ...files,
          [key]: title,
        })
      : files
  }
  try {
    fs.readdirSync(path).forEach(function (file) {
      PathDir.call(that, path + "/" + file)
    })
  } catch (e) {}
}

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
    displayAllHeaders: true,
  },

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
        // map: PathDir("./docs"),
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
        open: true,
      },
    },
    // 头部导航栏自动生成
    autonav: {
      enable: true,
    },
    // url路径按照目录文件名来生成
    "@vuepress/blog": {},
  },
}
