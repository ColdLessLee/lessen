import { Post, Controller, Body } from '@nestjs/common'
import { UserService } from './user.service'
import { UserDTO } from './user_dto/user.dto'

@Controller('user')
export class UserContoller {
  constructor(private readonly userService: UserService) {}
  @Post('login')
  login(@Body() req: UserDTO) {
    return this.userService.login(req)
  }
  @Post('udata')
  testDB(@Body() req: any) {
    return this.userService.userac(req)
  }
}
