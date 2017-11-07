let isScrollBottom = () => {
    let [
        scrollTop,
        winHeight,
        bodyHeight
    ] = [
        (document.body.scrollTop),
        (window.outerHeight),
        (document.body.clientHeight)
    ]

    if (bodyHeight-scrollTop <= winHeight+50) {
        return true
    } else {
        return false
    }
}

let scrollEventFn = ''

export default {
    inserted (el, binding) {
        scrollEventFn = (e)=>{
            if (isScrollBottom()){
                binding.value()
            }
        }
        document.addEventListener('scroll', scrollEventFn, false)
    },
    unbind () {//vue中不能销毁我们手动添加的事件，但是指令里销毁的回调unbind
        document.removeEventListener('scroll', scrollEventFn)
    }
}
//自定义里面有销毁指令的函数