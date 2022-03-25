import { Injectable, Logger } from '@nestjs/common';
import { users } from './userlist';
@Injectable()
export class UserService {
  login(req: USER_FORM.loginForm): string {
    Logger.log(req);

    users.forEach((v) => {
      Logger.log(v);
    });

    return 'login success!';
  }
}
