1、冒泡的值交换的简单写法
```js
function bubbleSort1 (array) {
    let i, j, len = array.length
    for (i = 0; i < len; i++) {
      for (j = i; j < len; j++) {
        if (array[i] > array[j]) {
          [array[i], array[j]] = [array[j], array[i]] //值交换
        }
      }
    }
	return array;
  }
```