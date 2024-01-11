import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TelegrafModule } from 'nestjs-telegraf';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TelegramBot } from './bot/telegram.bot';

@Module({
  imports: [
    // TelegrafModule.forRootAsync({
    //   imports: [ConfigModule],
    //   useFactory: (configService: ConfigService) => ({
    //     token: configService.get<string>('6905844556:AAGI72GVFwcqQyDX0JSe5QJ3ZgRZ93EMv0Y'),
    //     launchOptions: {
    //       webhook: {
    //         domain: 'domain.tld',
    //         hookPath: '/secret-path',
    //       }
    //     }
    //   }),
    //   inject: [ConfigService],
    // })

  ],
  controllers: [AppController],
  providers: [AppService, TelegramBot],
})
export class AppModule { }
