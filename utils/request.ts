import { ofetch } from 'ofetch'
import type { FetchContext, FetchRequest, FetchOptions } from 'ofetch'
import { apiHost } from '~/config/host'
const TIME_OUT:number = 30000
const RETRY_NUM:number = 3
const onNormalRequest = async (context: FetchContext) => {
  console.info(context)
  const { request, options } = context;
  options.headers = options.headers || {}
  options.headers["version"] = 42
  console.info(request, options.headers)
}
const onNormalResponse = async (context: FetchContext) => {
  const { request, response, options } = context
  console.info(request, response, options)
}

interface KbRequestOption{
  appendHeader?: boolean,
  showErrorTip?: boolean,
  method?: string
}

const request = ofetch.create({
  baseURL: apiHost,
  timeout: TIME_OUT,
  retry: RETRY_NUM,
  headers: {},
  onRequest: onNormalRequest,
  onResponse: onNormalResponse
})

export default request