// 为dom元素绑定事件
export function onEvent(dom, event, handler) {
  if (addEventListener) {
    if (dom && event && handler) {
      dom.addEventListener(event, handler, false)
    }
  } else {
    if(dom && event && handler) {
      dom.attachEvent('on' + event, handler)
    }
  }
}