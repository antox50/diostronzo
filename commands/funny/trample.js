const { MessageEmbed } = require('discord.js')

module.exports = {
    commands: 'trample', // You Can Keep Any Name
    description: 'Bans A User.', // Optional 

    callback: (message, args) => {
        const member = message.mentions.members.first()
        if(!member) return message.reply('You need to mention a member.') // Mention To Ban.


        let images = [ // Find More Names In Description
            'https://c.tenor.com/GGnEnYPBvNAAAAAC/anime-face-stomp.gif',
            'https://c.tenor.com/uccJbpLOxE0AAAAC/neo-rwby-anime.gif',
            'https://c.tenor.com/LxoWv1cv5UgAAAAM/kintaro-oe.gif',
            'https://c.tenor.com/sDsRgrQovukAAAAC/oruchuban-ebichu-oruchuban.gif',
            'https://c.tenor.com/HV-QM3sUaQ0AAAAd/norn-redo-of-healer.gif',
            'https://i.makeagif.com/media/4-27-2015/L-0-xT.gif',
            'https://c.tenor.com/-57krZRh8CwAAAAC/black-clover-anime.gif',
            'https://cdn.discordapp.com/attachments/1001072974499151893/1008460834520961075/1b56fb0a6a016195243baaf9d57b7c12ae5b786c_hq.gif',
            

    
        ]
        
       



        const embed = new MessageEmbed()
        .setTitle('trample')
        .setDescription(`<@${member.user.id}> `)
        .setImage(images[Math. floor(Math. random()*images.length)])
        .setColor('RANDOM')
        message.channel.send(embed)
    }
}