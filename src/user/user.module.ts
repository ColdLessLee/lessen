import { UserContoller } from './user.controller'
import { UserService } from './user.service'
import { Module } from '@nestjs/common'
import { DataService } from '../database/database.service'

@Module({
  imports: [],
  controllers: [UserContoller],
  providers: [UserService, DataService],
})
export class UserModule {}
