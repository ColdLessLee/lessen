import { Module } from '@nestjs/common'
import { OrderController } from './order.controller'
import { OrderService } from './order.service'
import { DataService } from 'src/database/database.service'
import { HttpModule } from '@nestjs/axios'

@Module({
  imports: [HttpModule],
  controllers: [OrderController],
  providers: [OrderService, DataService],
})
export class OrderModule {}
