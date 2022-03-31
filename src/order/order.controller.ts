import {
  Controller,
  Body,
  Post,
  UseInterceptors,
  UploadedFile,
  Header,
  Headers,
  ForbiddenException,
} from '@nestjs/common'
import { OrderService } from './order.service'
import { OrderDTO } from './order_dto/order.dto'
import { Express } from 'express'
import { FileInterceptor } from '@nestjs/platform-express'

@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}
  //getState
  @Post('state')
  getOrderState(@Body() req: OrderDTO['trance']) {
    return this.orderService.getOrderState(req)
  }
  //getlist
  @Post('lists')
  getOrderList(@Body() req: OrderDTO['order_list']) {
    return this.orderService.getOrderList(req)
  }
  //search
  @Post('search')
  searchOrder(@Body() req: OrderDTO['order_list']) {
    return this.orderService.searchOrder(req)
  }
  //upload
  @Post('uploadContract')
  @Header('Content-type', 'multipart/form-data')
  @UseInterceptors(FileInterceptor('image'))
  uploadContract(
    @Headers('content-type') reqheader: string,
    @UploadedFile() reqFlie: Express.Multer.File,
    @Body() req: OrderDTO['contract'],
  ) {
    if (!reqheader.startsWith('multipart/form-data;') || reqFlie == void 0) {
      throw new ForbiddenException()
    } else {
      return this.orderService.uploadContract(req)
    }
  }
  //get country
  @Post('getcountry')
  getCountry() {
    return this.orderService.getCountry()
  }
}
