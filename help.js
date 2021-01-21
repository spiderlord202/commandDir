const Discord = require("discord.js")

module.exports = {
  name: "help",
  description: "help",
  execute: async (bot, message, args, split) => {
    message.channel.send("the commands are:")
    setTimeout(function(){
      async function RunCycle(){
    for (i = 0; i < bot.AvalibleCommands.length; i++) {
     //bot.commands.get(bot.AvalibleCommands[i])
     async function Await(){
      await message.channel.send(bot.AvalibleCommands[i])
     }
     Await()
  }
      }
      RunCycle().then(() => {message.channel.send("thats all")})
    }, 500)
}
}
