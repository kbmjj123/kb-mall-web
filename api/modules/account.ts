import { useKbFetch } from "#imports"
import md5 from 'md5'
export default {
  normalLogin: async (phone: string, password: string) => {
    return useKbFetch({
      url: "/passport/api/mobile/login",
      body: {
        phone, password: md5(password)
      }
    })
  },
  authLogin: async () => {},
  randomCodeLogin: async () => {},
  register: async () => {},
  forgetPwd: async () => {},
  modifyPwd: async () => {},
  setPayPwd: async () => {}
}