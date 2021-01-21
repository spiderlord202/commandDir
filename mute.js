module.exports = {
  name: "mute",
  description: "mutes the player",
  execute: async (bot, message, args, split) => {

    if (!split[1])
      return message.channel.send("please specify on who you wanna mute");
    if (message.member.hasPermission("ADMINISTRATOR")) {
      let ReturnMentionArgs = message.mentions.members.first();
      if (
        message.member.guild.roles.cache.find(role =>
          role.name.toLowerCase().includes("muted")
        )
      ) {
        var MAINROLE = message.member.guild.roles.cache.find(role =>
          role.name.toLowerCase().includes("muted")
        );
        ReturnMentionArgs.roles.add(MAINROLE);
        message.channel.send("worked. i think. look at your roles");
      } else {
        message.reply(" nice try");
      }
    } else {
      message.reply(" welp")
    }
  }
};
