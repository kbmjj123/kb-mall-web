import type { UseFetchOptions } from 'nuxt/app'
import type { AvailableRouterMethod } from 'nitropack'
import type { WatchSource } from "vue"
import { SearchParameters } from 'ofetch'

export enum HostType{
  Mall = 1,
  Product = 2
}
enum ErrorTip{
  Message = 'message',
  Modal = 'modal'
}
const TIME_OUT_FLAG: string = '-999'
interface KbRequest{
  url: string | Request | Ref<string | Request> | (() => string | Request),
  body?: RequestInit['body'] | Record<string, any>,
  params?: SearchParameters,
  server?: boolean,
  lazy?: boolean,
  watch?: WatchSource[] | false
  method?: AvailableRouterMethod<string>,
  showSuccessTip?: boolean,
  errorTip?: ErrorTip,
  hostType?: HostType
}
const headers = {
  version: '42',
  app_key: 'pc'
}
function transform<DataT>(input: DataT): DataT{
  return input
}

function showErrorDesc(errorTip: ErrorTip, message: string): void{
  if(ErrorTip.Message === errorTip){
    const { $kbmessage } = useNuxtApp()
    $kbmessage.error(message)
  }else if(ErrorTip.Modal === errorTip){

  }
}

// the common fetch methods
export function useKbFetch<T>(kbRequest: KbRequest){
  const config = useRuntimeConfig()
  const { url, params, method = "post", body, server = true, lazy, watch, hostType = HostType.Mall, errorTip = ErrorTip.Message, showSuccessTip = true } = kbRequest
  const targetBaseUrl: string = HostType.Mall === hostType ? config.public.apiHost : config.public.productHost
  const defaults: UseFetchOptions<T> = {
    baseURL: targetBaseUrl,
    key: url.toString(),
    method: method,
    params: params,
    body: body,
    headers: headers,
    server: server,
    lazy: lazy,
    watch: watch,
    transform: transform,
    onRequest: ({request, options}) => {
      const accountStore = useAccountStore()
      options.headers = options.headers || {}
      if(accountStore.sessionId){
        (options.headers as Record<string, string>).sessionId = accountStore.sessionId
      }
    },
    onRequestError: ({request, response, error}) => {},
    onResponse: ({request, response, options}) => {
      if(response._data.result === TIME_OUT_FLAG){
        // login time out, --> redicect to login page!
        navigateTo('/login')
      }else if(response._data.result !== '000'){
        // business error, --> response an error view!!
        showErrorDesc(errorTip, response._data.message)
      }
    },
    onResponseError: ({request, response, options}) => {
    }
  }
  return useFetch(url, defaults)
}
