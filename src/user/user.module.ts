import { UserContoller } from './user.controller'
import { UserService } from './user.service'
import { Module } from '@nestjs/common'

@Module({
  imports: [],
  controllers: [UserContoller],
  providers: [UserService],
})
export class UserModule {}
