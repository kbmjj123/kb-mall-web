import { useKbFetch } from "#imports"
export default {
  getProductList: async (pageIndex: number) => {
    return useKbFetch({
      url: "/search/api/v2/commodity/searchFilter",
      body: {
        pageIndex,
        pageSize: 20
      }
    })
  },
  // getProductDetail(productId: string){
  //   return request.post("modityInfo/api/v1/mobile/detail")
  // }
}