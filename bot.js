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
	  
	client.user.setActivity("Something."); 
       client.user.setPresence({ activity: { name: 'Something.' }, status: 'idle' })
  .then(console.log)
  .catch(console.error);
});
client.on("message", (message) => {
	if (message.content.startsWith("Hey Crypto")) {
		message.channel.send("Hello.");
	} else
		if (message.content.startsWith("hi crypto")) {
			message.channel.send("Hi.");
		}
	      });
client.on("message", (message) => {
 if (!message.content.startsWith(prefix)) return;
	
  if (message.content.startsWith(prefix + "ping")) {
    message.channel.send("pong.");
  } else
    if (message.content.startsWith(prefix + "serverinfo")) {
	message.channel.send("Server name: ${message.guild.name}\n**Total members:** ${message.guild.memberCount");
    } else
	    if (message.content.startsWith(prefix+"userinfo")) {
		message.channel.send(`Your username: ${message.author.username}\nYour ID: ${message.author.id}`);
	    } else
		    if (message.content.startsWith(prefix+"help")) {
			    message.author.send("You need my commands? Okay, here they are.");
		    });
	client.on("message", (message) => {
		if (message.content.includes("need my commands? Okay, here they are.")) {
			message.channel.send({embed: {
				color: 13101459,
				title: "My Commands",
				description: "These are my commands. There will be more to come. My prefix is self explanatory.",
				author: {
					name: "Crypto",
					icon_url: "https://i.postimg.cc/RCnXZHqy/cryptooooo.png"
				},
				fields: [{
					name: "**Server**",
					value: "?serverinfo"
				},
					 {
						 name: "**Cryptage/Interactions**",
						 value: "WIP"
					 },
					 {
						 name: "**User**",
						 value: "?userinfo"
					 }
					 ],
				}});
  }
});


client.login(process.env.BOT_TOKEN);
