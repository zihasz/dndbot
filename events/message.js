const active = new Map();

module.exports = (client, message) => {
    let ops = { active: active }

    //ignore bots
    if (message.author.bot) return;
  
    //ignore messages not starting with the prefix
    if (!message.content.startsWith(client.config.prefix)) { return; }
  
    //argument/command name definitions
    const args = message.content.slice(client.config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
  
    //get command data from the client command collection
    const cmd = client.commands.get(command);
  
    //if the command does not exist, exit
    if (!cmd) { return; }

    //run command
    cmd.run(client, message, args, ops);
};