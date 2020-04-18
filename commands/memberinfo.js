const Discord = require('discord.js');
        
        client.on("message", (message) => {
         if (!message.content.startsWith(prefix)) return;
                if (message.content.startsWith(prefix+"userinfo")) {
        const embed = new Dicord.MessageEmbed()
            .setColor(funcs.rc())
            .setTitle('Server Member Info')
            .addField('**__Info:__**', `Online users: ${message.guild.members.filter(m => m.presence.status == "online").size}\nOffline users: ${message.guild.members.filter(m => m.presence.status == "offline").size}\nTotal Users: ${message.guild.members.size}\nTotal Bots: ${message.guild.members.filter(m => m.user.client == true).size}`)
        message.channel.send(embed);
    }
});
