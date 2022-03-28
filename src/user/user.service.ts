import { Injectable } from '@nestjs/common'
import { users, USERS } from './userlist'
import { UserDTO } from './user_dto/user.dto'

function createResponse(
  param: string,
  vus?: USERS,
  msg = 'something wrong about your account',
): ResponseDATA {
  switch (param) {
    case 's':
      return {
        data: {
          token: `${new Date().getTime() * Math.floor(Math.random() * 10000)}`,
          username: vus.username,
          jurisdiction: vus.jurisdiction,
        },
        meta: { status: 200, msg: 'login success!' },
      }
    case 'f':
      return {
        data: {},
        meta: { status: 402, msg: msg },
      }
  }
}
/**
 * @todo { 通过username返回登录状态 }
 */
@Injectable()
export class UserService {
  login(req: UserDTO): ResponseDATA {
    console.log(req)
    let state: ResponseDATA = createResponse('f')
    const key = req.email
    users.forEach((v) => {
      if (key == v.email) {
        if (req.password == v.password) {
          state = createResponse('s', v)
          return
        } else {
          state = createResponse('f', null, 'password error')
          return
        }
      }
    })
    return state
  }
}
