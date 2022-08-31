const { MessageEmbed } = require('discord.js')

module.exports = {
    commands: 'pat', // You Can Keep Any Name
    description: 'Bans A User.', // Optional 

    callback: (message, args) => {
        const member = message.mentions.members.first()
        if(!member) return message.reply('You need to mention a member.') // Mention To Ban.


        let images = [ // Find More Names In Description
            'https://c.tenor.com/E6fMkQRZBdIAAAAM/kanna-kamui-pat.gif',
            'https://i.pinimg.com/originals/d7/c3/26/d7c326bd43776f1e0df6f63956230eb4.gif',
            'https://c.tenor.com/wLqFGYigJuIAAAAM/mai-sakurajima.gif',
            'https://media0.giphy.com/media/109ltuoSQT212w/giphy.gif?cid=790b7611832e5ee82e5e7da531c6f74e650e7d7f075ab200&rid=giphy.gif&ct=g',
            'https://c.tenor.com/Dbg-7wAaiJwAAAAM/aharen-aharen-san.gif',
            'https://media1.giphy.com/media/ye7OTQgwmVuVy/giphy.gif?cid=790b76113819d047d1ee439e649c44e952827ba2b55e092d&rid=giphy.gif&ct=g',
            'https://c.tenor.com/rZRQ6gSf128AAAAC/anime-good-girl.gif',
            'https://c.tenor.com/sX-K9XVf6KoAAAAC/catgirl-neko.gif',
            'https://c.tenor.com/TRxNL32jtEIAAAAC/anime-pat.gif',
            'https://c.tenor.com/TDqVQaQWcFMAAAAC/anime-pat.gif',

        ]
        
       



        const embed = new MessageEmbed()
        .setTitle('pat')
        .setDescription(`<@${member.user.id}> `)
        .setImage(images[Math. floor(Math. random()*images.length)])
        .setColor('RANDOM')
        message.channel.send(embed)
    }
}