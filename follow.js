const Discord = require("discord.js");
const FollowOn = new Set();

module.exports = {
  name: "follow",
  description: "follows the annoncement for bot",
  execute: async (bot, message, args, split) => {
    if (split[1] == "on" || !split[1]){
      message.channel.send("bot notificatons will come here from our support server")
    FollowOn.add(message.member.guild.id);
    const followChannel = bot.channels.cache.get("766887345428365333");
    const filter = m => m.content;
    const collector = followChannel.createMessageCollector(filter, {});

    collector.on("collect", m => {
      if (FollowOn.has(message.member.guild.id)){
      message.channel.send(`${m.member.user.username}: ${m.content}`);
      }
    });
  } else if (split[1] == "off") {
    FollowOn.remove(message.member.guild.id);
     message.channel.send("bot notificatons will no longer come here from our support server")
  } else {
    return;
  }
  }
};
