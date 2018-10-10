var utils = {
    /**
     * @param {String} selector 选择器
     * @return {Object} 返回查找到的元素
     */
    $$: function(selector) {
        return document.querySelector(selector);
    },
    /**
     * @param {String} selector 选择器
     * @return {Array} 返回查找到的元素的集合
     */
    $$All:function(selector) {
        return document.querySelectorAll(selector)
    },
    /**
     * 
     * @param {Object} ele 需要添加事件的DOM元素 
     * @param {String} type 绑定的事件类型（事件名） 
     * @param {Object} fn 回调函数 
     */
    addEventListener: function(ele, type, fn) {
        // chrome，Firefox
        if (ele.addEventListener) {
            ele.addEventListener(type, fn, false);
        } else if (ele.attachEvent) {
            // IE8
            ele.attachEvent('on' + type, fn);
        } else {
            // 其他浏览器(不支持上面两种方式)
            ele['on' + type] = fn;
        }

    },
    /**
     * @param {Object} ele 要进行解绑操作的元素
     * @param {String} type 事件的类型
     * @param {Object} fn 回调函数
     */
    removeEventListener: function(ele, type, fn) {
        if (ele.removeEventListener) {
            ele.removeEventListener(type, fn, false);
        } else if (ele.detachEvent) {
            ele.detachEvent(type, fn);
        } else {
            ele['on' + type] = null
        }
    }
}