import { useKbFetch } from "#imports"
export default {
  normalLogin: async (account: string, password: string) => {
    return useKbFetch({
      url: "",
      body: {
        account, password
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