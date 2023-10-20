import type { UseFetchOptions, AsyncData } from 'nuxt/app'
import { apiHost } from '~/config/host'
import type { AvailableRouterMethod } from 'nitropack'
import type { WatchSource } from "vue"
import { SearchParameters } from 'ofetch'

interface KbRequest{
  url: string | Request | Ref<string | Request> | (() => string | Request),
  body?: RequestInit['body'] | Record<string, any>,
  params?: SearchParameters,
  server?: boolean,
  lazy?: boolean,
  watch?: WatchSource[] | false
  method?: AvailableRouterMethod<string>,
  showSuccessTip?: boolean,
  errorTip?: string
}
function transform<DataT>(input: DataT): DataT{
  return input
}
// the common fetch methods
export function useKbFetch<T>(kbRequest: KbRequest){
  const { url, params, method = "post", body, server = true, lazy, watch } = kbRequest
  const defaults: UseFetchOptions<T> = {
    baseURL: apiHost,
    key: url.toString(),
    method: method,
    params: params,
    body: body,
    headers: {
      version: '42'
    },
    server: server,
    lazy: lazy,
    watch: watch,
    transform: transform,
    onRequest: ({request, options}) => {
    },
    onRequestError: ({request, response, error}) => {},
    onResponse: ({request, response, options}) => {
    },
    onResponseError: ({request, response, options}) => {}
  }
  return useFetch(url, defaults)
}
