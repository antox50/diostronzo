const { MessageEmbed } = require('discord.js')
const db = require('quick.db')

module.exports = {
    commands: ['withdraw', 'with', 'with-draw'], // You Can Keep Any Name
    description: 'Withdraw Money From Bank', // Optional

    callback: async(message, args, client) => {

        const user = message.member
        const totalCashInBank = db.get(`bank_${user.id}`) // Same As balance.js // Get User Money In Bank
        if(totalCashInBank === null || totalCashInBank === 0) return message.reply('You Don\'t Have Money In Bank')
        if(args[0] === 'all') { // If Someone Does `+with all` All Money To Wallet


            let ciao = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(totalCashInBank)
        const embed = new MessageEmbed()


        

        .setAuthor(`${user.user.username} withDrew`, user.user.displayAvatarURL({ dynamic: true }))
        .setTimestamp()
        .setColor('RANDOM')
        .setDescription(`
<@${user.user.id}> Withdrew <a:coinsss:999019242345218068> **${ciao}** from bank
        `)
        message.channel.send(embed)
        db.subtract(`bank_${user.id}`, totalCashInBank) // Remove Money From Bank
        db.add(`money_${user.id}`, totalCashInBank) // Add Money To Wallet
        let bal = await db.fetch(`money_${user.id}`)
        if(bal === null) bal = 0 

        let bank = await db.fetch(`bank_${user.id}`) 
        if(bank === null) bank = 0 

        let tot = await db.fetch(`total_${user.id}`)
        tot = bank+bal


        let totale = db.set(`total_${user.id}`, tot)
        } else {

            
            const amount = args[0]
            if(!amount) return message.reply('you have to specify a value')
            else if(amount % 1 != 0 || amount <= 0) return message.reply('you cant withdraw -ve money or fractioned money')
            else if(amount > totalCashInBank) return message.reply('you dont have that much money in bank')
            else {

                let ciao1 = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amount)
                const embed = new MessageEmbed()
        .setAuthor(`${user.user.username} WithDrew`, user.user.displayAvatarURL({ dynamic: true }))
        .setTimestamp()
        .setColor('RANDOM')
        .setDescription(`
<@${user.user.id}>  Withdrew **${ciao1}** From Bank
        `)
        message.channel.send(embed)
        db.subtract(`bank_${user.id}`, amount) // Remove Money From Bank
        db.add(`money_${user.id}`, amount) // Add Money To Wallet
        let bal = await db.fetch(`money_${user.id}`)
        if(bal === null) bal = 0 

        let bank = await db.fetch(`bank_${user.id}`) 
        if(bank === null) bank = 0 

        let tot = await db.fetch(`total_${user.id}`)
        tot = bank+bal


        let totale = db.set(`total_${user.id}`, tot)
            }
        }
    }
}