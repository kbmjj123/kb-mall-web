export default {
  getProductList: async (pageIndex: number) => {
    return $fetch("/search/api/v2/commodity/searchFilter", {
      method: "post",
      body: {
        pageIndex,
        pageSize: 20
      }
    })
  },
  getProductDetail(productId: string){
    
  }
}