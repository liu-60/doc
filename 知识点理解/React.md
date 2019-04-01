1、函数式组件/类组件
函数组件不能拥有自己的属性（类组件也是为了解决这一问题），可以理解为静态组件
函数式直接执行方法
但是如果是一个类组件，那么`React`就需要使用`new`来实例化它，然后在实例上调用`render`方法

2、中间件
[参考文章1](https://www.cnblogs.com/cherryvenus/p/9685082.html)
[参考文章2](http://www.cnblogs.com/wshiqtb/p/7909770.html)
[参考文章3](https://www.colabug.com/4032568.html)

3、HOC 是什么？
高阶组件（HOC），有点中间件的感觉，高阶组件就是一个没有副作用的纯函数。

4、`React`的事件代理

```js
const Test = ({ list, handleClick }) => ({
    list.map((item, index) => (
        <span onClick={handleClick} key={index}>{index}</span>
    ))
})
```
jsx上写的事件并没有绑定到每个元素，而是统一绑定到`document`上（ps:减少内存消化，在组件挂载销毁时统一订阅移除），而且也不是用的原生冒泡。
合成事件的目的：
* 抹平了浏览器之间的兼容问题
* 对于原生浏览器事件来说，浏览器会给监听器创建一个事件对象，合成事件来说，有一个事件池专门来管理它们的创建和销毁

diff算法 和 虚拟dom
渲染引擎 / JS引擎 之间的通信 所以要减少dom的渲染，列表虽然有10000个但是展示100（就只用这100个来替代着10000个），或者是回调（懒加载）
减少通信js就要能够模拟dom，通过对比区别来局部渲染，DOM首先是个二叉树