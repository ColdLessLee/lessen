import { Injectable } from '@nestjs/common'
import { Logger } from '@nestjs/common'

function createOrderResponse(): ORDER_RIDER.OrderData {
  return Array.from({ length: 10 }, (_, index) =>
    Object({
      timestamp: `${new Date().getTime()}`,
      city: 'Guangzhou',
      country: 'China',
      status: Math.floor(Math.random() * 5),
      trance: `${
        new Date().getTime() + index * Math.round(Math.random() * 10000)
      }`,
      info: `这是${index}号描述`,
    }),
  )
}

@Injectable()
export class OrderService {
  getOrderState(req: ORDER_RIDER.Order_Form): ORDER_RIDER.OrderData {
    Logger.log(req)
    return createOrderResponse()
  }
}
