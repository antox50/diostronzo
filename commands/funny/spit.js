const { MessageEmbed } = require('discord.js')

module.exports = {
    commands: 'spit', // You Can Keep Any Name
    description: 'Bans A User.', // Optional 

    callback: (message, args) => {
        const member = message.mentions.members.first()
        if(!member) return message.reply('You need to mention a member.') // Mention To Ban.


        let images = [ // Find More Names In Description
            'https://c.tenor.com/rdLi3cc7KCoAAAAM/spit-ew.gif',
            'https://thumbs.gfycat.com/EverlastingCreamyEuropeanpolecat-size_restricted.gif',
            'https://c.tenor.com/aKSY2XuSpcwAAAAC/anime-spit.gif',
            'https://c.tenor.com/tWM-lrgxjaQAAAAM/becca-spit-spit-on-you.gif',
            'https://cdn.discordapp.com/attachments/1005495301446045717/1008841700090847323/DistortedHorribleGardensnake-max-1mb.gif',
            'https://cdn.discordapp.com/attachments/1005495301446045717/1008841661096415272/giphy_2.gif',

    
        ]
        
       



        const embed = new MessageEmbed()
        .setTitle('spit')
        .setDescription(`<@${member.user.id}> `)
        .setImage(images[Math. floor(Math. random()*images.length)])
        .setColor('RANDOM')
        message.channel.send(embed)
    }
}