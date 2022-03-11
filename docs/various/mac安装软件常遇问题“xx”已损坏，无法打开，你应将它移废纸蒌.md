---
title: macOS遇见的问题
---
macOS Catalina 10.15系统：

首先打开「终端.app」，其次输入以下命令并回车，最后输入开机密码再回车

sudo xattr -rd com.apple.quarantine 空格 软件的路径

比如Sketch.app

sudo xattr -rd com.apple.quarantine /Applications/Sketch.app

比如CleanMyMac X.app

sudo xattr -rd com.apple.quarantine /Applications/CleanMyMac X.app

附1：

/Applications/Sketch.app 就是软件的路径

2. 软件路径获取方法：可以将软件拖到「终端app」就可以获得路径