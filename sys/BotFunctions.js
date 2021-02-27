Bot.on("channelUpdate", (oldChannel, newChannel) => {
if (oldChannel && newChannel){
  if (oldChannel.topic){
     if (newChannel.topic){
     if (newChannel.topic.toLowerCase().includes("spider")){
       if (!oldChannel.topic.toLowerCase().includes("spider")){
       newChannel.send("it looks like you found one of my easter eggs")
     } 
     }
     }
   } else if (newChannel.topic) {
     if (newChannel.topic.toLowerCase().includes("spider")){
         newChannel.send("it looks like you found one of my easter eggs")
     }
   } else {
     return;
   }
 }
})
Bot.on("guildCreate", async MainGuild => {
  if (!MainGuild) return;
  let countdownvar = 1000;
  let General = MainGuild.channels.cache.find(ch =>
    ch.name.toLowerCase().includes("general")
  );
  if (!General) return;
  General.send(
    "Hello, thank you for inviting my not to you server be sure to check out out support server at https://discord.gg/jPWezxQ"
  );
  setTimeout(() => {
    setTimeout(() => {
      General.send(
        "You can communicate easyer without using the prefix in these channels:"
      );
      setTimeout(() => {
        async function Load() {
          for (let [, channel] of MainGuild.channels.cache) {
            if (
              channel.topic.includes("BOT") &&
              channel.topic != "bote"
            ) {
              await General.send(channel.name);
            }
          }
        }
        Load().then(() => {
          General.send(
            "Enjoy!"
          );
        });
      }, 1000);
    }, 1000);
  }, 1000);
  if (
    !MainGuild.roles.cache.find(role => role.name.toLowerCase == "ze big brain")
  ) {
    var MAINROLE = await MainGuild.roles.create({
      data: {
        name: "ze big brain",
        color: "BLUE"
      },
      reason: "for bot"
    });
    MAINROLE.setHoist(true);
    MainGuild.me.roles.add(MAINROLE);
  } else {
    var MAINROLE = MainGuild.roles.cache.find(
      role => role.name.toLowerCase() == "ze big brain"
    );
    MAINROLE.setHoist(true);
    await MainGuild.me.roles.add(MAINROLE);
  }
});

const applyText = (canvas, text) => {
  const ctx = canvas.getContext("2d");

  // Declare a base size of the font
  let fontSize = 70;

  do {
    // Assign the font to the context and decrement it so it can be measured again
    ctx.font = `${(fontSize -= 10)}px sans-serif`;
    // Compare pixel width of the text to the canvas minus the approximate avatar size
  } while (ctx.measureText(text).width > canvas.width - 300);

  // Return the result to use in the actual canvas
  return ctx.font;
};

function MainMember(member) {
  //dont mind this also
  if (member.guild.name.toLowerCase() === "big brain corner" &&  member.guild.roles.cache.find(
      role => role.name === "Other people")) {
    var role = member.guild.roles.cache.find(
      role => role.name === "Other people"
    );
    member.roles.add(role);
  }
}
//guildMemberRemove
Bot.on("guildMemberAdd", async member => {
  if (member.guild.id == "751737087832752148") return;

  const channel = member.guild.channels.cache.find(ch =>
    ch.name.includes("welcome")
  ); // finds channel
  MainMember(member);

  //if no channel return with nothing
  if (!channel) return;

  //get the canvas and it's content
  const canvas = Canvas.createCanvas(700, 250);
  const ctx = canvas.getContext("2d");

  const background = await Canvas.loadImage(
    "https://cdn.glitch.com/1c968027-4df1-4bc4-ba09-6789bec6eb4b%2Fcanvas%20djs.jpg?v=1598698684839"
  );
  ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

  ctx.strokeStyle = "#74037b";
  ctx.strokeRect(5, 5, canvas.width, canvas.height);

  // Slightly smaller text placed above the member's display name
  ctx.font = "28px sans-serif";
  ctx.fillStyle = "#ffffff";
  ctx.fillText(
    "Welcome to the server,",
    canvas.width / 2.5,
    canvas.height / 3.5
  );

  // Add an exclamation point here and below
  ctx.font = applyText(canvas, `${member.displayName}!`);
  ctx.fillStyle = "#ffffff";
  ctx.fillText(
    `${member.displayName}!`,
    canvas.width / 2.5,
    canvas.height / 1.8
  );

  //setting the avatar aspect
  ctx.beginPath();
  ctx.arc(125, 125, 100, 0, Math.PI * 2, true);
  ctx.closePath();
  ctx.clip();

  //add the avatar to the canvas
  const avatar = await Canvas.loadImage(
    member.user.displayAvatarURL({ format: "jpg" })
  );
  ctx.drawImage(avatar, 25, 25, 200, 200);

  const attachment = new Discord.MessageAttachment(
    canvas.toBuffer(),
    "welcome-image.png"
  );

  //send the attachment
  channel.send(attachment);
});
Bot.on("guildMemberRemove", async member => {
  // if (member.guild.id == "751737087832752148") return;
  const channel = member.guild.channels.cache.find(ch =>
    ch.name.includes("welcome")
  ); // finds channel

  //if no channel return with nothing
  if (!channel) return;

  //get the canvas and it's content
  const canvas = Canvas.createCanvas(700, 250);
  const ctx = canvas.getContext("2d");

  const background = await Canvas.loadImage(
    "https://cdn.glitch.com/1c968027-4df1-4bc4-ba09-6789bec6eb4b%2Fcanvas%20djs.jpg?v=1598698684839"
  );
  ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

  ctx.strokeStyle = "#74037b";
  ctx.strokeRect(5, 5, canvas.width, canvas.height);

  // Slightly smaller text placed above the member's display name
  ctx.font = "28px sans-serif";
  ctx.fillStyle = "#ffffff";
  ctx.fillText("Bye :(", canvas.width / 2.5, canvas.height / 3.5);

  // Add an exclamation point here and below
  ctx.font = applyText(canvas, `${member.displayName}!`);
  ctx.fillStyle = "#ffffff";
  ctx.fillText(
    `${member.displayName}!`,
    canvas.width / 2.5,
    canvas.height / 1.8
  );

  //setting the avatar aspect
  ctx.beginPath();
  ctx.arc(125, 125, 100, 0, Math.PI * 2, true);
  ctx.closePath();
  ctx.clip();

  //add the avatar to the canvas
  const avatar = await Canvas.loadImage(
    member.user.displayAvatarURL({ format: "jpg" })
  );
  ctx.drawImage(avatar, 25, 25, 200, 200);

  const attachment = new Discord.MessageAttachment(
    canvas.toBuffer(),
    "leave-image.png"
  );

  //send the attachment
  channel.send(attachment);
});

Bot.on("guildMemberUpdate", (oldMember, newMember) => {
  if (oldMember.premiumSinceTimestamp < newMember.premiumSinceTimestamp) {
    let MemberWhoBoosted = newMember;
    //  if (newMember.guild.id == "751737087832752148") return;
    async function Load() {
      //
      const channel = newMember.guild.channels.cache.find(ch =>
        ch.name.includes("welcome")
      ); // finds channel

      //if no channel return with nothing
      if (!channel) return;

      //get the canvas and it's content
      const canvas = Canvas.createCanvas(700, 250);
      const ctx = canvas.getContext("2d");

      const background = await Canvas.loadImage(
        "https://cdn.glitch.com/1c968027-4df1-4bc4-ba09-6789bec6eb4b%2Fcanvas%20djs.jpg?v=1598698684839"
      );
      ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

      ctx.strokeStyle = "#74037b";
      ctx.strokeRect(5, 5, canvas.width, canvas.height);

      // Slightly smaller text placed above the member's display name
      ctx.font = "28px sans-serif";
      ctx.fillStyle = "#ffffff";
      ctx.fillText(
        "This Person Has boosted the server :)",
        canvas.width / 3.5,
        canvas.height / 3.6
      );

      // Add an exclamation point here and below
      ctx.font = applyText(canvas, `${newMember.displayName}!`);
      ctx.fillStyle = "#ffffff";
      ctx.fillText(
        `${newMember.displayName}!`,
        canvas.width / 2.5,
        canvas.height / 1.8
      );

      //setting the avatar aspect
      ctx.beginPath();
      ctx.arc(125, 125, 100, 0, Math.PI * 2, true);
      ctx.closePath();
      ctx.clip();

      //add the avatar to the canvas
      const avatar = await Canvas.loadImage(
        newMember.user.displayAvatarURL({ format: "jpg" })
      );
      ctx.drawImage(avatar, 25, 25, 200, 200);

      const attachment = new Discord.MessageAttachment(
        canvas.toBuffer(),
        "boosted-image.png"
      );

      //send the attachment
      channel.send(attachment);
    }
    Load();
  }
});
