---
title: path.resolve和path.join的区别.md
---

### path.join

```
path.join(__dirname, './img/abc.jpg')
```

等价于

```
path.join(__dirname, '/img/abc.jpg')
```

- \_\_dirname 统一路径为: 'D:\test'
- 最终生成的路径为: 'D:\test\img\abc.jpg'

```
path.join('/val1','/img/val2.jpg', '/img/abc.jpg','..')
```

- 最终生成的路径为: 'D:\test\val1\img\abc.jpg'

从上可以看出来,path.join 就是字符串拼接的意思

---

### path.resolve

```

let myPath = path.resolve(__dirname,'/img/a.jpg');
let myPath2 = path.resolve(__dirname,'./img/a.jpg');
let myPathFoo1 = path.resolve('/foo/bar', './aa.jpg');
let myPathFoo2 = path.resolve('/foo/bar', '/file/aa.jpg');

console.log(__dirname);
console.log(myPath);
console.log(myPath2);
console.log(myPath3);
console.log(myPath4);

```

- myPath 路径为: 'D:\img\o'
- myPath2 路径为: 'D:\test\img\o'
- myPathFoo1 路径为: 'D:\foo\bar\aa.jpg'
- myPathFoo2 路径为: 'D:\file\aa.jpg'

从上可以看出来,path.resolve 中的'/'指的是根路径
其他指的是相对路径
