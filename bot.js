const fs = require('fs');
const Discord = require("discord.js");
const { prefix } = require('./config.json');
const activities = require('./jsons/activity');

const client = new Discord.Client();


		    
var x = [
    1,
    2,
    3,
    4,
    5,
]

var output = x[Math.floor(Math.random()*x.length)];

var legends = [
	"Lifeline",
	"Gibraltar",
	"Mirage",
	"Crypto",
	"Revenant",
	"Loba",
	"Pathfinder",
	"Wraith",
	"BloodHound",
	"Octane",
	"Crypto",
	"Wattson",
	"Caustic",
	];

var names = [
	"Gay.",
	"Bi.",
	"Lesbian.",
	"An idiot.",
	"Someone that has big dick energy.",
	"Straight.",
	"Someone that I could maybe trust. Likely not.",
	"Pan.",
	"Someone that has small dick energy.",
	"A person, duh.",
	"One of Elliott's decoys.",
	"A lizard.",
	"Crying.",
	"A trash can.",
	"A gay arsonist.",
	"A furry.",
	"Gay for girls.",
	"Not a furry.",
	"Gay for boys.",
	];
	
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
	

client.on("ready", () => {
  console.log("I am ready.");
	  
const activity = activities[Math.floor(Math.random() * activities.length)];
client.user.setPresence({ activity: { name: activity.text, type: activity.type }, status: 'idle' })
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
	
	if (message.content.startsWith(prefix+"ping")) {
	message.channel.send("pong.");
	} else
			if (message.content.startsWith(prefix+"userinfo")) {
			message.channel.send(`Username: ${message.author.username}\nID: ${message.author.id}`);
	} else
		    if (message.content.startsWith(prefix+"roll")) {
			    message.reply("I'm not here to entertain you. That's what Elliott is here for.");
				} else
					if (message.content.startsWith(prefix+"poll")) {
						async (client, message) => {
						let question = message.content.slice(client.prefix.length+5)
						if(!question){
							return message.channel.send("You did not specify a question for your poll!");
						var embed = new Discord.MessageEmbed()
						.setTitle("New Poll")
						.setDescription(question)
						.setFooter("${message.author.username} created this poll.")
						let message = await message.channel.send({embed})
						await message.react('✅')
							await.message.react('❌')
						} else
				if (message.content.startsWith(prefix+"do you love me")) {
					message.reply("I don't think so.");
				} else
					if (message.content.startsWith(prefix+"pickalegend")) {
						var embed = new Discord.MessageEmbed()
						.setColor(13101459)
						.setTitle("**The legend you wanted me to pick is..**")
						.setDescription(legends[Math.floor(Math.random() * legends.length)])
						message.channel.send({embed})
					} else
				if (message.content.startsWith(prefix+"whatami")) {
						var embed = new Discord.MessageEmbed()
							.setColor(13101459)
							.setTitle("**This user is..**")
							.setDescription(names[Math.floor(Math.random() * names.length)])
							.setThumbnail(message.author.displayAvatarURL())
								message.channel.send({embed})
								     } else
		    if (message.content.startsWith(prefix+"help")) {
			    message.author.send("You need my commands? Okay, here they are.");
			    } else
				    if (message.content.startsWith(prefix+"reactawait")) {
					   message.react('👍').then(() => message.react('👎'));
					    const filter = (reaction, user) => {
			return ['👍', '👎'].includes(reaction.emoji.name) && user.id === message.author.id;
		};
			message.awaitReactions(filter, { maxMatches: 1, time: 60000, errors: ['time'] })
			.then(collected => {
				const reaction = collected.first();
			})
			.catch(collected => {
				message.channel.send(`After a minute, only ${collected.size} out of 4 reacted.`);
				  });
				    }
		    });
	client.on("message", (message) => {
		if (message.content.includes("!can i hold your hand")) {
			message.reply("No.");
		} else
			if (message.content.includes("love you crypto")) {
					message.react('👎');
			} else
				if (message.content.includes("love crypto")) {
					message.react('👎');
				} else
					if (message.content.includes("crypto i love you")) {
						message.react('👎');
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
					value: "WIP"
				},
					 {
						 name: "**Cryptage/Interactions**",
						 value: "?roll, ?do you love me, ?whatami"
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
