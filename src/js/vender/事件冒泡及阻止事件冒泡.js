window.onload = function() {
    for (let i = 0;i < utils.$$All('div').length; i++) {
        utils.addEventListener(utils.$$All('div')[i],'click',function(e) {
            if (e) {
                 e.stopPropagation()
            } else {
                window.event.cancelBubble = true
            }
            
            console.log(this)
        })
    }
};