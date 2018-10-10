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
        // IE8
        ele.attachEvent('on'+ type,fn);
    } else {
         // 其他浏览器(不支持上面两种方式)
         ele['on'+type] = fn;
    }
   
}
window.onload = function() {
    addEventListener(utils.$$('#btn1'), 'click', function () {
        console.log(this)
    })
     addEventListener(utils.$$('#btn2'), 'click', function () {
         console.log(utils.$$All('.btn'))
     })
};