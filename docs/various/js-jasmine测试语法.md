---
title: jest测试常用语法
---

toBe() 等同 ===

toNotBe() 等同 !==

toBeDefined() 等同 !== undefined

toBeUndefined() 等同 === undefined

toBeNull() 等同 === null

toBeTruthy() 等同 !!obj

toBeFalsy() 等同 !obj

toBeLessThan() 等同 <

toBeGreaterThan() 等同 >

toEqual() 相当于 ==

toNotEqual() 相当于 !=

toContain() 相当于 indexOf

toBeCloseTo() 数值比较时定义精度，先四舍五入后再比较。

toHaveBeenCalled() 检查 function 是否被调用过

toHaveBeenCalledWith() 检查传入参数是否被作为参数调用过

toMatch() 等同 new RegExp().test()

toNotMatch() 等同 !new RegExp().test()

toThrow() 检查 function 是否会抛出一个错误

跳过所有测试

xdescribe

跳过某个 describe 中的测试

xit

忽略其他测试

fdescribe

fit

```javascript
toHaveBeenCalled()  判断是否被调用过
toHaveBeenCalledWith(arguments)  判断被调用时的参数

test('map calls its argument with a non-null argument', () => {
  const mock = jest.fn();
  [1].map(x => mock(x));
  expect(mock).toBeCalledWith(expect.anything());
});  // mock函数被调用时是否带有参数，参数为除null和undefined之外的内容


expect.any()
expect.arrayContaining()



```
