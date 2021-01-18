
const Discord = require("discord.js");

module.exports = {
  name: "category",
  description: "Makes a category",
  execute: async (bot, message, args, split) => {

    if (!split[1]) 
      return message.channel.send("Please specify on the catagory name");
    if (!message.member.hasPermission("ADMINISTRATOR"))
      return message.channel.send("you can not do this");
    message.member.guild.channels.create(split[1], {
      type: "category",
      permissionOverwrites: [
        {
          id: message.author.id
          //deny: [],
        }
      ]
    });
    message.channel.send("Created Catagory!");
  }
};
