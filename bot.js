const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = "?"

            const activities = {
                PLAYING: 'Playing',
                STREAMING: 'Streaming',
                WATCHING: 'Watching',
                LISTENING: 'Listening to'
	    };
		    
var x = [
    1,
    2,
    3,
    4,
    5,
]

var output = x[Math.floor(Math.random()*x.length)];

var names = [
	"Gay.",
	"Bi.",
	"An idiot.",
	"Someone that has big dick energy.",
	"Straight.",
	"Someone that I could maybe trust. Likely not.",
	"Pan.",
	"Someone that has small dick energy.",
	"A person, duh.",
	"One of Elliott's decoys.",
	"",
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
	module.exports.run = async (bot, message, args, funcs) => {
	
  if (message.content.startsWith(prefix + "ping")) {
    message.channel.send("pong.");
  } else
    if (message.content.startsWith(prefix + "serverinfo")) {
	message.channel.send("Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount");
    } else
	    if (message.content.startsWith(prefix+"userinfo")) {
		    let user = message.mentions.members.first();
		    
		if(message.mentions.users.size < 1) return message.reply("Mention someone so I can get information about them.");
		    const member = await message.channel.guild.members.get(user.id);
		      let embed = new Discord.MessageEmbed()
        	    .setColor(13101459)
       	           .setTitle('User info')
       	           .addField('**__Basic Info:__**', `Username: ${user.user.tag}\nUser Nickname: ${member.displayName}\nUser ID: ${user.id}`)
     	          .addField('**__Activites:__**',  `Status: ${member.presence !== null && member.presence.status !== null ? member.presence.status : "Offline"}\nPlaying: ${member.presence.game !== null ? member.presence.game.name : `None`}`)
    	          .addField('**__Dates:__**', `Guild join date: ${user.joinedAt.toDateString()}\nDiscord join date: ${user.user.createdAt.toDateString()}`)
 		       message.channel.send(embed);
	    } else
		    if (message.content.startsWith(prefix+"roll")) {
			    message.reply("I'm not here to entertain you. That's what Elliott is here for.");
		    } else		    
			if (message.content.startsWith(prefix+"poll")) {
 				message.reply("Currently WIP. Hopefully will be made soon.");
			} else
				if (message.content.startsWith(prefix+"do you love me")) {
					message.reply("I don't think so.");
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
			    if (message.content.startsWith(prefix+"avatar")) {
			  let user = message.mentions.users.first() || message.author;
    				var embed = new Discord.MessageEmbed()
			             .setAuthor(user.username)
     			             .setImage(user.displayAvatarURL())
       				     .setColor(13101459)
				    message.channel.send({embed})
				  }
		    });
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
