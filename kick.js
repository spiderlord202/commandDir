const Discord = require("discord.js");

module.exports = {
  name: "kick",
  description: "kick a user",
  execute: async (bot, message, args, split) => {
    if (!message.member.hasPermission("ADMINISTRATOR"))
      return message.channel.send("You cannot do this");
    const user =
      message.mentions.users.first() || message.mentions.users.get(args[1]);
    let banner = message.author;
    let bReason = args.join(" ").slice(22);
    if (user) {
      const member = message.guild.member(user);
      if (member) {
        member
          .kick({
            reason: bReason
          })
          .then(() => {
            message.reply(`Successfully kicked ${user.tag}`);
            const bnn = new Discord.MessageEmbed()
              .setTitle(`${banner} has kicked ${user.displayName}`)
              .addField("Reason: ", bReason)
              .setColor("RED")
              .setFooter(user.displayAvatarURL())
              .setTimestamp();
            message.channel.send(bnn);
          })
          .catch(err => {
            message.reply("I was unable to send info on who banned who");
            console.error(err);
          });
      } else {
        message.reply("That user isn't in this guild!");
      }
    } else {
      message.reply("You didn't mention the user to ban!");
    }
  }
};
