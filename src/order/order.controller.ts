import { Controller, Body, Post } from '@nestjs/common'
import { OrderService } from './order.service'
import { OrderDTO } from './order_dto/order.dto'

@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}
  @Post('state')
  getOrderState(@Body() req: OrderDTO['trance']) {
    return this.orderService.getOrderState(req)
  }
  @Post('lists')
  getOrderList(@Body() req: OrderDTO['order_list']) {
    return this.orderService.getOrderList(req)
  }
  @Post('search')
  searchOrder(@Body() req: OrderDTO['order_list']) {
    return this.orderService.searchOrder(req)
  }
}
