const { MessageEmbed } = require('discord.js')

module.exports = {
    commands: 'ball', // You Can Keep Any Name
    description: 'Bans A User.', // Optional 

    callback: (message, args) => {
        const member = message.mentions.members.first()
        if(!member) return message.reply('You need to mention a member.') // Mention To Ban.


        let images = [ // Find More Names In Description
            'https://c.tenor.com/D67kRWw_cEEAAAAC/voz-dap-chym-dap-chym.gif',
            'https://c.tenor.com/2U9tTXuO_gUAAAAd/kick-anime.gif',
            'https://c.tenor.com/CZT8alpjzzwAAAAd/ball-kick.gif',
            'https://c.tenor.com/KlvWYCEumXAAAAAd/kick-anime.gif',
            'https://i.gifer.com/DALt.gif',
   
        ]
        
       



        const embed = new MessageEmbed()
        .setTitle('ball')
        .setDescription(`<@${member.user.id}> `)
        .setImage(images[Math. floor(Math. random()*images.length)])
        .setColor('RANDOM')
        message.channel.send(embed)
    }
}