
interface ModalProps{
  title?: string,
  content?: string,
  okTxt?: string,
  onOk?: Function,
  cancelTxt?: string,
  onCancel?: Function,
  singleTxt?: string
}
const modal = {
  show(props: ModalProps){

  },
  hide(props: ModalProps){

  }
}

export default defineNuxtPlugin(nuxtapp => {
  return {
    provide: {
      modal
    }
  }
})