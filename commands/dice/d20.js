const Discord = require('discord.js');

exports.run = (client, message, args) => {
    var d20roll = (Math.floor(Math.random() * 20) + 1);
    message.channel.send({ embed: {
        color: 3447003,
        title: ":dragon_face:" + " " + "dndbot - d20",
        fields: [
          { name: ":game_die:" + " " + "Roll Result", value: "You have rolled a" + " " + "**" + d20roll + "**" + ".", inline: true }
        ]
      }
    });
    if (d20roll == 20) { message.channel.send(":white_check_mark:" + " " + "**" + "Natural 20!" + "**") }
}