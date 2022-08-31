const { MessageEmbed } = require('discord.js')

module.exports = {
    commands: 'kiss', // You Can Keep Any Name
    description: 'Bans A User.', // Optional 

    callback: (message, args) => {
        const member = message.mentions.members.first()
        if(!member) return message.reply('You need to mention a member.') // Mention To Ban.


        let images = [ // Find More Names In Description
            'https://i.pinimg.com/originals/6e/eb/17/6eeb17e94ceeeb6cff793326db0c33b8.gif',
            'https://c.tenor.com/t4U2xjlAfeIAAAAC/forehead-anime.gif',
            'https://c.tenor.com/wQyttVAvkF0AAAAd/forehead-kiss-anime.gif',
            'https://64.media.tumblr.com/e33fc86ad92da107a558589c300bf470/tumblr_pj70qg9kA01tevbe3_500.gifv',
            'https://aniyuki.com/wp-content/uploads/2021/07/aniyuki-anime-gif-kiss-64.gif',
    
        ]
        
       



        const embed = new MessageEmbed()
        .setTitle('kiss')
        .setDescription(`<@${member.user.id}> `)
        .setImage(images[Math. floor(Math. random()*images.length)])
        .setColor('RANDOM')
        message.channel.send(embed)
    }
}