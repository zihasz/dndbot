const Discord = require('discord.js');

exports.run = (client, message, args) => {
    var d4roll = (Math.floor(Math.random() * 4) + 1);
    message.channel.send({ embed: {
        color: 3447003,
        title: ":dragon_face:" + " " + "dndbot - d4",
        fields: [
          { name: ":game_die:" + " " + "Roll Result", value: "You have rolled a" + " " + "**" + d4roll + "**" + ".", inline: true }
        ]
      }
    });
    if (d4roll == 4) { message.channel.send(":white_check_mark:" + " " + "**" + "Natural 4!" + "**") }
}