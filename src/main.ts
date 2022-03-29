import { Logger } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { DataService } from './database/database.service'
async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  const dataService = app.get(DataService)
  app.enableCors()
  await app.listen(3000)
  await dataService.enableShutdownHooks(app)
  Logger.log('on http://192.168.13.98:3000')
}
bootstrap()
