declare namespace ORDER_RIDER {
  type OrderData = {
    timestamp: string
    arriveCity: string
    orderState: number
  }[]
  export interface Order_Form {
    orderId: string
  }
}
