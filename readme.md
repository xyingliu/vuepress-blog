<!--
 * @FilePath: /xyingliu.github.io/Users/xyingliu/code/blog/vuepress-blog/readme.md
 * @Description: 描述
 * @Author: 刘晓莹
 * @LastEditTime: 2022-03-03 16:06:00
-->
<!-- nav 开头的文件夹将会成为导航栏，如果手动配置了 themeConfig.nav 将自动合并。
nav.10.文件名, 10.文件名……会自动去掉前缀、排序数字。
非 nav 开头文件夹会成为 Group。
文件夹 01.guide--nc 以 --nc 结尾意为设置 Group 默认展开。
文件夹 01.guide--d2 以 --d数字 结尾，为设置目录深度。 -->

### 使用的插件

#### 头部nav导航栏自动生成
使用插件 [vuepress-plugin-autonav ](https://github.com/webmasterish/vuepress-plugin-autonav)

隐藏导航栏中markdown的配置
```
autonav:
enable: true
order: -1
```
