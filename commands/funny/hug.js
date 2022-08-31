const { MessageEmbed } = require('discord.js')

module.exports = {
    commands: 'hug', // You Can Keep Any Name
    description: 'Bans A User.', // Optional 

    callback: (message, args) => {
        const member = message.mentions.members.first()
        if(!member) return message.reply('You need to mention a member.') // Mention To Ban.


        let images = [ // Find More Names In Description
            'https://media4.giphy.com/media/vVA8U5NnXpMXK/giphy.gif?cid=790b7611490d54a187fce0ac72e6bb4f5ad4df0b7425eccc&rid=giphy.gif&ct=g',
            'https://media3.giphy.com/media/od5H3PmEG5EVq/giphy.gif?cid=790b7611435f1dea9c77d535825598266262fda99d958bda&rid=giphy.gif&ct=g',
            'https://media4.giphy.com/media/LIqFOpO9Qh0uA/giphy.gif?cid=790b7611627f21b798517720aa3093053069b8fd41a80828&rid=giphy.gif&ct=g',
            'https://media2.giphy.com/media/wnsgren9NtITS/giphy.gif?cid=790b7611af47e64e030fa4f5297eeab90fb531490244f7e2&rid=giphy.gif&ct=g',
            'https://media3.giphy.com/media/sUIZWMnfd4Mb6/giphy.gif?cid=790b7611e5ca231fd5cc9836b7ab3f52bcd246807622e104&rid=giphy.gif&ct=g',
            'https://media2.giphy.com/media/DjczAlIcyK1Co/giphy.gif?cid=790b76115982deb7a116acb4883ed814673ab1d8a607ff21&rid=giphy.gif&ct=g',
            'https://i.pinimg.com/originals/85/dc/ef/85dcef131af84b515106955e142df54e.gif',
            'https://acegif.com/wp-content/gif/anime-hug-59.gif',
            'https://c.tenor.com/1T1B8HcWalQAAAAC/anime-hug.gif',
            'https://acegif.com/wp-content/gif/anime-hug-38.gif',
            

   
        ]
        
       



        const embed = new MessageEmbed()
        .setTitle('hug')
        .setDescription(`<@${member.user.id}> `)
        .setImage(images[Math. floor(Math. random()*images.length)])
        .setColor('RANDOM')
        message.channel.send(embed)
    }
}