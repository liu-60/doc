1、伪元素和伪类
伪类
```css
:active //被激活
:focus //选中
:hover //鼠标位于上方
:link //未被访问的链接
:first-child //第一个元素
```
伪元素
```css
:first-letter //本文首字母
:first-line //本文首行
:before //插入前
:after //插入后
```

2、清除浮动
* 额外标签 设置`clear:both` (无意义标签)
* 父元素使用 `overflow:hidden`（无法展示要溢出元素）
* `after`伪元素清除浮动 
  ```css
    .clearfix:after{/*伪元素是行内元素 正常浏览器清除浮动方法*/
        content: "";
        display: block;
        height: 0;
        clear:both;
        visibility: hidden;
    }
    // IE6/7 不支持伪元素
  ```

  clear：both：本质就是闭合浮动， 就是让父盒子闭合出口和入口，不让子盒子出来