const Discord = require('discord.js');
const config = require("./config.json");
const client = new Discord.Client();
const fs = require('fs');
client.config = config;
client.commands = new Discord.Collection();

/**
 * @author ollie
 * Command loading code refrenced from https://github.com/Cramenorn/RaptorSA
 */

//load events
fs.readdir("./events/", (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
      const event = require(`./events/${file}`);
      let eventName = file.split(".")[0];
      client.on(eventName, event.bind(null, client));
    });
});

//load dice commands
fs.readdir("./commands/dice/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) { return; }
    let props = require(`./commands/dice/${file}`);
    let commandName = file.split(".")[0];
    console.log(`[dndbot]` + ` ` + `Attempting to load the command` + ` ` + `'` + `${commandName}` + `'` + `.`);
    client.commands.set(commandName, props);
  });
});

//load character commands
fs.readdir("./commands/character/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) { return; }
    let props = require(`./commands/character/${file}`);
    let commandName = file.split(".")[0];
    console.log(`[dndbot]` + ` ` + `Attempting to load the command` + ` ` + `'` + `${commandName}` + `'` + `.`);
    client.commands.set(commandName, props);
  });
});

//load standard commands
fs.readdir("./commands/standard/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) { return; }
    let props = require(`./commands/standard/${file}`);
    let commandName = file.split(".")[0];
    console.log(`[dndbot]` + ` ` + `Attempting to load the command` + ` ` + `'` + `${commandName}` + `'` + `.`);
    client.commands.set(commandName, props);
  });
});

//load fun commands
fs.readdir("./commands/fun/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) { return; }
    let props = require(`./commands/fun/${file}`);
    let commandName = file.split(".")[0];
    console.log(`[dndbot]` + ` ` + `Attempting to load the command` + ` ` + `'` + `${commandName}` + `'` + `.`);
    client.commands.set(commandName, props);
  });
});

client.login(config.token);