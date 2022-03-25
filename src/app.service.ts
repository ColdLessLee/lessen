import { Injectable } from '@nestjs/common'

@Injectable()
export class AppService {
  getFirst(): string {
    return 'Hello World!'
  }
}
