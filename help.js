
module.exports = {
  name: "help",
  description: "help",
  execute: async (bot, message, args, split) => {
    const got = require("got")
    const Discord = require("discord.js")
    if (!split[1]){
    message.channel.send('say "$help focus <command>" to get info on a command. \n the commands are:')
    setTimeout(function(){
      async function RunCycle(){
    for (let i = 0; i < bot.AvalibleCommands.length; i++) {
     //bot.commands.get(bot.AvalibleCommands[i])
     async function Await(){
      await message.channel.send(bot.AvalibleCommands[i])
     }
     Await()
  }
      }
      RunCycle().then(() => {message.channel.send("thats all!")})
    }, 500)
    } else if (split[1] === "focus" && split[2]){
      if (bot.AvalibleCommands.includes(split[2])){
       if (!bot.commands.has(split[2])) {
         console.log("c")
      const Uri = `spiderlord202/commandDir/${split[2]}.js`
      const Options = {}
      const url = bot.GetURL(Uri, Options);
        got(url)
    .then(response => {
          console.log("v")
          let res = JSON.parse(response.body)
          let pkg = new Buffer.from(res.content, res.encoding).toString('utf-8')
          let Split = []
          Split[0] = `|${split[2]}`
          bot.CommandStorage(Split)
           if (pkg.includes("module.exports") && res.name.endsWith("js") && true){
        const Parse = pkg.replace("module.exports", `const fileData = { \n FileName: "${res.name}"`)
        const finishedResult = `${Parse} \n bot.commands.set("${res.name.slice(0, -3)}", fileData)`
        async function Exec(){
        eval(finishedResult)
        }
        Exec().then(() => {
           message.channel.send(`This feture is unavailible. Soon This command will provide you info on ${res.name.slice(0, -3)}`)
        })
        }
        })
      } else {
        console.log("b")
        message.channel.send(`This feture is unavailible. Soon This command will provide you info on ${bot.commands.get(split[0].slice(1)).FileName}`)
      }
      }
    }
}
}
