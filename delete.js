const Discord = require("discord.js");

module.exports = {
  name: "delete",
  description: "bulk delete messages",
  execute: async (bot, message, args, split) => {
    if (!message.member.hasPermission("MANAGE_MESSAGES"))
      return message.channel.send("You cannot do this");
    if (!args[0])
      if (!args[0]) {
        // if no args 1 (the number) it will send:
        return message.reply("How many messages do you want to delete?");
      }
    setTimeout(() => {
      message.reply(" succsefuly deleated " + args[0] + " messages");
    }, 1000).then(
      message.channel.bulkDelete(args[0]).catch(err => {
        // if the message us over 14 day old then it will do this :
        message.channel.send(
          "You can't bulk delete messages that are over 14 days old"
        );
      })
    ); // deletes the number of messages unless it is over 14 days old
  }
};
