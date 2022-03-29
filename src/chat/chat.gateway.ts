import {
  WebSocketGateway,
  SubscribeMessage,
  MessageBody,
  ConnectedSocket,
} from '@nestjs/websockets'
import { Socket } from 'socket.io'
import { ChatService } from './chat.service'

@WebSocketGateway(8080, {
  cors: {
    origin: '*',
  },
})
export class ChatGateway {
  constructor(private readonly chatService: ChatService) {}
  @SubscribeMessage('onlined')
  userConnections(
    @MessageBody() data: Record<string, string>,
    @ConnectedSocket() clinet: Socket,
  ) {
    return this.chatService.connections(data, clinet)
  }
}
