
/**
 * 阻止事件
 * @param e
 */
export function stopEvent (e) {
  if (e && e.stopPropagation) {
    e.stopPropagation()
  } else {
    window.event.cancelBubble = true
  }
  if (e && e.preventDefault) {
    e.preventDefault()
  } else {
    window.event.returnValue = false
  }
}


