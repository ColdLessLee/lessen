import { Injectable } from '@nestjs/common'
import { users } from './userlist'
import { UserDTO } from './user_dto/user.dto'

function createResponse(param: string): ResponseDATA {
  switch (param) {
    case 's':
      return { data: {}, meta: { status: 200, msg: 'login success!' } }
    case 'f':
      return {
        data: {},
        meta: { status: 402, msg: 'something wrong about your account' },
      }
  }
}
/**
 * @todo { 通过username返回登录状态 }
 */
@Injectable()
export class UserService {
  login(req: UserDTO): ResponseDATA {
    let state: ResponseDATA = createResponse('f')
    const key = req.username
    users.forEach((v) => {
      if (key == v.username) {
        state = createResponse('s')
        return
      }
    })
    return state
  }
}
