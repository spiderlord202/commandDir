const Discord = require("discord.js");
const UsedCommmandRecently = new Set();
const AlwaysAdmin = new Set();
//UsedCommmandRecently.clear()

module.exports = {
  name: "lockdown",
  description: "locks the server",
  execute: async (bot, message, args, split) => {
    function RunLockdownManagment() {
      async function Add() {
        var MAINROLE = message.member.guild.roles.cache.find(role =>
          role.name.includes("Admin")
        );
        if (MAINROLE){
      UsedCommmandRecently.add(message.author.id);
        message.member.roles.add(MAINROLE);
        setTimeout(() => {
          message.member.roles.remove(
            MAINROLE
          );
          setTimeout(() => {
            UsedCommmandRecently.delete(message.author.id);
          }, 300000);
        }, 60000);
         message.reply(
          " has been upgraded to a offical BIG BRAIN BOT admin so he/she/other will have the Administator perms for one miniut. (LOCKDOWN!)"
        );
        } else {
           message.guild.roles
              .create({
                data: {
                  name: "Admin",
                  color: "BURPLE",
                  permissions: ["ADMINISTRATOR"]
                }
              }).then(Add())
        }
      }

      async function ManageRole() {
        async function ChannelSort() {
          for (let [, ChannelToCycleThrough] of message.member.guild.channels
            .cache) {
            if (
              !ChannelToCycleThrough.permissionsFor(
                message.member.guild.roles.cache.find(
                  role => role.name == "LockdownPartisipent"
                )
              ).has("SEND_MESSAGES")
            ) {
              ChannelToCycleThrough.updateOverwrite(
                message.member.guild.roles.cache.find(
                  role => role.name == "LockdownPartisipent"
                ),
                {
                  SEND_MESSAGES: false
                }
              );
            }
          }
        }
        async function RoleSort() {
          async function AddRolesForSort() {
            for (let [, MemberToCycleThrough] of message.member.guild.members
              .cache) {
              MemberToCycleThrough.roles.add(
                message.member.guild.roles.cache.find(
                  role => role.name == "LockdownPartisipent"
                )
              );
            }
          }
          AddRolesForSort();
        }
        // AddRolesForSort()
        if (
          message.member.guild.roles.cache.find(
            role => role.name == "LockdownPartisipent"
          )
        ) {
          ChannelSort().then(() => {
            RoleSort().then(() => {
              setTimeout(() => {
              for (let [, MemberToCycleThroughToRemove] of message.member.guild
                .members.cache) {
                MemberToCycleThroughToRemove.roles.remove(
                  message.member.guild.roles.cache.find(
                    role => role.name == "LockdownPartisipent"
                  )
                );
              }
              }, 10000);
            });
          });
        } else {
          message.guild.roles
            .create({
              data: {
                name: "LockdownPartisipent",
                color: "BURPLE",
                permissions: []
              }
            })
            .then(RoleSort());
        }
        //
      }
      async function IfRunThrough() {
        if (
          !message.member.hasPermission("ADMINISTRATOR") &&
          !UsedCommmandRecently.has(message.author.id)
        ) {
          Add();
        } else if (
          message.member.roles.cache.some(r =>
            ["mod", "moderator","New Mod"].includes(r.name.toLowerCase())
          )
        ) {
          if (
            !message.member.guild.roles.cache.find(role =>
              role.name.includes("Admin")
            )
          ) {
            Add();
          } else {
            message.guild.roles
              .create({
                data: {
                  name: "Admin",
                  color: "BURPLE",
                  permissions: ["ADMINISTRATOR", "SEND_MESSAGES"]
                }
              })
              .then(Add());
          }
        } else if (message.member.hasPermission("ADMINISTRATOR") && !UsedCommmandRecently.has(message.author.id)) {
          ManageRole();
        } else {
          message.channel.send("Please wait for the 60 second cooldown to pass")
        }
      }
      IfRunThrough().then(() => {
        ManageRole();
      });
    }
    RunLockdownManagment()
  }
};
