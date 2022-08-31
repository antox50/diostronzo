const { MessageEmbed } = require('discord.js')

module.exports = {
    commands: 'smugg', // You Can Keep Any Name
    description: 'Bans A User.', // Optional 

    callback: (message, args) => {
        const member = message.mentions.members.first()
        if(!member) return message.reply('You need to mention a member.') // Mention To Ban.


        let images = [ // Find More Names In Description
            'https://c.tenor.com/GjpLC2ukT48AAAAC/rin-tohsaka.gif',
            'https://c.tenor.com/7zmFiecOw74AAAAC/smug-anime.gif',
            'https://i.pinimg.com/originals/cd/2b/22/cd2b226b8a037f39cb8096d8c745ab99.gif',
            'https://i.pinimg.com/originals/64/07/bf/6407bf09a2547a9e51bc6496bfb27dbf.gif',
            'https://i.pinimg.com/originals/00/87/4f/00874f347e56bc2a0515c393c59daff8.gif',
   
        ]
        
       



        const embed = new MessageEmbed()
        .setTitle('haha')
        .setDescription(`<@${member.user.id}> `)
        .setImage(images[Math. floor(Math. random()*images.length)])
        .setColor('RANDOM')
        message.channel.send(embed)
    }
}