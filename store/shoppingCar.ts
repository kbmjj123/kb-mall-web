export const useShoppingCarStore = defineStore('shoppingCarStore',
  () => {
    const carCount = ref(0)
    const carList = ref([])
    const updateCarCount = (count: number) => {
      carCount.value = count
    }
    const addToCar = (productId: string, count: number) => {}
    const removeFromCar = (productId: string, count: number) => {}
    return {
      carCount,
      updateCarCount,
      addToCar,
      removeFromCar
    }
  },
  {
    persist: {
      storage: persistedState.sessionStorage
    }
  })