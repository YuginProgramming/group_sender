const TelegramBot = require('node-telegram-bot-api');

// Укажите свой токен, полученный у BotFather
const token = '6382547749:AAEJHcWuTu_y3EUS_yAK4xa6Dwt8FF95saM';

// ID групп, куда будут пересылаться сообщения
const group1ChatId = -1002102662359;
const group2ChatId = -1002055395865;

// Создаем бота
const bot = new TelegramBot(token, { polling: true });

// Обработчик сообщений
bot.on('message', (msg) => {
    const messageText = msg.text;

    // Пересылаем сообщение в первую группу
    bot.sendMessage(group1ChatId, messageText);

    // Пересылаем сообщение во вторую группу
    bot.sendMessage(group2ChatId, messageText);
});