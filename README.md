# FrontEnd
前端学习笔记
# DOM元素事件绑定及兼容处理
## 概述 
使用原生javascript实现为任意的DOM元素事件绑定与解绑的封装及兼容处理
## 事件绑定及兼容处理
### 绑定事件的方法
`DOMObject.addEventListener(eventType,callBack,false)`;
`DOMObject.attachEvent(eventType,callBack)`;
`DOMObject['on'+eventType]=function() {}`;
### 兼容性
`addEventListener`适用于chrome,firefox;
`attachEvent`适用于IE8,IE9;
`DOMObject['on'+eventType]=function() {}`适用于不适合前两种绑定方式的情况;
###　实现
```
/**
 * 
 * @param {Obj} ele 需要添加事件的DOM元素 
 * @param {String} type 绑定的事件类型（事件名） 
 * @param {Object} fn 回调函数 
 */
function addEventListener(ele,type,fn) {
    // chrome，Firefox
    if (ele.addEventListener) {
        ele.addEventListener(type , fn , false);
    }
    else if (ele.attachEvent) {
        // IE8,IE9
        ele.attachEvent('on'+ type,fn);
    } else {
         // 其他浏览器(不支持上面两种方式)
         ele['on'+type] = fn;
    }
   
}
```
## 事件解绑及兼容处理
事件的绑定与解绑是对应的，使用了什么方式绑定，就用对应的方式解绑事件；
### 解绑方法
`DOMObject.removeEventListener(type,callBack,false)`;
`DOMObject.detachEvent(type,callBack)`;
`DOMObject['on'+eventType]=null`

### 实现
```
/**
 * @param {Object} ele 要进行解绑操作的元素
 * @param {String} type 事件的类型
 * @param {Object} fn 回调函数
 */
function removeEventListener(ele, type, fn) {
    if (ele.removeEventListener) {
        ele.removeEventListener(type,fn,false);
    }
    else if(ele.detachEvent) {
        ele.detachEvent(type,fn);
    }
    else {
        ele['on' + type] = null
    }
}
```
# 事件冒泡及阻止事件冒泡
## 事件冒泡
子元素与父元素绑定了同一个事件，出发子元素的绑定的事件时，父元素的事件也会被触发发；
## 阻止事件冒泡
e是回调函数中的事件对象
```
if (e) {
  // chrome,ff
  e.stopPropagation();
} else {
  // IE
  window.event.cancelBubble = true;
}
```