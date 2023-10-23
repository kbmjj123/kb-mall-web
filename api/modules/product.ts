import { useKbFetch } from "#imports"
type ProductInfo = {
  productId: string,
  productCode: string,
  productName: string,
  thumPicture: string,
  title: string,
  graphicDetail: string,
  price: number,
  stock: number,
  videoPath: string,
  shopId: string,
  shopName: string,
  shopImage: string,
  subTitle: string | null,
  bigPicture: [string]
}
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
    return useKbFetch<ProductInfo>({
      url: "modityInfo/api/v1/mobile/detail",
      body: {
        productId
      }
    })
  },
  collectProduct: async (productId: string) => {

  },
  addToShoppingCar: async (productId: string, count: number) => {}
}