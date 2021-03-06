const fs = require('fs');
const Discord = require("discord.js");
const { prefix } = require('./config.json');
const activities = require('./jsons/activity');

const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION"]});
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
	"Rampart",
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
 client.on("messageReactionAdd", async (reaction, user) => {
					  if (reaction.message.partial) await reaction.message.fetch();
					  if (reaction.partial) await reaction.fetch();
						  
						  if(user.bot) return;
						  if(!reaction.message.guild) return;
						  
						  if (reaction.message.channel.id === "760625860356866118") {
						  if (reaction.emoji.name === '🤫'){
							  await reaction.message.guild.members.cache.get(user.id).roles.add("760565558822961162")
							  return user.send("Horny role was given to you.").catch(() => console.log("Failed to send DM."));
						  }
							    if (reaction.emoji.name === 'roblox'){
							  await reaction.message.guild.members.cache.get(user.id).roles.add("760635090182471690")
							  return user.send("Roblox role was given to you.").catch(() => console.log("Failed to send DM."));
						  }
							    if (reaction.emoji.name === 'amongus'){
							  await reaction.message.guild.members.cache.get(user.id).roles.add("760631726577549373")
							  return user.send("Among Us role was given to you.").catch(() => console.log("Failed to send DM."));
						  }
							    if (reaction.emoji.name === 'minecraft'){
							  await reaction.message.guild.members.cache.get(user.id).roles.add("760650546947948614")
							  return user.send("Minecraft role was given to you.").catch(() => console.log("Failed to send DM."));
						  }
							    if (reaction.emoji.name === 'apex'){
							  await reaction.message.guild.members.cache.get(user.id).roles.add("760654774302801930")
							  return user.send("Apex Legends role was given to you.").catch(() => console.log("Failed to send DM."));
						  }
						  } else {
							  return;
						  }
							  
					  })
client.on("messageReactionRemove", async (reaction, user) => {
	if(reaction.message.partial) await reaction.fetch();
	if(reaction.partial) await reaction.fetich();
	
	if(user.bot) return;
	if(!reaction.message.guild) return;
		
	if(reaction.message.channel.id === "760625860356866118") {
	if(reaction.emoji.name === '🤫'){
		await reaction.message.guild.members.cache.get(user.id).roles.remove("760565558822961162")
	}
		if(reaction.emoji.name === 'roblox'){
		await reaction.message.guild.members.cache.get(user.id).roles.remove("760635090182471690")
	}
		if(reaction.emoji.name === 'amongus'){
		await reaction.message.guild.members.cache.get(user.id).roles.remove("760631726577549373")
	}
				if(reaction.emoji.name === 'minecraft'){
		await reaction.message.guild.members.cache.get(user.id).roles.remove("760650546947948614")
	}
				if(reaction.emoji.name === 'apex'){
		await reaction.message.guild.members.cache.get(user.id).roles.remove("760654774302801930")
	}
	} else {
		return;
	}
})

client.on('reconnecting', () => console.warn('Reconnecting...'))
	

client.on("ready", () => {
  console.log("I am ready.");
	  
const activity = activities[Math.floor(Math.random() * activities.length)];
client.user.setPresence({ activity: { name: activity.text, type: activity.type }, status: 'idle' })
	   .then(console.log)
  .catch(console.error);
});
client.on('guildMemberAdd', member => {
	
	const channel = member.guild.channels.cache.find(channel => channel.name === "👋welcome👋");
	if(!channel) return;

	var embed = new Discord.MessageEmbed()
	.setTitle(`Welcome to ${member.guild}.`)
	.setColor(13101459)
	.setThumbnail(member.user.displayAvatarURL())
	.setDescription(`Heh, didn't expect you to show up here, ${member.user}. May you have a great time.\n\nYou can go to <#760625860356866118> to get access to different channels.`)
	channel.send({embed})
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
						.addField('__Server__','`?serverinfo`, `?rrole1`, `?rrole2`')
						.addField('__Cryptage/Interactions__', '`?roll`, `?do you love me`, `?whatami`, `?pickalegend`, `?poll`, `?vote`')
						.addField('__User__', '`?userinfo`, `?avatar`')
						.setFooter('Bot coded and created by SpaceCarame#6433.')
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
											  .setThumbnail(message.guild.iconURL())
											  .addField("Server ID", message.guild.id)
											  .addField("Owner", message.guild.owner.user.tag)
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
														if (message.content.startsWith(prefix+"vote")) {
															let voteChannel = message.mentions.channels.first();
															if(message.mentions.channels.size < 1) return message.channel.send("You forgot to mention a channel for me to put the vote in.");
															
															let voteDescription = args.slice(1).join(' ');
															
															var embedVote = new Discord.MessageEmbed()
															.setTitle(`New Vote: ${voteDescription}`)
															.setDescription('To vote, click the desired emoji below.')
															.setColor(13101459)
															.setTimestamp()
															.setFooter(`Vote started by ${message.member.user.tag}`, message.member.user.displayAvatarURL())
															 let messageEmbed = await voteChannel.send(embedVote);
															 await messageEmbed.react('✅')
															 await messageEmbed.react('❎')
															       messageEmbed.react('🤷')
														} else
															if (message.content.startsWith(prefix+"poll")) {
															
																let channel = message.mentions.channels.first();
																if(message.mentions.channels.size < 1) return message.channel.send("You forgot to mention a channel for me to put the poll in.");
																
																let question = args.slice(1).join(' ')
    															if (!question) return message.channel.send("You need to provide a question for the poll.");
																
																let option1 = args.slice(2).join(' ')
																if (!option1) return message.channel.send("Provide an option.");
								
																
																let option2 = args.slice(3).join(' ');
																if (!option2) return message.channel.send("provide another option.");
																    
																var Embed = new Discord.MessageEmbed()
																.setTitle(`New Poll: ${question}`)
																.setDescription('To vote, click on an emote below.')
																.addField('🇦',`${option1}`)
																.addField('🇧',`${option2}`)
																.setFooter(`${message.author.username} created this poll.`)
																let messagePoll = await client.channels.cache.get(channel.id).send(Embed)
																await messagePoll.react('🇦')
																await messagePoll.react('🇧')
															} else
																	if (message.content.startsWith(prefix+"rrole1")) {
																		
																		let Reactchannel = message.mentions.channels.first();
																		if(message.mentions.channels.size < 1) return message.channel.send("You forgot to mention a channel for me to put the reaction role in.");
																		
																		var embed = new Discord.MessageEmbed()
																	.setTitle('Horny Role')
																	.setDescription('React to obtain a role. This is the role to get into the nsfw channel. \n\n🤫 : `Horny`')
																	.setColor(13101459)
																	let messageEmbed = await Reactchannel.send(embed)
																	messageEmbed.react('🤫')
																	} else
																		if (message.content.startsWith(prefix+"emojitest")) {
																		message.react('760631281922605137')
																		message.react('760633873334796328')
																		} else
																		if (message.content.startsWith(prefix+"rrole2")){
																		
																		let Reactchannell = message.mentions.channels.first();
																		if(message.mentions.channels.size < 1) return message.channel.send("You forgot to mention a channel for me to put the reaction role in.");
																		
																		var embed = new Discord.MessageEmbed()
																	.setTitle('Games Roles')
																	.setDescription('React to obtain a role. Click on the game you play and you will unlock the channel for that specified game. \n\n<:robloxicon:760631281922605137> : `Roblox` \n\n<:amongus:760633873334796328> : `Among Us` \n\n<:minecrafticon:760650391682547732> : `Minecraft` \n\n<:apex:760653611771363368> : `Apex Legends`')
																	.setColor(13101459)
																	let messageEmbed = await Reactchannell.send(embed)
																	messageEmbed.react('760631281922605137')
																	messageEmbed.react('760633873334796328')
																	messageEmbed.react('760650391682547732')
																	messageEmbed.react('760653611771363368')
																		} else
					if (message.content.startsWith(prefix+"pickalegend")) {
						var embed = new Discord.MessageEmbed()
						.setColor(13101459)
						.setTitle("**The legend you wanted me to pick is..**")
						.setDescription(legends[Math.floor(Math.random() * legends.length)])
						message.channel.send({embed})
					} else
						if (message.content.startsWith(prefix+"roll")) {
							message.reply("I'm not here for your entertainment. That's what Elliott is here for.");
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
