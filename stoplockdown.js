const Discord = require("discord.js");
//752007040267714581
module.exports = {
  name: "stoplockdown",
  description: "stoplockdown",
  execute: async (bot, message, args, split) => {
    if (
      !message.member.hasPermission("ADMINISTRATOR") &&
      !message.member.roles.cache.some(r =>
        ["mod", "moderator"].includes(r.name.toLowerCase())
      )
    )
      return message.channel.send("you cant do this");
    message.guild.channels.cache.forEach(channel => {
      channel.updateOverwrite(
        message.member.guild.roles.cache.find(
          role => role.name == "LockdownPartisipent"
        ),
        {
          SEND_MESSAGES: true
        }
      );
    });
    message.channel.send("stopped lockdown!");
  }
};
