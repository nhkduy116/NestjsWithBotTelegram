import { Markup, Telegraf } from "telegraf";

export class TelegramBot {
  private bot: Telegraf;

  constructor() {
    this.bot = new Telegraf(process.env.BOT_TOKEN);
    this.initializeBot();
  }

  private initializeBot(): void {
    // this.bot.start((ctx) => ctx.reply('Welcome!')); // Xử lý sự kiện khi bot được bật

    // this.bot.on('text', (ctx) => {
    //   // Xử lý các tin nhắn văn bản
    //   const messageText = ctx.message.text;
    //   ctx.reply(`Bạn đã nói: ${messageText}`);
    // });

    // this.bot.use((ctx, next) => {
    //   // Loại bỏ khoảng trắng khi dấu '/' kết hợp với lệnh
    //   if (ctx.message?.text?.startsWith('/')) {
    //     ctx.message.chat/ = ctx.message.text.replace(' ', '');
    //   }
    //   next();
    // });

    this.bot.command('thontinsanpham', (ctx) => {
      // Xử lý lựa chọn /thontinsanpham
      ctx.reply('Thông tin sản phẩm: Ô tô, xe máy, ...');
    });

    this.bot.command('goimuagiaodich', (ctx) => {
      // Xử lý lựa chọn /goimuagiaodich
      const packageKeyboard = Markup.keyboard([
        ['1 tháng', '3 tháng'],
        ['6 tháng', 'Hủy bỏ'],
      ]).resize();

      ctx.reply('Chọn gói mua:', packageKeyboard);
    });

    this.bot.command('quanlycanhan', (ctx) => {
      // Xử lý lựa chọn /quanlycanhan
      ctx.reply('Thông tin cá nhân: Tên người dùng, email, ...');
    });

    this.bot.on('text', (ctx) => {
      const messageText = ctx.message.text;

      // Xử lý tin nhắn bắt đầu bằng '/'
      if (messageText.startsWith('/')) {
        this.handleCommands(ctx, messageText);
      } else {
        // Xử lý các tin nhắn văn bản thông thường
        const imageUrl = 'https://i.ytimg.com/vi/4xDzrJKXOOY/hqdefault_live.jpg';
        ctx.replyWithPhoto({ url: imageUrl }, { caption: 'Lofi ...' });
      }
    });
  }
  private handleCommands(ctx, messageText: string): void {
    switch (messageText) {
      case '/start':
        ctx.reply('Chào mừng bạn!');
        break;
      default:
        ctx.reply('Lệnh không hợp lệ');
    }
  }

  public startBot(): void {
    this.bot.launch().then(() => console.log('Telegram bot started'));
  }
}