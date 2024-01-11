import { Markup, Telegraf } from "telegraf";

export class TelegramBot {
  private bot: Telegraf;

  constructor() {
    this.bot = new Telegraf(process.env.BOT_TOKEN);
    this.initializeBot();
  }

  private initializeBot(): void {
    this.bot.start((ctx) => ctx.reply('Welcome!'));

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
        ctx.reply(`Bạn đã nói: ${messageText}`);
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