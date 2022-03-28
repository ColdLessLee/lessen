import { Post, Controller, Body, HttpCode } from '@nestjs/common'
import { UserService } from './user.service'
import { UserDTO } from './user_dto/user.dto'

@Controller('user')
export class UserContoller {
  constructor(private readonly userService: UserService) {}
  @Post('login')
  @HttpCode(200)
  login(@Body() req: UserDTO) {
    return this.userService.login(req)
  }
}
