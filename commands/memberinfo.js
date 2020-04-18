module.exports.run = async (client, message, args, funcs) => {
try {
        const embed = new Dicord.MessageEmbed()
            .setColor(funcs.rc())
            .setTitle('Server Member Info')
            .addField('**__Info:__**', `Online users: ${message.guild.members.filter(m => m.presence.status == "online").size}\nOffline users: ${message.guild.members.filter(m => m.presence.status == "offline").size}\nTotal Users: ${message.guild.members.size}\nTotal Bots: ${message.guild.members.filter(m => m.user.client == true).size}`)
        message.channel.send(embed);
    } catch (e) {
        console.error;
        funcs.send(`Oh, An error occurred. \`${e.message}\`.`);
    }
};

module.exports.config = {
    name: "memberinfo",
    usage: "Use this command to get server member information.",
};
