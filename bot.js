const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = "?"

//embedColors

const embedRed = 0xff0000
const embedOrange = 0xff790c
const embedYellow = 0xffff00
const embedGreen = 0x00ff00
const embedBlue = 0x0064ff
const embedPurple = 0x6a00b0
const embedMagenta = 0x9600ff
const embedPink = 0xff00ff
const embedBlack = 0x000000
const embedWhite = 0xffffff
const embedGray = 0x777777

client.on("ready", () => {
  console.log("I am ready.");
});

client.on("message", (message) => {
 if (!message.content.startsWith(prefix)) return;
	
  if (message.content.startsWith(prefix + "ping")) {
    message.channel.send("pong.");
  } else
    if (message.content.startsWith(prefix + "server")) {
	message.channel.send("**Server name:** ${message.guild.name}\n**Total members:** ${message.guild.memberCount");
    } else
	    if (message.content.startsWith(prefix+"userinfo")) {
		message.channel.send(`**Your username:** ${message.author.username}\n**Your ID:** ${message.author.id}`);
  }
});


client.login(process.env.BOT_TOKEN);
