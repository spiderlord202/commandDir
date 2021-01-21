const Discord = require("discord.js")

module.exports = {
  name: "help",
  description: "help",
  execute: async (bot, message, args, split) => {
    for (i = 0; i < bot.AvalibleCommands.length; i++) {
     //bot.commands.get(bot.AvalibleCommands[i])
     async function Await(){
      await message.channel.send(bot.AvalibleCommands[i])
     }
     Await()
  }
}
}
