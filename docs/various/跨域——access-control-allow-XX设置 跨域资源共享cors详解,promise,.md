---
title: access-control-allow-origin的设置
---

<font color=green size=3>对设置参数的详解及使用中需注意的问题：
[csdn 跨域资源共享-access-control-allow-name](https://blog.csdn.net/java_green_hand0909/article/details/78740765)</font>

非 IE 浏览器，利用 xmlhttprequest，在 request header 添加 origin:本域名地址，通常不需要手动添加，浏览器会动添加

IE 浏览器，利用 XDomainRequest 发送请求，它会自动封装 header 中添加 origin

response header 添加 access-control-allow-origin:* 或 url
使用通配符*会出现的问题：，会允许来自任意域的跨域请求访问成功，这是比较危险的，所以在生产环境通常会做更精确控制；

<font color=green size=3>深入了解浏览器存储--从 cookie 到 WebStorage、IndexedDB</font>

[link](https://note.youdao.com/)https://juejin.im/post/5c8e6fa8e51d453ec75168cd

Event loop
[link](https://note.youdao.com/)
https://juejin.im/post/5ca2c4d46fb9a05e15300943

Event loop
