1、事件流
```js
document.querySelector('.div3').addEventListener('click', function() {
    //
}, false) //第二个参数决定是冒泡还是捕获
```
`false` ：从内到外（冒泡）
`true` ：从外到里（捕获）
事件委托就是利用冒泡，给父元素绑定事件，减少事件绑定次数，也可为未知元素绑定事件

2、做判断
```js
typeof() // 一元运算 返回类型
instanceof() // func 返回布尔 Array
```
能在实例的原型对象链中找到该构造函数的`prototype`属性所指向的原型对象，就返回`true`
`typeof` 除 `null` 特殊外

3、代码复用
* extend
```js
jQuery.extend({
    min: function(a,b){ return a < b ? a : b},
    max: function(a,b){ return a > b ? a : b},
})
var settings = { validate: false, limit: 5, name: "foo" }; 
var options = { validate: true, name: "bar" }; 
jQuery.extend(settings, options);
// { validate: true, limit: 5, name: "bar" }
// 类似 Object.assign
```

* mixin(混合)
```js

```