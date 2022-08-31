const { MessageEmbed } = require('discord.js')

module.exports = {
    commands: 'slap', // You Can Keep Any Name
    description: 'Bans A User.', // Optional 

    callback: (message, args) => {
        const member = message.mentions.members.first()
        if(!member) return message.reply('You need to mention a member.') // Mention To Ban.


        let images = [ // Find More Names In Description
            'https://c.tenor.com/GBShVmDnx9kAAAAC/anime-slap.gif',
            'https://i.pinimg.com/originals/fe/39/cf/fe39cfc3be04e3cbd7ffdcabb2e1837b.gif',
            'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/ca6c9b94-6d44-46dd-aedf-97018a9591a6/d64ee77-c1d1797f-093f-4ad7-9854-12aef6e1aec6.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2NhNmM5Yjk0LTZkNDQtNDZkZC1hZWRmLTk3MDE4YTk1OTFhNlwvZDY0ZWU3Ny1jMWQxNzk3Zi0wOTNmLTRhZDctOTg1NC0xMmFlZjZlMWFlYzYuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.J1qMYR6H8Dw9lxJa9VaOEXFAmvAbSeAS1bf-XlIIY1A',
            'https://c.tenor.com/CvBTA0GyrogAAAAC/anime-slap.gif',
            'https://i.pinimg.com/originals/1c/8f/0f/1c8f0f43c75c11bf504b25340ddd912d.gif',
            'https://gifdb.com/images/thumbnail/ayu-tsukimiya-slap-0g4oug78rm08llr0.gif',
            'https://gifdb.com/images/high/saki-saki-slap-hw8e4zgz8o2skwqs.gif',
    
        ]
        
       



        const embed = new MessageEmbed()
        .setTitle('slap')
        .setDescription(`<@${member.user.id}> `)
        .setImage(images[Math. floor(Math. random()*images.length)])
        .setColor('RANDOM')
        message.channel.send(embed)
    }
}