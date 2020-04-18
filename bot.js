const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = "?"

	client.on('warn', err => console.warn('[WARNING]', err));

client.on('error', err => console.error('[ERROR]', err));

client.on('uncaughtException', (err) => {
    console.log("Uncaught Exception: " + err)
    process.exit(1)
});

process.on('unhandledRejection', (reason, promise) => {
  console.log('[FATAL] Possibly Unhandled Rejection at: Promise ', promise, ' reason: ', reason.message);
});

client.on('disconnect', () => {
  console.warn('Disconnected!')
  process.exit(0);
})

client.on('reconnecting', () => console.warn('Reconnecting...'))
	
	
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
		message.reply("Hello.");
	} else
		if (message.content.startsWith("hi crypto")) {
			message.reply("Hi.");
		} else
			if (message.content.startsWith("helllo crypto")) {
				message.reply("Hey.");
			} else
				if (message.content.startsWith("Hello Crypto!")) {
				      message.reply("Hello.");
				} else
					if (message.content.startsWith("Hi Crypto")) {
						message.reply("Hey.");
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
		    if (message.content.startsWith(prefix+"roll")) {
			    message.reply("I'm not here to entertain you. That's what Elliott is here for.");
		    } else
		    if (message.content.startsWith(prefix+"help")) {
			    message.author.send("You need my commands? Okay, here they are.");
		    } else
			    if (message.content.startsWith(prefix+"avatar")) {
			  let user = message.mentions.users.first() || message.author;
    				var embed = new Discord.MessageEmbed()
			             .setAuthor(user.username)
     			             .setImage(user.displayAvatarURL())
       				     .setColor(13101459)
				    message.channel.send({embed})
				  }
		    });
client.on("message.", async (message) => {
	if (!message.content.startsWith(prefix)) return;
	
	if(message.content.startsWith(prefix+"poll")) {
	if (!args[0]) return message.channel.send("Proper Usage: (prefix)poll question");
	
	const embed = new Discord.MessageEmbed()
	.setColor(13101459)
	.setFooter('React to vote.')
	.setDescription(args.join(' '))
	.setTitle('Poll Created By ${message.author.username}');
	
	let message = await message.channel.send(embed);
	
	await message.react(':regional_indicator_y:');
	await message.react(':regional_indicator_n:');
	
	message.delete({timeout: 1000});
	
}});
	client.on("message", (message) => {
		if (message.content.includes("!can i hold your hand")) {
			message.reply("No.");
		} else
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
						 value: "?roll"
					 },
					 {
						 name: "**User**",
						 value: "?userinfo, ?avatar"
					 }
					 ],
				}});
  }
});


client.login(process.env.BOT_TOKEN);
