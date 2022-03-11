

1.1 下载 babel-polyfill
npm install --save-dev babel-polyfill


1.2 在入口main.js文件引入：import 'babel-polyfill'

1.3 在webpack.base.conf.js 文件中，将entry入口
 entry: {
    app: ['babel-polyfill', './src/main.js']
  },
1.4 最后，再依赖一个插件解决ES6/ES7高级语法兼容
npm install --save-dev babel-preset-es2015-ie

1.5 如果根目录下缺少文件.babelrc，新建一个文件为.babelrc，文件内容如下

```
{
    "presets": [
      
    ["env", {
        "modules": false,
        "targets": {
          "browsers": ["> 1%", "last 2 versions", "not ie <= 8"]
        }
      }],
      "stage-2"
    ],
    "plugins": ["transform-runtime"],
    "env": {
      "test": {
        "presets": ["env", "stage-2"],
        "plugins": ["istanbul"]
      }
    }
}
```
