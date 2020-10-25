const Discord = require('discord.js');

exports.run = (client, message, args) => {
    message.channel.send({ embed: {
        color: 3447003,
        title: ":dragon_face:" + " " + "dndbot - help",
        fields: [
          { name: "Command", value: "-d4\n-d6\n-d8\n-d10\n-d12\n-d100\n-d20\n-help\n-statroll", inline: true },
          { name: "Description", value: "Rolls a 4 sided dice.\nRolls a 6 sided dice.\nRolls a 8 sided dice.\nRolls a 10 sided dice.\nRolls a 12 sided dice.\nRolls a 100 sided dice.\nRolls a 20 sided dice.\nDisplays this page.\nRolls for character stats.", inline: true }
        ]
      }
    });
}