const { MessageEmbed } = require('discord.js')
const db = require('quick.db')

module.exports = {
    commands: ['remove-money', 'removemoney'], // You Can Keep Any Name
    description: 'Remove Money From User', // Optional
    permissions: 'ADMINISTRATOR', // You Can Keep Any Permission
    permissionError: 'You Cant Remove Money', // Optional

    callback : async (message, args) => {

        const user = message.mentions.members.first() || message.guild.members.cache.get(args[0])
        if(!user) return message.reply('You have to specify a member') // if No User Is Mentioned(Using ID/Ping)
        let totalo = db.get(`total_${user.id}`)
        const money = args[1]
        if(!money) return message.reply('How much $ you want to remove?')
        if(isNaN(parseInt(args[1]))) return message.reply(`${money} isn't a number`)
        if(money>totalo) return message.reply(`you can't remove all those money`)

        db.subtract(`money_${user.id}`, money) // Same As balance.js // `bank_${user.id}` Keep This If You Want To Add To Bank
        let tuamadre = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(money)
        const embed = new MessageEmbed()
        .setAuthor(`${user.user.username} Removed money`, user.user.displayAvatarURL({ dynamic: true }))
        .setTimestamp()
        .setColor('000000')
        .setDescription(`
Removed **${tuamadre}** From <@${user.id}>
        `)
        .addField('Removed by:-', `<@${message.author.id}>`)
        message.channel.send(embed)
        let bal = await db.fetch(`money_${user.id}`)
        if(bal === null) bal = 0 

        let bank = await db.fetch(`bank_${user.id}`) 
        if(bank === null) bank = 0 

        let tot = await db.fetch(`total_${user.id}`)
        tot = bank+bal


        let totale = db.set(`total_${user.id}`, tot)
    }
}