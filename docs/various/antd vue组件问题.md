1. select下拉列表跟随滚动条滚动

解决方法: 在select上增加以下属性方法

```
:getPopupContainer="
    triggerNode => {
        return triggerNode.parentNode || document.body;}
    "
```
****