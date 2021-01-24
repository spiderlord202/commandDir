
module.exports = {
  name: "help",
  description: "help",
  execute: async (bot, message, args, split) => {
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
      const Uri = `spiderlord202/commandDir/${split[2]}.js`
      const Options = {}
      const url = bot.GetURL(Uri, Options);
        got(url)
    .then(response => {
          let res = JSON.parse(response.body)
          let package = new Buffer.from(res.content, res.encoding).toString('utf-8')
          let Split = []
          Split[0] = `|${split[2]}`
          bot.CommandStorage(Split)
           if (package.includes("module.exports") && res.name.endsWith("js") && true){
        const PreParsed = package.replace("module.exports", `const fileData = { \n FileName: "${res.name}",`)
        const Parsed = PreParsed.replace(', = {', ",")
        const finishedCode = `${Parsed} \n bot.commands.set("${res.name.slice(0, -3)}", fileData)`
        console.log(finishedCode)
        async function Execute(){
        await eval(finishedCode)
        }
        Execute().then(() => {
           message.channel.send(`This feture is unavailible. Soon This command will provide you info on ${res.name.slice(0, -3)}`)
        }).catch(function(err){
        console.log(err)
        }).then(() => {console.log("finished")})
        }
        })
      } else {
        message.channel.send(`This feture is unavailible. Soon This command will provide you info on ${bot.commands.get(split[2]).FileName}`)
      }
      }
    }
}
}
