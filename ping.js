const Discord = require("discord.js");
  const str = ""
module.exports = {
  name: "ping",
  description: "ping",
  execute: async (bot, message, args, split) => {
    const latency = message.createdTimestamp - message.createdTimestamp;
    const choices = [
      "Is this really my ping?",
      "Is this okay? I can't look!",
      "I hope it isn't bad!"
    ];
    const response = choices[Math.floor(Math.random() * choices.length)];

    message.channel.send("Pinging...").then(msg => {
     // msg.edit(
       // `${response} - Bot Latency: \`${latency}ms\`, API Latency: \`
    })
}
};
