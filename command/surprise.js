
const Discord = require('discord.js')

module.exports = {
    name: "surprise",
    description: "fun commands",
    execute: async (bot, message, args, split) => {       
            let Random = Math.floor((Math.random() * 90) + 1);
            let Main = ""
            if (!Random == 1){
            Main = new Discord.MessageEmbed()
                .setAuthor("Surprise", message.author.displayAvatarURL())
                .setDescription("[click me for suprise](https://www.youtube.com/watch?v=XM6 iTiaaw0)")
                .setColor("#ff8c00")
                .setThumbnail(`${message.author.displayAvatarURL()}`)
                .setFooter("Good Luck and Have Fun")
                .setTimestamp();
            } else {
              Main = new Discord.MessageEmbed()
               .setAuthor("You found a easter egg", message.author.displayAvatarURL)
               .setDescription("[click me](https://www.youtube.com/watch?v=cWBPjTQvNY8)")
            }
         await message.channel.send("say yes or no");
             const filter = m => m.author.id == message.author.id;
            message.channel.awaitMessages(filter, {
                    max: 1,
                    time: 10000,
                    errors: ['time']
                }).then(collected => {
                  let Recived = collected.first()
                    if (Recived.content === "yes".toLowerCase()) {
                        // does this:
                        return message.channel.send(Main);
                        // but of it is no
                    } else if (Recived.content === "no".toLowerCase()) {
                        return message.channel.send("Welp, no present for you");
                        // if the awnser is not either "yes" or "no"
                    } else {
                        // You dont get anything
                        return message.channel.send("Well nice typing,");
                    }
                })
        
        
       }
}
// message.channel.send(HelpMain);
//"[text](url)"

