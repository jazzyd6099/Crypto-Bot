module.exports = (client, message) => {
  const prefix = "?"

    const args = message.content.slice(client.config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();


  const cmd = client.commands.get(command);

  if (!cmd) return;

  cmd.run(client, message, args);
};
