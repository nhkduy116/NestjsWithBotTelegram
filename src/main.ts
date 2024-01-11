import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { TelegramBot } from './bot/telegram.bot';
import * as dotenv from 'dotenv';

dotenv.config();
declare const module: any;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const bot = app.get(TelegramBot);
  bot.startBot();
  await app.listen(3000);

  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}
bootstrap();
