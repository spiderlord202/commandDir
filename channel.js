const Discord = require("discord.js");

module.exports = {
  name: "channel",
  description: "creates a channel",
  execute: async (bot, message, args, split) => {

    if (!message.member.hasPermission("ADMINISTRATOR"))
      return message.channel.send("you can not do this");
    if (!split[1])
      return message.channel.send(
        "Please Specify on what you want the channel name to be"
      );
    if (!split[2])
      return message.channel.send(
        "Please Specify on what name of the category you want it to be parented to"
      );
    if (
      !message.guild.channels.cache.find(category => category.name === split[2])
    )
      return message.channel.send("that channel dont exist");
    message.member.guild.channels
      .create(split[1], { type: "channel" })
      .then(channel => {
        channel.setParent(
          message.guild.channels.cache.find(
            category => category.name === split[2]
          ).id
        );
      });
  }
};
//https://discord.com/oauth2/authorize?client_id=754461765118459966&scope=bot
