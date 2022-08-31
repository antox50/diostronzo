const { MessageEmbed } = require('discord.js')

module.exports = {
    commands: 'cuddle', // You Can Keep Any Name
    description: 'Bans A User.', // Optional 

    callback: (message, args) => {
        const member = message.mentions.members.first()
        if(!member) return message.reply('You need to mention a member.') // Mention To Ban.


        let images = [ // Find More Names In Description
            'https://i.pinimg.com/originals/d8/7c/5c/d87c5cdd0a68caf2b6feeec0f7da7315.gif',
            'https://i0.wp.com/i.pinimg.com/originals/e2/c9/7a/e2c97a3b7a1ac0ec5bcecc0c18c61209.gif',
            'https://c.tenor.com/gowinK__PvAAAAAC/anime-cuddle.gif',
            'https://c.tenor.com/wwd7R-pi7DIAAAAC/anime-cuddle.gif',
            'https://thumbs.gfycat.com/PoliticalCrazyFlycatcher-max-1mb.gif',
            'http://25.media.tumblr.com/tumblr_mc9fz7CkVX1rjszsco1_500.gif',
    
        ]
        
       



        const embed = new MessageEmbed()
        .setTitle('Cuddle')
        .setDescription(`<@${member.user.id}> `)
        .setImage(images[Math. floor(Math. random()*images.length)])
        .setColor('RANDOM')
        message.channel.send(embed)
    }
}