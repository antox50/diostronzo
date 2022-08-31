const { MessageEmbed } = require('discord.js')
const db = require('quick.db')

module.exports = {
    commands: ['buyhuman-seat', 'buy human-seat', 'buy Human-seat'], // You Can Keep Any Name


    callback: async(message, args, client) => {

 // You Can Keep Any Name
            const user = message.member
            if(user.roles.cache.has('997096740828225556') || user.roles.cache.has('997096690467229756')){
            const amount = 24000 // Amount Of Laptop: $10,000
            const bal = db.fetch(`money_${user.id}`) // Get User's Money In Wallet

            if(bal <amount) { // If Balance In Wallet Is Less Then Amount Of Laptop
                return message.reply(`You don't have enough money(\`$24,000\`) in wallet to buy role`)
            } else {
              
                message.member.roles.add('1013402995221856276');

                const embed = new MessageEmbed()
                .setAuthor(`${user.user.username} Purchased`, user.user.displayAvatarURL({ dynamic: true }))
                .setTimestamp()
                .setColor('RANDOM')
                .setDescription(`
<@${user.id}> Successfully purchased role human-seat for \`$24,000\` 👍
                `)
                .setFooter('Shop')
                message.channel.send(embed)
                db.add(`piggy${user.id}`, 1) // Add 1 Laptop To User
                db.subtract(`money_${user.id}`, amount) // Remove Money From Using
            }

            let balo = await db.fetch(`money_${user.id}`)
            if(balo === null) bal = 0 
        
            let bank = await db.fetch(`bank_${user.id}`) 
            if(bank === null) bank = 0 
        
            let tot = await db.fetch(`total_${user.id}`)
            tot = bank+balo
        
        
            let totale = db.set(`total_${user.id}`, tot)
        } else
        {
            const embed = new MessageEmbed()
                .setAuthor(`${user.user.username} failed`, user.user.displayAvatarURL({ dynamic: true }))
                .setTimestamp()
                .setColor('RANDOM')
                .setDescription(`
<@${user.id}>  you are not a sub and you can't buy this role
                `)
                .setFooter('Shop')
                message.channel.send(embed)
        }
    }
}