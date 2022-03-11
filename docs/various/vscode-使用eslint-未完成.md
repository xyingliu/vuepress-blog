---
title: 安装vscode中eslint的插件
---

<!-- ![image](/EE8E07B942D0432BB6649A0B8D208F55.jpg) -->

- 安装 eslint
  > npm install -g eslint
- 生成配置文件

  > eslint --init

- 以下为生成配置文件在的过程：
  如图：
  <!-- ![image](/54E9AE062AD1455384418D5235CD90C2.jpg) -->
  代码如下：

```
e:\work\code\panda-applets-cms\pandaAppletsCms> eslint --init
? How would you like to configure ESLint? Answer questions about your style
? Are you using ECMAScript 6 features? Yes
? Are you using ES6 modules? Yes
? Where will your code run? Browser
? Do you use CommonJS? Yes
? Do you use JSX? No
? What style of indentation do you use? Spaces
? What quotes do you use for strings? Single
? What line endings do you use? Windows
? Do you require semicolons? No
? What format do you want your config file to be in? JavaScript
Successfully created .eslintrc.js file in e:\work\code\panda-applets-cms\pandaAppletsCms
```

设置完成后我们会生成一个.eslintrc.js 的配置文件
如图：
<!-- ![image](/73B01258C3E74E60B4F56D1CC2275183.jpg) -->
代码：

```
module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "sourceType": "module"
    },
    "rules": {
        "indent": [
            "error",
            4
        ],
        "linebreak-style": [
            "error",
            "windows"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "never"
        ]
    }
};
```
