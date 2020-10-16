const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");

/**
 * @author ollie
 * @since 16/10/2020
 */

 //TODO: Natural 20 message for when a 20 is rolled!
 //TODO: Fix percentile dice (d100).

 client.on("ready", () => {
    console.log(`Bot has been logged in as ${client.user.tag}!`);
    console.log('Ready to roll some dice!')
    client.user.setActivity("-help", {type: 'WATCHING'});
 });

client.on("message", async message => {
  if (message.author.bot) { return; }
  if (!message.content.startsWith(config.prefix)) { return; }
  
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  
  //d4 dice
  if (command === "d4") {
    var d4roll = (Math.floor(Math.random() * 4) + 1);
    message.channel.send({ embed: {
        color: 3447003,
        title: ":dragon_face:" + " " + "dndbot - d4",
        fields: [
          { name: ":game_die:" + " " + "Roll Result", value: "You have rolled a" + " " + "**" + d4roll + "**" + ".", inline: true }
        ]
      }
    });
  }

  //d6 dice
  if (command === "d6") {
    var d6roll = (Math.floor(Math.random() * 6) + 1);
    message.channel.send({ embed: {
        color: 3447003,
        title: ":dragon_face:" + " " + "dndbot - d6",
        fields: [
          { name: ":game_die:" + " " + "Roll Result", value: "You have rolled a" + " " + "**" + d6roll + "**" + ".", inline: true }
        ]
      }
    });
  }
 
  //d8 dice
  if (command === "d8") {
    var d8roll = (Math.floor(Math.random() * 8) + 1);
    message.channel.send({ embed: {
        color: 3447003,
        title: ":dragon_face:" + " " + "dndbot - d8",
        fields: [
          { name: ":game_die:" + " " + "Roll Result", value: "You have rolled a" + " " + "**" + d8roll + "**" + ".", inline: true }
        ]
      }
    });
  }

  //d10 dice
  if (command === "d10") {
    var d10roll = (Math.floor(Math.random() * 10) + 1);
    message.channel.send({ embed: {
        color: 3447003,
        title: ":dragon_face:" + " " + "dndbot - d10",
        fields: [
          { name: ":game_die:" + " " + "Roll Result", value: "You have rolled a" + " " + "**" + d10roll + "**" + ".", inline: true }
        ]
      }
    });
  }

  //d12 dice
  if (command === "d12") {
    var d12roll = (Math.floor(Math.random() * 12) + 1);
    message.channel.send({ embed: {
        color: 3447003,
        title: ":dragon_face:" + " " + "dndbot - d12",
        fields: [
          { name: ":game_die:" + " " + "Roll Result", value: "You have rolled a" + " " + "**" + d12roll + "**" + ".", inline: true }
        ]
      }
    });
  }

  //d100 dice
  if (command === "d100") {
    var d100roll = (Math.floor(Math.random() * 100) + 1);
    message.channel.send({ embed: {
        color: 3447003,
        title: ":dragon_face:" + " " + "dndbot - d100",
        fields: [
          { name: ":game_die:" + " " + "Roll Result", value: "You have rolled a" + " " + "**" + d100roll + "**" + ".", inline: true }
        ]
      }
    });
  }

  //d20 dice
  if (command === "d20") {
    var d20roll = (Math.floor(Math.random() * 20) + 1);
    message.channel.send({ embed: {
        color: 3447003,
        title: ":dragon_face:" + " " + "dndbot - d20",
        fields: [
          { name: ":game_die:" + " " + "Roll Result", value: "You have rolled a" + " " + "**" + d20roll + "**" + ".", inline: true }
        ]
      }
    });
  }

  //help command
  if (command === "help") {
    message.channel.send({ embed: {
        color: 3447003,
        title: ":dragon_face:" + " " + "dndbot - help",
        fields: [
          { name: "Command", value: "-d4\n-d6\n-d8\n-d10\n-d12\n-d100\n-d20\n-help", inline: true },
          { name: "Description", value: "Rolls a 4 sided dice\nRolls a 6 sided dice\nRolls a 8 sided dice\nRolls a 10 sided dice\nRolls a 12 sided dice\nRolls a 100 sided dice\nRolls a 20 sided dice\nDisplays this page", inline: true }
        ]
      }
    });
  }
});

client.login(config.token);