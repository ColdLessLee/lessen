import { Injectable } from '@nestjs/common'
import { Logger } from '@nestjs/common'
import { OrderDTO } from './order_dto/order.dto'

// const oreq = {
//   trance:'test'
// }
type OrderData = {
  timestamp: string
  arriveCity: string
  orderState: number
}[]

function createOrderResponse(): OrderData {
  return Array.from({ length: 10 }, (_, index) =>
    Object({
      timestamp: `${new Date().getTime()}`,
      city: 'Guangzhou',
      country: 'China',
      status: Math.floor(Math.random() * 5),
      info: `这是第${index}条描述`,
    }),
  )
}

@Injectable()
export class OrderService {
  getOrderState(req: OrderDTO): Record<string, unknown> {
    Logger.log(req)
    return {
      id: req.id,
      name: req.name,
      trance_info: createOrderResponse(),
    }
  }
}
