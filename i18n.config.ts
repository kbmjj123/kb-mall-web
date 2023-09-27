import zhCN from "./locates/zh-CN"
import enUS from "./locates/en-US"
export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'zh-CN',
  messages: {
    'en-US': enUS,
    'zh-CN': zhCN,
  }
}))
