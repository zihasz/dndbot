const Discord = require('discord.js');

exports.run = (client, message, args) => {
    var d12roll = (Math.floor(Math.random() * 12) + 1);
    message.channel.send({ embed: {
        color: 3447003,
        title: ":dragon_face:" + " " + "dndbot - d12",
        fields: [
          { name: ":game_die:" + " " + "Roll Result", value: "You have rolled a" + " " + "**" + d12roll + "**" + ".", inline: true }
        ]
      }
    });
    if (d12roll == 12) { message.channel.send(":white_check_mark:" + " " + "**" + "Natural 12!" + "**") }
}