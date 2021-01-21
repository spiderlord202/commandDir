const Discord = require('discord.js')

module.exports = {
  name: "poll",
  decription: "poll",
  execute: async (bot, message, args, split) => {
    const Embed = new Discord.MessageEmbed()
        .setColor("0x00BFFF")
        .setTitle("Error")
        .setDescription("There is no poll");

      if (!args[0]) {
       return message.channel.send(Embed)
      }

      let msgArgs = args.slice(0).join(" ");

      message.channel
        .send("📊" + "" + msgArgs + "")
        .then(messageReaction => {
          messageReaction.react("✅");
          messageReaction.react("❔");
          messageReaction.react("❌");
          message.delete({ timeout: 100 }).catch(console.error); 
        });
  }
}
