require('dotenv').config();
const TelegramBot = require('node-telegram-bot-api');

const bot = new TelegramBot(process.env.BOT_TOKEN, { polling: true });

bot.on('message', async (msg) => {
  const chatId = msg.chat.id;
  
  if (chatId.toString() === process.env.SOURCE_CHANNEL) {
    // ফরওয়ার্ড করা
    bot.forwardMessage(process.env.TARGET_CHANNEL, chatId, msg.message_id);
  }
});
