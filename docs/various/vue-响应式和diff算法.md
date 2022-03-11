## 2.0虚拟DOM

### 虚拟dom的概念

& 虚拟dom图

// 打补丁

// 基于snabdom库



### 优点



- 轻量、快速：介于js操作和真实dom之间，当数据发生变化的时候，通过新旧虚拟dom的比对得到最小dom操作量，然后进行数据更新

- 跨平台：将虚拟dom更新转换为不同运行时特殊操作实现跨平台
- 兼容性：还可以加入兼容性代码增强操作的兼容性

##### 



##### ** 必要性**

// watcher粒度上的需求性

// vue1.0 2.0 30.比较，改进优化的必要性

vue 1.0中有细粒度的数据变化侦测，它是不需要虚拟DOM的，但是细粒度造成了大量开销，这对于大型项目来说是不可接受的。

因此，vue 2.0选择了中等粒度的解决方案，每一个组件一个watcher实例， 这样只有组件数据状态变化时才会通知到组件，接着再通过引入虚拟DOM去对新旧DOM进行比对并对页面进行渲染。

3.0



### 实现

#### 渲染更新组件

 core/instance/lifecycle.js 方法 mountComponent()

```js
// 定义组件更新函数 
updateComponent = () => { 
// 实际调用是在lifeCycleMixin中定义的_update和renderMixin中定义的_render 
vm._update(vm._render(), hydrating)
}
```

- _render 执行获取虚拟dom， VNode

- _update 将虚拟dom转成真createPatchFunction实dom

    **_update转换分为两步：**

    - 1）初始化直接转换成真实dom
    - 2）更新流程 使用diff算法进行新dom 旧dom  的替换

**查看以下demo的console结果**

```html
<div id="demo">
      <h1>虚拟DOM</h1>
      <p>{{foo}}</p>
</div>
<script src="../../dist/vue.js"></script>
<script>
    const app = new Vue({
        el: "#demo",
        data: { foo: "foo" },
    });
	console.log(app.$options.render);
</script>
```

渲染函数最后的生成结果

```js
// 生成一个匿名函数
// _c() 就是render(h){}中的h函数，也就是createElemet()
// _v 文本节点
// _s 格式化
ƒ anonymous(
) {
    with(this){
        return _c('div',{
            attrs:{"id":"demo"}
        },[
            _c('h1',[_v("虚拟DOM")]),_v(" "),
           	_c('p',[_v(_s(foo))])
        ])
    }
}
```

#### _render函数的定义

src/core/instance/index.js 调用了

```
//* _update 所在函数
lifecycleMixin(Vue) 
// * $nextTick _render所在的函数
renderMixin(Vue) 
```

src/core/instance/render.js 定义了renderMixin

```js
// render函数 实现了$nextTick和_render
export function renderMixin (Vue: Class<Component>) {

  Vue.prototype.$nextTick = function (fn: Function) {
    return nextTick(fn, this)
  }

  Vue.prototype._render = function (): VNode { //返回的是VNode
    const vm: Component = this
    const { render, _parentVnode } = vm.$options
    vm.$vnode = _parentVnode
    // render self
    let vnode = render.call(vm._renderProxy, vm.$createElement)
    // if the returned array contains only a single node, allow it
    if (Array.isArray(vnode) && vnode.length === 1) {
      vnode = vnode[0]
    }
    // return empty vnode in case the render function errored out
    if (!(vnode instanceof VNode)) {
      vnode = createEmptyVNode()
    }
    // set parent
    vnode.parent = _parentVnode
    return vnode
  }
}
```



src/core/instance/render.js 中的initRender()

```js
// *render中的h()函数,虚拟dom的生成函数
//编译器render函数生成
  vm._c = (a, b, c, d) => createElement(vm, a, b, c, d, false)
// 用户render函数生成
  vm.$createElement = (a, b, c, d) => createElement(vm, a, b, c, d, true)
```

src/core/vdom/create-element.js

```
 _createElement(context, tag, data, children, normalizationType)
```

_createElement()   

创建虚拟DOM

```js
/** 创建标签的时候，先判断是否是原生标签**/
// * 根据标签执行相应操作,标签为string类型时
  if (typeof tag === 'string') {
    if (config.isReservedTag(tag)) {
    //   原生标签直接创建虚拟DOM
      vnode = new VNode(
        config.parsePlatformTagName(tag), data, children,
        undefined, undefined, context
      )
    //   自定义组件
    } else if ((!data || !data.pre) && isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
      // component
      // * 根据组件的构造函数自定义组件
      vnode = createComponent(Ctor, data, context, children, tag)
    } else {
      vnode = new VNode(
        tag, data, children,
        undefined, undefined, context
      )
    }

    else {
        // direct component options / constructor
        // 传进来的标签不是字符串
        vnde = createComponent(tag, data, context, children)
    }
  }else{
    // 传进来的标签不是字符串的情况下直接创建
    vnode = createComponent(tag, data, context, children)

  }
```

#### _update函数的执行

src/core/instance/lifecycle.js lifecycleMixin()  

Vue.prototype._update 

```js
 // * 获取上次执行结果，旧的虚拟DOM
    const prevVnode = vm._vnode
    // 	上次执行结果没有，就是初始化过程
     if (!prevVnode) {
      // * 初始化时，传入的 vm.$el 是真实DOM
      vm.$el = vm.__patch__(vm.$el, vnode, hydrating, false /* removeOnly */)
    } 
    // 否则就是更新过程
    else {
      vm.$el = vm.__patch__(prevVnode, vnode)
    }
```

 src/core/vdom/patch.js patchVnode所在位置



Web/runtime/index.js 实现了patch方法 

```
Vue.prototype.__patch__ = inBrowser ? patch : noop
```

src/platforms/web/runtime/patch.js  patch 工厂函数，实现跨平台

```js
// 根据传进来的平台类型，进行不同的patch操作
// nodeOps：节点操作, modules：节点属性操作
export const patch: Function = createPatchFunction({ nodeOps, modules })
```

src/core/vdom/patch.js   定义createPatchFunction()方法



通过**同层的树节点进行比较**而非对树进行逐层搜索遍历的方式，所以时间复杂度只有O(n)，降低了时间复杂度，是一种相当高效的算法。

同层级只做三件事：增删改。

具体规则是：

- new VNode不存在就删；

- old VNode不存在就增；

- 都存在就比较类型，类型不同直接替换、类型相同执行更新；

##### patchVnode

两个VNode类型相同，就执行更新操作，包括三种类型操作：**属性更新PROPS**、**文本更新TEXT**、**子节点更新**

###### patchVnode具体规则如下：

1. 如果新旧VNode都是**静态的**，那么只需要替换elm以及componentInstance即可。

2. 新老节点**均有子节点**，则对子节点进行diﬀ操作，调用**updateChildren**

3. 如果**老节点没有子节点而新节点存在子节点**，先清空老节点DOM的文本内容，然后为当前DOM节   点加入子节点。

4. 当**新节点没有子节点而老节点有子节点**的时候，则移除该DOM节点的所有子节点。

5. 当**新老节点都无子节点**的时候，只是文本的替换。



<img src="/Users/xyingliu/Desktop/v2-f9d6f677e54a61da09aa8d1ceba1f4bc_1440w.jpg" alt="v2-f9d6f677e54a61da09aa8d1ceba1f4bc_w" style="zoom:45%;" />

###### 静态节点判断



```js
if (isTrue(oldVnode.isAsyncPlaceholder)) {
    if (isDef(vnode.asyncFactory.resolved)) {
        hydrate(oldVnode.elm, vnode, insertedVnodeQueue)
    } else {
        vnode.isAsyncPlaceholder = true
    }
    return
}
```

###### 属性更新

```js
let i
const data = vnode.data
if (isDef(data) && isDef(i = data.hook) && isDef(i = i.prepatch)) {
    i(oldVnode, vnode)
}
// oldCh:旧节点 ch：新节点
const oldCh = oldVnode.children
const ch = vnode.children
if (isDef(data) && isPatchable(vnode)) {
    for (i = 0; i < cbs.update.length; ++i) cbs.update[i](oldVnode, vnode)
    if (isDef(i = data.hook) && isDef(i = i.update)) i(oldVnode, vnode)
}
```

```js
function patchVnode (
 oldVnode,
 vnode,
 insertedVnodeQueue,
 ownerArray,
 index,
 removeOnly
) {
    if (oldVnode === vnode) {
        return
    }

    if (isDef(vnode.elm) && isDef(ownerArray)) {
        vnode = ownerArray[index] = cloneVNode(vnode)
    }

    const elm = vnode.elm = oldVnode.elm

    // 若是静态节点直接跳过，节约性能
    if (isTrue(oldVnode.isAsyncPlaceholder)) {
        if (isDef(vnode.asyncFactory.resolved)) {
            hydrate(oldVnode.elm, vnode, insertedVnodeQueue)
        } else {
            vnode.isAsyncPlaceholder = true
        }
        return
    }

    if (isTrue(vnode.isStatic) &&
        isTrue(oldVnode.isStatic) &&
        vnode.key === oldVnode.key &&
        (isTrue(vnode.isCloned) || isTrue(vnode.isOnce))
       ) {
        vnode.componentInstance = oldVnode.componentInstance
        return
    }

    
    let i
    const data = vnode.data
    if (isDef(data) && isDef(i = data.hook) && isDef(i = i.prepatch)) {
        i(oldVnode, vnode)
    }
    // 1.oldCh:旧节点 ch：新节点
    const oldCh = oldVnode.children
    const ch = vnode.children
    // 2.属性更新
    if (isDef(data) && isPatchable(vnode)) {
        for (i = 0; i < cbs.update.length; ++i) cbs.update[i](oldVnode, vnode)
        if (isDef(i = data.hook) && isDef(i = i.update)) i(oldVnode, vnode)
    }

 	// 3.新的节点里没文本
    if (isUndef(vnode.text)) {     
        // 新旧节点里都存在子节点,直接对比更新新旧子节点
        if (isDef(oldCh) && isDef(ch)) {
            if (oldCh !== ch) updateChildren(elm, oldCh, ch, insertedVnodeQueue, removeOnly)

        } 
        // 新节点存在子节点、老节点没有子节点，清空老节点中的text文本并增加新节点中的children
        else if (isDef(ch)) { 
            if (process.env.NODE_ENV !== 'production') {
                checkDuplicateKeys(ch)
            }
            if (isDef(oldVnode.text )) nodeOps.setTextContent(elm, '')
            addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue)
        } 

        // 新节点不存在子节点、老节点有子节点，删除子节点
        else if (isDef(oldCh)) {
            removeVnodes(oldCh, 0, oldCh.length - 1)
        } 
        // 新旧都有子节点，直接替换
        else if (isDef(oldVnode.text)) {
            nodeOps.setTextContent(elm, '')
        }
    } 
     // 4.有文本，内容不一样，直接替换
     else if (oldVnode.text !== vnode.text) {
        nodeOps.setTextContent(elm, vnode.text)
    }
    if (isDef(data)) {
        if (isDef(i = data.hook) && isDef(i = i.postpatch)) i(oldVnode, vnode)
    }
}

```

updateComponent

```js
   /** 假设头尾有可能相同
     * 新节点开始：nS 新节点结束nE 旧节点开始oS 旧节点结束oE
     * 
     * */   
  function updateChildren (parentElm, oldCh, newCh, insertedVnodeQueue, removeOnly) {
    // 设置首尾4个index以及相对应的节点
    let oldStartIdx = 0
    let newStartIdx = 0
    let oldEndIdx = oldCh.length - 1
    let oldStartVnode = oldCh[0]
    let oldEndVnode = oldCh[oldEndIdx]
    let newEndIdx = newCh.length - 1
    let newStartVnode = newCh[0]
    let newEndVnode = newCh[newEndIdx]
    let oldKeyToIdx, idxInOld, vnodeToMove, refElm

    // removeOnly is a special flag used only by <transition-group>
    // to ensure removed elements stay in correct relative positions
    // during leaving transitions
    const canMove = !removeOnly

    if (process.env.NODE_ENV !== 'production') {
      checkDuplicateKeys(newCh)
    }
    //开始循环：结束条件开始的index不能超过结束index
    while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
       // 静态节点直接增加或删除
      if (isUndef(oldStartVnode)) {
        oldStartVnode = oldCh[++oldStartIdx] // Vnode has been moved left
      } else if (isUndef(oldEndVnode)) {
        oldEndVnode = oldCh[--oldEndIdx]
      } 
        // 新旧节点开始位置节点相同
        else if (sameVnode(oldStartVnode, newStartVnode)) {
        patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue, newCh, newStartIdx)
        // 开始的index分别加1
        oldStartVnode = oldCh[++oldStartIdx]
        newStartVnode = newCh[++newStartIdx]
      } 
        // 新旧节点结束位置节点相同
        else if (sameVnode(oldEndVnode, newEndVnode)) {
        patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue, newCh, newEndIdx)
        // // 结束的index分别减1
        oldEndVnode = oldCh[--oldEndIdx]
        newEndVnode = newCh[--newEndIdx]
      } 
        // 旧节点开始和新节点结束相同
        else if (sameVnode(oldStartVnode, newEndVnode)) { // Vnode moved right
        patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue, newCh, newEndIdx)
        // 旧节点的开始移动到队尾
        canMove && nodeOps.insertBefore(parentElm, oldStartVnode.elm, nodeOps.nextSibling(oldEndVnode.elm))
        oldStartVnode = oldCh[++oldStartIdx]
        newEndVnode = newCh[--newEndIdx]
      } 
        // 旧节点结束和新节点开始相同
        else if (sameVnode(oldEndVnode, newStartVnode)) { // Vnode moved left
        patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue, newCh, newStartIdx)
        // 旧节点结束移动到队首
        canMove && nodeOps.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm)
        oldEndVnode = oldCh[--oldEndIdx]
        newStartVnode = newCh[++newStartIdx]
      } else {
          // 首尾没有找到相同的，从新的开头拿出一个节点，去老的数组查找
        if (isUndef(oldKeyToIdx)) oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx)
        idxInOld = isDef(newStartVnode.key)
          ? oldKeyToIdx[newStartVnode.key]
          : findIdxInOld(newStartVnode, oldCh, oldStartIdx, oldEndIdx)
        // 旧节点没有，新节点增加
         if (isUndef(idxInOld)) {
          createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx)
        }
          // 新旧都有，更新
          else {
          vnodeToMove = oldCh[idxInOld]
          if (sameVnode(vnodeToMove, newStartVnode)) {
            patchVnode(vnodeToMove, newStartVnode, insertedVnodeQueue, newCh, newStartIdx)
            oldCh[idxInOld] = undefined
            canMove && nodeOps.insertBefore(parentElm, vnodeToMove.elm, oldStartVnode.elm)
          } else {
            // same key but different element. treat as new element
            createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx)
          }
        }
        newStartVnode = newCh[++newStartIdx]
      }
    }
    if (oldStartIdx > oldEndIdx) {
    // 旧开始节点大于旧结束节点，剩余新节点新增
      refElm = isUndef(newCh[newEndIdx + 1]) ? null : newCh[newEndIdx + 1].elm
      addVnodes(parentElm, refElm, newCh, newStartIdx, newEndIdx, insertedVnodeQueue)
    } else if (newStartIdx > newEndIdx) {
    // 新开始节点大于新结束节点，剩余旧节点删除
      removeVnodes(oldCh, oldStartIdx, oldEndIdx)
    }
  }
```

整体流程

## Vue3.0的虚拟DOM

使用proxy代替deficreatePatchFunctionneReactive

1. Vue2.0中defineReactive只能对object的一个key进行监听，所以当object有很多可，或者有深度嵌套的时候，我想要对所有的key进行监听，就需要做深层遍历。

2. 在每一个key中有大量的数据去保存数据的变化，会形成很多闭包；而且为了建立数据和界面的依赖关系，会创建许多watcher和dep来保存依赖关系。所以这就造成了初始化速度慢，占用内存高。

3. 对于数组要做特殊的处理，修改数据时不能使用索引方法。动态添加或删除对象属性时，需要使用额外的API
vue3.0中使用到了proxy，proxy是懒处理，发现嵌套对象的时候才会进行递归。

  
vue2.0 
视图更新patch过程：https://segmentfault.com/a/1190000021057420
  
vue3.0  
- https://zhuanlan.zhihu.com/p/86067078
- https://www.cnblogs.com/fs0196/p/12691407.html
- https://juejin.cn/post/6844904134303301645#heading-14

