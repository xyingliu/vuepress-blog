## flex 布局

目前最新版本的 flex 布局的属性对各大 web 浏览器的支持已经很全面，但是由于移动端浏览器版本多，内核复杂，所以移动端还需要老版本的 flex 布局支持以解决兼容性问题，不同浏览器内核加前缀-moz-，-webkit-，-o-

### 1. 老版本 flex（display: box）

#### 1. 容器的布局方向 box-orient

此属性是用来确定主轴是哪个，不可继承
值 | 作用
--- | ---
horizontal | 以水平方向作为主轴
vertical | 以垂直方向作为主轴
inline-axis | 以水平方向作为主轴
block-axis | 以垂直方向作为主轴

#### 2. 容器的排列方向 box-direction

此属性用来确定主轴方向，默认值 normal，不可继承
值 | 作用
--- | ---
normal | 主轴的左方向（左边或者上边）
reverse | 主轴的右方向（右边或者下边）

#### 3. 富裕空间的管理（主轴）box-pack

此属性指定主轴方向富裕空间的位置，默认值是 start
值 | 作用
--- | ---
start | 富裕空间在主轴右边方向
end | 富裕空间在主轴左边方向
center | 富裕空间在主轴两边方向
justify | 富裕空间在项目两侧

#### 4. 富裕空间的管理（侧轴）box-align

此属性指定侧轴方向富裕空间的位置，默认值为 start
值 | 作用
--- | ---
start | 富裕空间在侧轴左边方向
end | 富裕空间在侧轴右边方向
center | 富裕空间在侧轴中间

### 2. 新版本 flex（display: flex）

#### 1.容器的布局和排列方向 flex-direction

此属性是指定内部元素是如何排列的，默认值为 row，不可继承
值 | 作用
--- | ---
row | 以水平向右为主轴，项目在左边排列
row-reverse | 以水平向左为主轴，项目在右边排列
column | 以垂直向下为主轴，项目在上边排列
column-reverse | 以垂直向上为主轴，项目在下边排列

#### 2. 富裕空间的管理（主轴）justify-content

此属性指定主轴方向富裕空间的位置，默认值为 flex-start，不可继承
值 | 作用
--- | ---
flex-start|主轴的正方向
flex-end|主轴的反方向
center|富裕空间在两边
space-between|富裕空间在项目之间
space-around(box 没有的)|富裕空间在项目两边

#### 3. 富裕空间管理（侧轴）align-items

此属性指定侧轴方向富裕空间的位置，默认值为 flex-start，不可继承
值|作用
--- | ---
flex-start|侧轴的正方向
flex-end|侧轴的反方向
center|富裕空间在两边
baseline(box 没有的)|所有元素向基线对齐
stretch(box 没有的)|等高布局

#### 4. 新版本 flex 新增属性

##### 1.flex-wrap

此属性指定 flex 元素是单行显示还是多行显示，默认值 nowrap，不可继承
值 | 作用
--- | ---
wrap | flex 元素会被打断到多行
nowrap | flex 被摆放到一行，可能会导致溢出
wrap-reverse | wrap 的反向操作

##### 2. flex-flow

此属性是 flex-direction 和 flex-wrap 的简写

##### 3. order

指定特定 flex 元素的排列顺序

##### 4. align-self

指定特定 flex 元素侧轴方向的位置

##### 5. flex-shrink

指定了 flex 元素的收缩规则,值为`<number>`

##### 6. flex-grow

指定 flex 元素所占总宽/高度的份额，值为`<number>`

##### 7. flex-basis

指定 flex 元素基础宽/高度

##### 8. -webkit-box-flex

使 flex 元素充满整个主轴宽/高，值大于 0，一般为 1
