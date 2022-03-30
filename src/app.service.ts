import { Injectable } from '@nestjs/common'

@Injectable()
export class AppService {
  getFirst(): string {
    return `<h1 style='color:skyblue;font-size:32px'>#Hello You,well come maghunt back-workspace</h1>
              <h1 style='color:#FCFC;font-size:42px'>MAGAHATA.COM/h1>`
  }
}
