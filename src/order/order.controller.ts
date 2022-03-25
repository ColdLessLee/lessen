import { Controller, Body, Post, HttpCode } from '@nestjs/common'
import { OrderService } from './order.service'

@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}
  @Post('state')
  @HttpCode(200)
  getOrderState(@Body() req: ORDER_RIDER.Order_Form) {
    return this.orderService.getOrderState(req)
  }
}
