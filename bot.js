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
		}
	      });
client.on('message', async(message) => {
 if (!message.content.startsWith(prefix)) return;
	
	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();
	

				if (command === "do you love me")) {
					client.commands.get('ping').execute(message, args);

  }
});


client.login(process.env.BOT_TOKEN);
