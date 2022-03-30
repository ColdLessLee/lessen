import { Injectable } from '@nestjs/common'
import { UserDTO } from './user_dto/user.dto'
import { DataService } from '../database/database.service'

type responser = Record<string, string>
/**
 * @todo { 通过username返回登录状态 }
 */

@Injectable()
export class UserService {
  constructor(private readonly dataService: DataService) {}

  async login(req: UserDTO): Promise<responser> {
    if (req.username == void 0) return
    const userQuary = await this.dataService.users.findUnique({
      where: {
        username: req.username,
      },
    })
    if (!userQuary)
      return createUsersResponse(404, {
        msg: 'can not find user,dose it exist?',
      })
    if (req.password != userQuary.password)
      return createUsersResponse(403, {
        msg: 'password error',
      })
    const token_stamp = createToken(userQuary.token)
    //todo：=>动态token的更新还未实现！
    return createUsersResponse(200, {
      username: userQuary.username,
      token: token_stamp,
      jurisdiction: userQuary.jurisdiction,
    })
  }
  async register(req: UserDTO): Promise<responser> {
    console.log(req)
    const reUserQuary = await this.dataService.users.findUnique({
      where: {
        username: req.username,
      },
    })
    if (!reUserQuary) {
      await this.dataService.users.create({
        data: {
          username: req.username,
          token: req.username.toUpperCase(),
          password: req.password,
          jurisdiction: 'root',
          secret_key: req.email.toUpperCase(),
        },
      })

      return createUsersResponse(200, { msg: 'register success!' })
    } else {
      return createUsersResponse(403, {
        msg: 'server forbidden, because the username that your input is exist,try to change your username in an other one.',
      })
    }
  }
}

// dependency
//const HS_Code = [200, 401, 403, 404]
function createUsersResponse(
  stateCode: number,
  ending: Record<string, string>,
): responser {
  const response = {}
  if (stateCode == void 0) return

  const me = { status: stateCode }

  Object.defineProperties(response, {
    data: {
      value: ending,
      writable: false,
      enumerable: true,
    },
    meta: {
      value: me,
      enumerable: true,
      writable: false,
    },
  })
  return response
}
function createToken(took: string): string {
  const ct = `${took}${new Date().getTime() + Math.floor(Math.random() * 6144)}`
  const et = ct
  return et
}
