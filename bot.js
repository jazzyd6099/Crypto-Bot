const fs = require('fs');
const Discord = require("discord.js");
const { prefix } = require('./config.json');
const activities = require('./jsons/activity');

const client = new Discord.Client();
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}
		    
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
	"Someone that has interesting energy.",
	"Straight.",
	"Someone that I could maybe trust. Likely not.",
	"Pan.",
	"Someone that has nice energy.",
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
client.on('message', async message => {
	if (message.content.toLowerCase().startsWith("Hey Crypto")) {
		message.reply("Hello.");
	} else
		if (message.content.toLowerCase().startsWith("hi crypto")) {
			message.reply("Hi.");
		} else
			if (message.content.toLowerCase().startsWith("helllo crypto")) {
				message.reply("Hey.");
		} else
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
							var embed = new Discord.MessageEmbed()
						.setTitle("My Commands")
						.setColor(13101459)
						.setDescription("These are my commands. There will be more to come. My prefix is self explanatory.")
						.setAuthor('Crypto', 'https://i.postimg.cc/RCnXZHqy/cryptooooo.png')
						.addField('__Server__','`?serverinfo`')
						.addField('__Cryptage/Interactions__', '`?roll, ?do you love me`, `?whatami`, `?pickalegend`')
						.addField('__User__', '`?userinfo`, `?avatar`')
						.setFooter('*Bot coded and created by SpaceCarame#6433.*')
						message.channel.send({embed})
					}

	      });
client.on('message', async(message) => {
 if (!message.content.startsWith(prefix)) return;
	const messageArray = message.content.split(' ');
	const args = messageArray.slice(1);
	
			if (message.content.startsWith(prefix+"ping")) {
				message.channel.send("Pong.");
			} else
						if (message.content.startsWith(prefix+"whatami")) {
						var embed = new Discord.MessageEmbed()
							.setColor(13101459)
							.setTitle("**This user is..**")
							.setDescription(names[Math.floor(Math.random() * names.length)])
							.setThumbnail(message.author.displayAvatarURL())
								message.channel.send({embed})
									  } else
										  if (message.content.startsWith(prefix+"serverinfo")) {
											  var embed = new Discord.MessageEmbed()
											  .setColor(13101459)
											  .setTitle("Server Information")
											  .setDescription(`${message.guild}'s information`)
											  .setThumbnail(`https://i.postimg.cc/FRVPv8Q1/download.jpg`)
											  .addField("Member Count", `This server has ${message.guild.memberCount} members.`)
											  .addField("Roles Count", `This server has ${message.guild.roles.cache.size} roles.`)
											  .addField("Emojis Count", `This Server has ${message.guild.emojis.cache.size} emojis.`)
											  message.channel.send({embed})
										  } else
											  if (message.content.startsWith(prefix+"userinfo")) {
												  let user = message.mentions.users.first() || message.author;
												  const member = message.guild.member(user);
												  var embed = new Discord.MessageEmbed()
												  .setColor(13101459)
												  .setDescription(`${user}`)
												  .setAuthor(`${user.username}#${user.discriminator}`, user.displayAvatarURL())
												  .addField("ID", `${user.id}`)
												  .addField("Status", `${user.presence.status}`)
												  .addField("In Server", `${message.guild.name}`)
												  .setFooter(`Replying to ${message.author.username}#${message.author.discriminator}`)
												  message.channel.send({embed})
											  } else
												  if (message.content.startsWith(prefix+"avatar")) {
												  let user = message.mentions.users.first() || message.author;
													  var embed = new Discord.MessageEmbed()
													  .setColor(13101459)
													  .setAuthor(user.username)
													  .setImage(user.displayAvatarURL())
													  message.channel.send({embed})
												  } else
													  if (message.content.startsWith(prefix+"reacttest")) {
														  message.react('✅').then(() => message.react('🔧'));
															} else
	
														if (message.content.startsWith(prefix+"poll")) {
															let channel = message.mentions.channel.first();
															let pollDescription = args.slice(1).join(' ');
															
															let embedPoll = new Discord.MessageEmbed()
															.setTitle('New Poll')
															.setDescription(pollDescription)
															.setColor(13101459)
															 message.channel.send({embedPoll})
														} else
															
					if (message.content.startsWith(prefix+"pickalegend")) {
						var embed = new Discord.MessageEmbed()
						.setColor(13101459)
						.setTitle("**The legend you wanted me to pick is..**")
						.setDescription(legends[Math.floor(Math.random() * legends.length)])
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


client.login(process.env.BOT_TOKEN);
