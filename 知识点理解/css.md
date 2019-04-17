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

2、清除浮动 _([为什么清除浮动](https://www.cnblogs.com/zhongweizhu/p/6003537.html))_
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

[元素水平垂直居中](http://yanhaijing.com/vertical-center/)

品字布局
  ```css
display: inline-block;
font-size: 0;/* 有间距影响 */
-------------
float:left;
  ```

3、`position`跟`display`、`overflow`、`float`这些特性相互叠加后会怎么样？

display属性规定元素应该生成的框的类型；`position`属性规定元素的定位类型；`float`属性是一种布局方式，定义元素在哪个方向浮动。
类似于优先级机制：`position：absolute/fixed`优先级最高，有他们在时，`float`不起作用，`display`值需要调整。`float` 或者`absolute`定位的元素，只能是块元素或表格。

4、css 预处理（less，sass，Postcss）有哪些优点
变量、函数、嵌套、插入文件`@import`、继承`@extend`、写判断
[整理好的文章](https://www.jianshu.com/p/580b000319dc)