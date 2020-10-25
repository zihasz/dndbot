const Discord = require('discord.js');

exports.run = (client, message, args) => {
    var d8roll = (Math.floor(Math.random() * 8) + 1);
    message.channel.send({ embed: {
        color: 3447003,
        title: ":dragon_face:" + " " + "dndbot - d8",
        fields: [
          { name: ":game_die:" + " " + "Roll Result", value: "You have rolled a" + " " + "**" + d8roll + "**" + ".", inline: true }
        ]
      }
    });
    if (d8roll == 8) { message.channel.send(":white_check_mark:" + " " + "**" + "Natural 8!" + "**") }
}