import { Injectable, Logger } from '@nestjs/common'
import { Socket } from 'socket.io'

const chatRoom = new Map()

@Injectable()
export class ChatService {
  connections<T>(data: T, user: Socket): Record<string, string | unknown> {
    console.log(user.id)
    return {
      event: 'onlined',
      data: {
        msg: 'connect success!',
        yoho: data,
      },
    }
  }
}
