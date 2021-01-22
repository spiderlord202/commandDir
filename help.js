const Discord = require("discord.js")
const got = require("got")
module.exports = {
  name: "help",
  description: "help",
  execute: async (bot, message, args, split) => {
    if (!split[2]){
    message.channel.send('say "$help focus <command>" to get info on a command. \n the commands are:')
    setTimeout(function(){
      async function RunCycle(){
    for (i = 0; i < bot.AvalibleCommands.length; i++) {
     //bot.commands.get(bot.AvalibleCommands[i])
     async function Await(){
      await message.channel.send(bot.AvalibleCommands[i])
     }
     Await()
  }
      }
      RunCycle().then(() => {message.channel.send("thats all!")})
    }, 500)
    } else if (split[2] == "focus" && split[3]){
      if (!split[3] === null && !split[3] === undefined) {
      if (bot.AvalibleCommands.includes(split[3].slice(1))){
      const Uri = `spiderlord202/commandDir/${split[3]}.js`
      const Options = {}
      const url = bot.GetURL(Uri, Options);
        got(url)
    .then(response => {
          let res = JSON.parse(response.body)
          let Split = []
          Split[0] = `|${split[3]}`
          bot.CommandStorage(Split)
          console.log(res)
        //     if (res.includes("module.exports") && Name.endsWith("js") && true){
        //const Parse = res.replace("module.exports", 'const fileData')
        //const finishedResult = `${Parse} \n Bot.commands.set(fileData.name, fileData)`
        //console.log(finishedResult)
        //async function Exec(){
        //eval(finishedResult)
        //}
        //Exec().then(() => {
     
        //})
     // }
          message.channel.send(`This feture is unavailible. Soon This command will provide you info on ${Split.slice(1)}`)
        })
      }
      }
    }
}
}
