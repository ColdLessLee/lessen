import {
  Controller,
  Body,
  Post,
  UseInterceptors,
  UploadedFile,
  Header,
} from '@nestjs/common'
import { OrderService } from './order.service'
import { OrderDTO } from './order_dto/order.dto'
import { Express } from 'express'
import { FileInterceptor } from '@nestjs/platform-express'
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
  @Post('uploadContract')
  @Header('Content-type', 'multipart/form-data')
  @UseInterceptors(FileInterceptor('image'))
  uploadContract(
    @UploadedFile() reqFlie: Express.Multer.File,
    @Body() req: OrderDTO['contract'],
  ) {
    console.log(req)
    console.log(reqFlie)
    if (reqFlie == void 0) return { msg: false }
    return { data: req, msg: true }
  }
}
