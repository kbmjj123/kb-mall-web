// methods which provide hover reactive variable
export default function(node: any, hoverFlag: Ref<Boolean>){
  function mouseEnter(){
    hoverFlag.value = true
  }
  function mouseLeave(){
    hoverFlag.value = false
  }
  useEventListener(node, 'mouseenter', mouseEnter)
  useEventListener(node, 'mouseleave', mouseLeave)
  onUnmounted(() => {
    removeEventListener('mouseenter', mouseEnter)
    removeEventListener('mouseleave', mouseLeave)
  })
  return hoverFlag
}