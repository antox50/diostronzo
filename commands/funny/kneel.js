const { MessageEmbed } = require('discord.js')

module.exports = {
    commands: 'kneel', // You Can Keep Any Name
    description: 'Bans A User.', // Optional 

    callback: (message, args) => {
        const member = message.mentions.members.first()
        if(!member) return message.reply('You need to mention a member.') // Mention To Ban.


        let images = [ // Find More Names In Description
            'https://i.pinimg.com/originals/96/b6/2d/96b62d16755f9d6f23eba51b9b97d5a2.gif',
            'https://c.tenor.com/kHhkH5WyYg8AAAAC/kneel-overlord.gif',
            'https://i.kym-cdn.com/photos/images/original/001/947/856/2b3.gif',
            'https://i.gifer.com/JzUO.gif',
            'https://cdn.discordapp.com/attachments/1005495301446045717/1008840107995955310/f4501a55041976e4d45cdfff8ecb62cbcff2afce88c647cb46ab71df8aff1f0c.gif',
            'https://cdn.discordapp.com/attachments/1001072974499151893/1008840046960459886/f4501a55041976e4d45cdfff8ecb62cbcff2afce88c647cb46ab71df8aff1f0c.gif',
   
        ]
        
       



        const embed = new MessageEmbed()
        .setTitle('kneel')
        .setDescription(`<@${member.user.id}> `)
        .setImage(images[Math. floor(Math. random()*images.length)])
        .setColor('RANDOM')
        message.channel.send(embed)
    }
}