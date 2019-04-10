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

* Mixin(混合)
  Mixin模式的实现其实就是一种属性复制
```js
// 零件仓库1
function Moveable() {}
Moveable.prototype.walk = function(name = '') {
    console.log(`${name} ` + 'walked slowly');
}
Moveable.prototype.run = function() {
    console.log('ran quickly');
}
Moveable.prototype.jump = function() {
    // ...
}
// 零件仓库2
function Souled() {}
Souled.prototype.smile = function(age) {
    console.log('smiled as ' + age + ' year\'s old kid');
}
// 零件仓库3
```
```js
// mixin 主要实现拎出来看
function augment(sub, sup) {
    // 继承所有属性
    if (arguments.length === 2) {
        for(var attr in sup.prototype) {
            sub.prototype[attr] = sup.prototype[attr];
        }
    }
    // 继承部分属性
    else if(arguments.length > 2) {
        for (var i = 2; i < arguments.length; i++) {
            sub.prototype[arguments[i]] = sup.prototype[arguments[i]];
        }
    }
    else {
        // do nothing
    }
}

// 需要增强的类
function Robot(name) {
    this.name = name;
}

// 增强
augment(Robot, Moveable, 'walk', 'run');    // 从Moveable继承walk和run
augment(Robot, Souled);                     // 继承Souled的全部属性

// test
var robot = new Robot('little boy');
robot.walk(robot.name);       // walked slowly
robot.run();        // ran quickly
robot.smile(12);    // smiled as 12 year's old kid
```

3、`apply` `call` `bind`
解决继承和 `this` 指向的问题
apply只接受两个参数，`([thisObj],[,argArray])`
`call` 接受多个参数
第一个参数为`obj`，之后产生是调用的
```js
//常见案例
Math.min.call(this,2,3,1)//1
Math.min.apply(this,[2,3,1])//1
```
```js
//call解决 this 指向
window.color = 'red';
document.color = 'yellow';

var s1 = {color: 'blue' };
function changeColor(){
    console.log(this.color);
}

changeColor.call();         //red (默认传递参数)
changeColor.call(window);   //red
changeColor.call(document); //yellow
changeColor.call(this);     //red
changeColor.call(s1); 
```

模块化
我们在浏览器中使用 `ES6` 的模块化支持，在 `Node` 中使用 `commonjs` 的模块化支持。
分类:
`es6`: `import` / `export`
`commonjs`: `require` / `module.exports` / `exports`
`amd`: `require` / `defined`

`require` 与 `import` 的区别

`require`支持动态导入，`import`不支持，正在提案 (babel 下可支持)
`require` 是同步导入，`import` 属于异步导入
`require`是值拷贝，导出值变化不会影响导入值；`import`指向内存地址，导入值会随导出值而变化