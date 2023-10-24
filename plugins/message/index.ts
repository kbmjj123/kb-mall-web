import { createVNode, render } from 'vue'
import KbMessage from '~/components/global/KbMessage.vue'
import type { MessageType } from '~/components/global/KbMessage.vue'
import { MSG_ID } from '~/components/global/KbMessage.vue'
interface MessageProps {
  tips?: string,
  type?: MessageType,
  visible?: boolean,
  duration?: number,
}

const Ele = (props: MessageProps) => {
  if(process.client){
    const id = MSG_ID
    const div = document.querySelector(`#${id}`)
    if(!props.visible){
      return
    }
    if(div){
      document.body.removeChild(div)
      return
    }
    const container = document.createElement('div')
    container.id = id
    const vm = createVNode(KbMessage, { id, ...props })
    render(vm, container)
    document.body.appendChild(container)
  }
}

export default {
  success(tips: string){
    Ele({ type: 'success', visible: true, tips })
  },
  warning(tips: string){
    Ele({ type: 'warning', visible: true, tips })
  },
  error(tips: string){
    Ele({ type: 'error', visible: true, tips })
  }
}