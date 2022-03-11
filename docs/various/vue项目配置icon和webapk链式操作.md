## vue 项目配置 icon 和 webapk 链式操作

#### vue 项目之——配置 icon svg-sprite-loader

1. 下载 svg-sprite-loader
2.

#### vue 项目之——webpack 链式操作

1. 下载 `webpack-chain`

- `yarn add webpack-chain`或者`npm i webpack-chain`

2. 进行链式操作

函数的形式:

```
configureWebpack: (config)=> {
    config.name = title

}
```

对象的形式:

```
configureWebpack: {
    name: title


}
```

3.
