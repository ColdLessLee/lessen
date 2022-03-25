import { Injectable } from '@nestjs/common'

@Injectable()
export class AppService {
  getFirst(): string {
    return `<h1 style='color:red;'>#Hello You,well come lee's back-workspace</h1>`
  }
}
