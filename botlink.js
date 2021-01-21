module.exports = {
  name: "botlink",
  description: "gives the user the bot link",
  execute: async (bot, message, args, split) => {
     message.author.send("https://discord.com/api/oauth2/authorize?client_id=754461765118459966&permissions=8&scope=bot");
      return message.reply(" look at your dms");
  }
}
