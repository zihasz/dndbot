const Discord = require('discord.js');

exports.run = (client, message, args) => {
    var d100roll = (Math.floor(Math.random() * 100) + 1);
    message.channel.send({ embed: {
        color: 3447003,
        title: ":dragon_face:" + " " + "dndbot - d100",
        fields: [
          { name: ":game_die:" + " " + "Roll Result", value: "You have rolled a" + " " + "**" + d100roll + "**" + ".", inline: true }
        ]
      }
    });
    if (d100roll == 100) { message.channel.send(":white_check_mark:" + " " + "**" + "Natural 100!" + "**") }
}