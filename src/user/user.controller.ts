import { Post, Controller } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserContoller {
  constructor(private readonly userService: UserService) {}
  @Post('login')
  login(req: USER_FORM.loginForm): string {
    return this.userService.login(req);
  }
}
