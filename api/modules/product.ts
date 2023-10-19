import { useKbFetch } from "#imports"
export default {
  // provice client and serve request because of sometimes it need loading in browse!!
  getProductList: async (pageIndex: number, server?: boolean) => {
    return useKbFetch({
      url: "/search/api/v2/commodity/searchFilter",
      body: {
        pageIndex,
        pageSize: 20
      },
      server
    })
  },
  getProductDetail: async (productId: string) => {
    return useKbFetch({
      url: "modityInfo/api/v1/mobile/detail",
      body: {
        productId
      }
    })
  }
}