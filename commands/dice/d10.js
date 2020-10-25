const Discord = require('discord.js');

exports.run = (client, message, args) => {
    var d10roll = (Math.floor(Math.random() * 10) + 1);
    message.channel.send({ embed: {
        color: 3447003,
        title: ":dragon_face:" + " " + "dndbot - d10",
        fields: [
          { name: ":game_die:" + " " + "Roll Result", value: "You have rolled a" + " " + "**" + d10roll + "**" + ".", inline: true }
        ]
      }
    });
    if (d10roll == 10) { message.channel.send(":white_check_mark:" + " " + "**" + "Natural 10!" + "**") }
}