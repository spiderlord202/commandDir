
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
         console.log("c")
      const Uri = `spiderlord202/commandDir/${split[2]}.js`
      const Options = {}
      const url = bot.GetURL(Uri, Options);
        got(url)
    .then(response => {
          console.log("v")
          let res = JSON.parse(response.body)
          console.log("p")
          let pkg = new Buffer.from(res.content, res.encoding).toString('utf-8')
          console.log("k")
          let Split = []
          Split[0] = `|${split[2]}`
          bot.CommandStorage(Split)
           if (pkg.includes("module.exports") && res.name.endsWith("js") && true){
             console.log("z")
        const Parse = pkg.replace("module.exports", `fileData = { \n FileName: "${res.name}"`)
        const finishedResult = `${Parse} \n bot.commands.set("${res.name.slice(0, -3)}", fileData)`
        async function Execute(){
          console.log("pre-execute")
        await eval(finishedResult)
          console.log("post-execute")
        }
             console.log("yy")
        Execute().then(() => {
              console.log("y")
           message.channel.send(`This feture is unavailible. Soon This command will provide you info on ${res.name.slice(0, -3)}`)
        }).catch(function(err){
        console.log(err)
        }).then(() => {console.log("finished")})
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
