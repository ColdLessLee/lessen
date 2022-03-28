import { Controller, Body, Post, HttpCode } from '@nestjs/common'
import { OrderService } from './order.service'
import { OrderDTO } from './order_dto/order.dto'

@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}
  @Post('state')
  @HttpCode(200)
  getOrderState(@Body() req: OrderDTO) {
    return this.orderService.getOrderState(req)
  }
}
