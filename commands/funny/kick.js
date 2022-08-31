const { MessageEmbed } = require('discord.js')

module.exports = {
    commands: 'kick', // You Can Keep Any Name
    description: 'Bans A User.', // Optional 

    callback: (message, args) => {
        const member = message.mentions.members.first()
        if(!member) return message.reply('You need to mention a member.') // Mention To Ban.


        let images = [ // Find More Names In Description
            'https://c.tenor.com/BtwpZlg90ZkAAAAC/kick-anime.gif',
            'https://c.tenor.com/u_v-f2md4E8AAAAC/kick-anime.gif',
            'https://media3.giphy.com/media/wOly8pa4s4W88/giphy.gif',
            'https://c.tenor.com/EcdG5oq7MHYAAAAC/shut-up-hit.gif',
            'https://cdn.discordapp.com/attachments/1005495301446045717/1008838747028205608/189969.gif',
            'https://c.tenor.com/Lyqfq7_vJnsAAAAC/kick-funny.gif',
            'https://c.tenor.com/Qs9NYCf1b4YAAAAS/shida-midori-midori.gif',
            'https://c.tenor.com/7te6q4wtcYoAAAAC/mad-angry.gif',
            'https://c.tenor.com/KBo6zdxSC3MAAAAS/spy-x-family-loid-forger.gif',
            'https://c.tenor.com/aDZHwZaw9t4AAAAC/anime-kick.gif'
        ]
        
       



        const embed = new MessageEmbed()
        .setTitle('kick')
        .setDescription(`<@${member.user.id}> `)
        .setImage(images[Math. floor(Math. random()*images.length)])
        .setColor('RANDOM')
        message.channel.send(embed)
    }
}