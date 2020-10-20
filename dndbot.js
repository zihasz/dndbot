const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");

/**
 * @author ollie
 * @since 16/10/2020
 */

 client.on("ready", () => {
    console.log(`Bot has been logged in as ${client.user.tag}!`);
    console.log('Ready to roll some dice!')
    client.user.setActivity(config.prefix + "help", { type: 'WATCHING' });
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
    if (d4roll == 4) { message.channel.send(":white_check_mark:" + " " + "**" + "Natural 4!" + "**") }
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
    if (d6roll == 6) { message.channel.send(":white_check_mark:" + " " + "**" + "Natural 6!" + "**") }
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
    if (d8roll == 8) { message.channel.send(":white_check_mark:" + " " + "**" + "Natural 8!" + "**") }
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
    if (d10roll == 10) { message.channel.send(":white_check_mark:" + " " + "**" + "Natural 10!" + "**") }
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
    if (d12roll == 12) { message.channel.send(":white_check_mark:" + " " + "**" + "Natural 12!" + "**") }
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
    if (d100roll == 100) { message.channel.send(":white_check_mark:" + " " + "**" + "Natural 100!" + "**") }
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
    if (d20roll == 20) { message.channel.send(":white_check_mark:" + " " + "**" + "Natural 20!" + "**") }
  }

  if (command === "statroll") {
    //stat 1 rolling
    var onestat1 = (Math.floor(Math.random() * 6) + 1);
    var onestat2 = (Math.floor(Math.random() * 6) + 1);
    var onestat3 = (Math.floor(Math.random() * 6) + 1);
    var onestat4 = (Math.floor(Math.random() * 6) + 1);
    //get the lowest number from the values rolled
    const onemin = Math.min(onestat1, onestat2, onestat3, onestat4)
    //final value
    var onetotal = onestat1 + onestat2 + onestat3 + onestat4 - onemin

    //stat 2 rolling
    var twostat1 = (Math.floor(Math.random() * 6) + 1);
    var twostat2 = (Math.floor(Math.random() * 6) + 1);
    var twostat3 = (Math.floor(Math.random() * 6) + 1);
    var twostat4 = (Math.floor(Math.random() * 6) + 1);
    //get the lowest number from the values rolled
    const twomin = Math.min(twostat1, twostat2, twostat3, twostat4)
    //final value
    var twototal = twostat1 + twostat2 + twostat3 + twostat4 - twomin

    //stat 3 rolling
    var threestat1 = (Math.floor(Math.random() * 6) + 1);
    var threestat2 = (Math.floor(Math.random() * 6) + 1);
    var threestat3 = (Math.floor(Math.random() * 6) + 1);
    var threestat4 = (Math.floor(Math.random() * 6) + 1);
    //get the lowest number from the values rolled
    const threemin = Math.min(threestat1, threestat2, threestat3, threestat4)
    //final value
    var threetotal = threestat1 + threestat2 + threestat3 + threestat4 - threemin

    //stat 4 rolling
    var fourstat1 = (Math.floor(Math.random() * 6) + 1);
    var fourstat2 = (Math.floor(Math.random() * 6) + 1);
    var fourstat3 = (Math.floor(Math.random() * 6) + 1);
    var fourstat4 = (Math.floor(Math.random() * 6) + 1);
    //get the lowest number from the values rolled
    const fourmin = Math.min(fourstat1, fourstat2, fourstat3, fourstat4)
    //final value
    var fourtotal = fourstat1 + fourstat2 + fourstat3 + fourstat4 - fourmin

    //stat 5 rolling
    var fivestat1 = (Math.floor(Math.random() * 6) + 1);
    var fivestat2 = (Math.floor(Math.random() * 6) + 1);
    var fivestat3 = (Math.floor(Math.random() * 6) + 1);
    var fivestat4 = (Math.floor(Math.random() * 6) + 1);
    //get the lowest number from the values rolled
    const fivemin = Math.min(fivestat1, fivestat2, fivestat3, fivestat4)
    //final value
    var fivetotal = fivestat1 + fivestat2 + fivestat3 + fivestat4 - fivemin

    //stat 6 rolling
    var sixstat1 = (Math.floor(Math.random() * 6) + 1);
    var sixstat2 = (Math.floor(Math.random() * 6) + 1);
    var sixstat3 = (Math.floor(Math.random() * 6) + 1);
    var sixstat4 = (Math.floor(Math.random() * 6) + 1);
    //get the lowest number from the values rolled
    const sixmin = Math.min(sixstat1, sixstat2, sixstat3, sixstat4)
    //final value
    var sixtotal = sixstat1 + sixstat2 + sixstat3 + sixstat4 - sixmin

    message.channel.send({ embed: {
        color: 3447003,
        title: ":dragon_face:" + " " + "dndbot - stat roller",
        fields: [{
          //first stat
          name: ":computer:" + " " + "Calculation 1" + " " + "(" + onestat1 + " + " + onestat2 + " + " + onestat3 + " + " + onestat4 + " - " + onemin + ")",
          value: ":game_die:" + " " + "You rolled" + " " + "**" + onetotal + "**"
        },
        {
          //second stat
          name: ":computer:" + " " + "Calculation 2" + " " + "(" + twostat1 + " + " + twostat2 + " + " + twostat3 + " + " + twostat4 + " - " + twomin + ")",
          value: ":game_die:" + " " + "You rolled" + " " + "**" + twototal + "**"
        },
        {
          //third stat
          name: ":computer:" + " " + "Calculation 3" + " " + "(" + threestat1 + " + " + threestat2 + " + " + threestat3 + " + " + threestat4 + " - " + threemin + ")",
          value: ":game_die:" + " " + "You rolled" + " " + "**" + threetotal + "**"
        },
        {
          //fourth stat
          name: ":computer:" + " " + "Calculation 4" + " " + "(" + fourstat1 + " + " + fourstat2 + " + " + fourstat3 + " + " + fourstat4 + " - " + fourmin + ")",
          value: ":game_die:" + " " + "You rolled" + " " + "**" + fourtotal + "**"
        },
        {
          //fifth stat
          name: ":computer:" + " " + "Calculation 5" + " " + "(" + fivestat1 + " + " + fivestat2 + " + " + fivestat3 + " + " + fivestat4 + " - " + fivemin + ")",
          value: ":game_die:" + " " + "You rolled" + " " + "**" + fivetotal + "**"
        },
        {
          //sixth stat
          name: ":computer:" + " " + "Calculation 6" + " " + "(" + sixstat1 + " + " + sixstat2 + " + " + sixstat3 + " + " + sixstat4 + " - " + sixmin + ")",
          value: ":game_die:" + " " + "You rolled" + " " + "**" + sixtotal + "**"
        },
        {
          //fifth stat
          name: ":white_check_mark:" + " " + "Done calculating!",
          value: ":arrow_right:" + " " + "Your" + " " + "**" + "final" + "**" + " " + "values are" + " " + "**" + onetotal + "**" + "," + " " + "**" + twototal + "**" + "," + " " + "**" + threetotal + "**" + "," + " " + "**" + fourtotal + "**" + "," + " " + "**" + fivetotal + "**" + " " + "&" + " " + "**" + sixtotal + "**"
        }
      ],
      }
    });
  }

  //help command
  if (command === "help") {
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
});

client.login(config.token);