const url = "https://discord.gg/jPWezxQ";
const Discord = require("discord.js");
module.exports = {
  name: "supportinvite",
  description: "sends the player a invite to our main server",
  execute: async (bot, message, args, split) => {
      message.author.send(url);
      return message.reply(" look at your dms");
  }
};
