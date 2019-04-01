```js
document.querySelector('.div3').addEventListener('click', function() {
    
}, false) //第二个参数决定是冒泡还是捕获
```
`false` ：从内到外（冒泡）
`true` ：从外到里（捕获）
事件委托就是利用冒泡，给父元素绑定事件，减少事件绑定次数，也可为未知元素绑定事件