import { Post, Controller, Body, HttpCode } from '@nestjs/common'
import { UserService } from './user.service'

@Controller('user')
export class UserContoller {
  constructor(private readonly userService: UserService) {}
  @Post('login')
  @HttpCode(200)
  login(@Body() req: USER_FORM.loginForm) {
    return this.userService.login(req)
  }
}
