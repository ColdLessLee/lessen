import { Injectable, Logger } from '@nestjs/common'
import { CreateChatDto } from './dto/create-chat.dto'
import { UpdateChatDto } from './dto/update-chat.dto'

@Injectable()
export class ChatService {
  create(createChatDto: CreateChatDto) {
    return createChatDto
  }

  findAll() {
    return `This action returns all chat`
  }

  findOne(id: number) {
    return `This action returns a #${id} chat`
  }

  update(id: number, updateChatDto: UpdateChatDto) {
    Logger.log(id)
    return updateChatDto
  }

  remove(id: number) {
    return `This action removes a #${id} chat`
  }
}
