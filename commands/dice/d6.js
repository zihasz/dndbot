const Discord = require('discord.js');

exports.run = (client, message, args) => {
    var d6roll = (Math.floor(Math.random() * 6) + 1);
    message.channel.send({ embed: {
        color: 3447003,
        title: ":dragon_face:" + " " + "dndbot - d6",
        fields: [
          { name: ":game_die:" + " " + "Roll Result", value: "You have rolled a" + " " + "**" + d6roll + "**" + ".", inline: true }
        ]
      }
    });
    if (d6roll == 6) { message.channel.send(":white_check_mark:" + " " + "**" + "Natural 6!" + "**") }
}