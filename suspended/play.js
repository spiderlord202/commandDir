/*
const { readdirSync } = require("fs");
const join = require("path");

module.exports = {
  name: "play",
  description: "",
  options: "<musci url>",
  type: "Music",
  cooldown: 60,
  execute: async (bot, message, args, split) => {

    bot.player.play(message.member.voice.channel, split[1]);
  //  bot.systemCmds.get("setup").execute(queue, null, filters);
    //
    /*
    let song = await bot.player.play(message.member.voice.channel, split[1], {
            duration: 'long' // This is optional
        }).catch(function(err){
      console.log(err)
    })
        song = song.song;
        message.channel.send(`Started playing ${song.name}.`);
        */
/*
  }
};
*/
