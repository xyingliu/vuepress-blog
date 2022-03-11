
## vscode操作指南




作用                | 快捷键
--------------------|--------------------
移动选中代码位置    | shift+option+上箭头/下箭
选中多个位置重命名  | option+双击
添加 文件头 注释    | ctrl+alt+i
添加 函数 注释      | ctrl+alt+t 



#### 1. vscode快捷键设置
- ctrl+b 切换侧边栏

- ctrl+\ 拆分编辑器

- ctrl+鼠标滚轮 缩放编辑器的字体

- alt+shift+f 整理代码格式

- alt+z 切换自动换行

- ctrl+· 打开终端调试

- ctrl+shift+n 新建窗口

- ctrl+p 文件内搜索(聚焦在某个文件)

- ctrl+shif+f 全编辑器搜索(聚焦在资源管理器)

- 单击文件 预览(再点别的会替换成其他)

- 双击文件 编辑文件(固定在工作区)

#### 2. 工作区常用设置

- 控制在多少个字符后编辑器会自动换到下一行。将其设置为 0 则将打开视区宽度换行(自动换行)。将其设置为 -1 则将强制编辑器始终不换行。
```
"editor.wrappingColumn": 0
```

- 控制行号的可见性
```
 “editor.lineNumbers”: true
```

- 控制编辑器是否应呈现缩进参考线

```
”editor.renderIndentGuides”: true
```

- 控制是否自动保存更新后的文件。

```
”files.autoSave”: “off” 
”files.autoSave”:“onFocusChange” //(编辑器失去焦点)
”files.autoSave”: “afterDelay” //可在 “files.autoSaveDelay” 中配置延迟

```
- 控制资源管理器是否应该允许通过拖放移动文件和文件夹,(默认就是true，不需要专门修改)。

```
”explorer.enableDragAndDrop”: true
```

- 缩进 head 和 body 部分(默认false)。

```
”html.format.indentInnerHtml”: false
```

- vscode自动换行
```
"editor.wordWrap": "on"
```

- vue不再手写import，点击跳转文件`https://www.jianshu.com/p/e0e62d22fa6d`


- vscode格式化功能
 ```
  Alt+Shift+F  //  （Ï格式化全文）
  Ctrl+K Ctrl+F // （格式化选中代码，两个Ctrl需要同时按着）

 ```

- 左边菜单栏indent间距
```
"workbench.tree.indent": 20
```



















