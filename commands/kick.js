const Discord = require('discord.js')
module.exports = {
    name: 'kick',
    description: "really?",
    execute(message, args) {
       
        if (message.member.permissions.has(Discord.Permissions.FLAGS.ADMINISTRATOR)) {
            const member = message.mentions.users.first();
            if(member){
                const memberTarger = message.guild.members.cache.get(member.id);
                memberTarger.kick();
                message.channel.send("LIGHT neR< has been kicked")
            }else{
                message.channel.send('You really want to get rid of [Hyperlink Blocked]???')
            }



        } else {
            message.channel.send('neeD to bE [Big Shot]')
        }

    }
}