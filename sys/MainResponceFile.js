const Pcall = new Set();
//for stuff limmited to certain servers and the chatbot aspect
const Responces = [
  "e",
  "bruh",
  "why",
  "suck",
  "why u do this",
  "f",
  "how about no u",
  "no u",
  "hi",
  "how old are you?",
  "i was not talking to you",
  "is this chatbot?"
];
const Responce = [
  "E",
  "bruh",
  "why",
  "suck marios a p####",
  "life is not fair so suffer",
  "R.I.P",
  "https://tenor.com/view/card-no-u-wave-uno-card-gif-15455638",
  "https://tenor.com/view/no-u-keanu-reeves-got-it-gif-14479787",
  "hi welcome to chillys",
  "i am ** years old",
  ";(",
  "Yes. I have been enabled to respond to messages without my prefix by my bot developer or this channel has BOT (in all caps) in the topic. I have a limmited number of reponces and I DO NOT learn from what you say."
];


async function CycleResponces(message){
for (const i in Responces) {
      if (message.content.toLowerCase() == Responces[i]) {
      message.channel.send(Responce[i]);
      Pcall.add(message.author.id);
    }
  }
}
//
//Pcall.clear()
//
/*
  const Ids = ["796911022370848768"]
  const condition = (ids) => ids == message.author.id;
if (message.author.bot && (Ids.some(condition)) == false) return; // do nothing if the person who 
*/
module.exports = {
  name: "ReponceFile",
  description:
    "Sends a reponce to a non command message said in a certain channel or does things limmited to certain servers",
  execute: async message => {
    async function LoopBackArray() {
      const Ids = ["726982488530092134"]
       const condition = (ids) => ids == message.channel.id;
      if (message.channel.topic){
      if (message.channel.topic.includes("BOT")) {
        CycleResponces(message)
      } else if (Ids.some(condition)) {
       CycleResponces(message)
      }
      } else if (Ids.some(condition)) {
        CycleResponces(message)
      }
    }
    LoopBackArray().then(() => {
      if (Pcall.has(message.author.id)) {
        return Pcall.delete(message.author.id);
      } else {
        Pcall.delete(message.author.id);
        if (message.channel.id == "720519073712046081") {
          // RollCall()
          return;
        } else if (message.channel.id == "796910752182566912") {
          //Here is where the smp code will go
          return;
        } else {
          return;
        }
        setTimeout(() => {
          return;
        }, 100);
      }
    });
  }
};
