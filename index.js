const discord = require("discord.js");
const bot = new discord.Client();
bot.on("ready", async () => {
  console.log(`[BOT] Бот успешно запущен!`)
})
bot.login("ТОКЕН")