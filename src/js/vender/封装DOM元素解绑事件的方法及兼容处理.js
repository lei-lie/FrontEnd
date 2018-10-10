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
window.onload = function () {
    utils.addEventListener(utils.$$('#btn1'),'click',function() {
        console.log('bind')
    })
    removeEventListener(utils.$$('#btn1'), 'click', function () {
        console.log('unbind')
    })
    
};