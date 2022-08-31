const { MessageEmbed } = require('discord.js')
const db = require('quick.db')
const ms = require('parse-ms') // npm i parse-ms

module.exports = {
    commands: ['rob'], // You Can Keep Any Name
    description: 'Rob SomeOne For Money', // Optional
 


    callback: async(message, args, client) => {

        const user = message.member
        const mention = message.mentions.members.first()
        if(!mention) return message.reply('Whom Do You Want Rob?')
        if(mention === user) return message.reply('are you dumb?')
        const usermoney = db.get(`money_${user.id}`) // Same As balance.js // Get User Money
        const mentionmoney = db.get(`money_${mention.id}`) // Same As balance.js // Get Mentioned User Money




        const random = (min, max) => {
            return Math.floor(Math.random() * (max - min) ) + min
        }
        const timeout = 3600000 // 1 Min In MiliSecond

        let options = [
            'Success',
            'Paid'
        ]
        let robbed = random(0, parseInt(options.length))
        let final = options[robbed]
        const robtime = db.fetch(`robtime_${user.id}`)

        if(robtime !== null && timeout - (Date.now() - robtime) > 0) { // CoolDown
            const timeleft = ms(timeout - (Date.now() - robtime))

            const embed = new MessageEmbed()
            .setAuthor(`${user.user.username} Robbed`, user.user.displayAvatarURL({ dynamic: true }))
            .setTimestamp()
            .setColor('RANDOM')
            .setDescription(`
            You cannot commit a crime for **${timeleft.hours} Hours **${timeleft.minutes} Minutes** **${timeleft.seconds} Seconds**
            `)
            message.channel.send(embed)
        } else {
            if(usermoney < 2000) return message.reply(`You need atleast $2000 in your wallet to rob someone`) // If User Money In Wallet Is Less Then 2000
            else if(mentionmoney < 0) return message.reply(`Mentioned user doesnot have money in wallet`) // If Mentioned User Money In Wallet Is 0
           // else if(user = mention) return message.reply(`You can't rob yourself idiot`)
            else if(mentionmoney < 2000) return message.reply(`Mentioned user should have atleast $2000 in wallet to rob`) // If Mentioned User Money In Wallet Is Less Then 2000
            else {
                if(final === 'Success') {
                    
                    var perc = Math.floor(Math.random() * 40) + 10 // Min Is 100 And Max Is 1500(100+1400)



                    prova = (perc*mentionmoney)
                    amount = prova/100


                    let tuamadre = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amount)

                    const embed = new MessageEmbed()
                    .setAuthor(`${user.user.username} Robbed`, user.user.displayAvatarURL({ dynamic: true }))
                    .setTimestamp()
                    .setColor('RANDOM')
                    .setDescription(`
<@${user.id}> robbed <@${mention.id}> and got away with **${tuamadre}**
                    `)
                    message.channel.send(embed)
                    db.add(`money_${user.id}`, amount) // Add Money To User's Wallet
                    db.subtract(`money_${mention.id}`, amount) // Substract Money From Mention(Robbed) User's Wallet
                    db.set(`robtime_${user.id}`, Date.now()) // Set CoolDown
                    let bal = await db.fetch(`money_${user.id}`)




                    let balu = await db.fetch(`money_${mention.id}`)
                    if(balu === null) balu = 0 
            
                    let banku = await db.fetch(`bank_${mention.id}`) 
                    if(banku === null) banku = 0 
            
                    let totu = await db.fetch(`total_${mention.id}`)
                    totu = banku+balu
            
            
                    let totalu = db.set(`total_${mention.id}`, totu)



        if(bal === null) bal = 0 

        let bank = await db.fetch(`bank_${user.id}`) 
        if(bank === null) bank = 0 

        let tot = await db.fetch(`total_${user.id}`)
        tot = bank+bal


        let totale = db.set(`total_${user.id}`, tot)
                }else if(final === 'Paid') {
                    


                    var perc = Math.floor(Math.random() * 40) + 10 // Min Is 100 And Max Is 1500(100+1400)

                    prova = (perc*mentionmoney)
                    amount = prova/100


                    let tuopadre = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amount)

                    const embed2 = new MessageEmbed()
                    .setAuthor(`${user.user.username} Robbed`, user.user.displayAvatarURL({ dynamic: true }))
                    .setTimestamp()
                    .setColor('RANDOM')
                    .setDescription(`
<@${user.id}> Robbed <@${mention.id}> but was caught and had to pay **${tuopadre}** to <@${mention.id}>
                    `)
                    message.channel.send(embed2)
                    db.add(`money_${mention.id}`, amount) // Add Money Mentioned(Robbed) User's Wallet
                    db.subtract(`money_${user.id}`, amount) // Substract Money From User's Wallet
                    db.set(`robtime_${user.id}`, Date.now()) // Set CoolDown
                    
                    
        let bal = await db.fetch(`money_${mention.id}`)
        if(bal === null) bal = 0 

        let bank = await db.fetch(`bank_${mention.id}`) 
        if(bank === null) bank = 0 

        let tot = await db.fetch(`total_${mention.id}`)
        tot = bank+bal


        let totale = db.set(`total_${mention.id}`, tot)




        let balo = await db.fetch(`money_${user.id}`)
        if(balo === null) balo = 0 

        let banko = await db.fetch(`bank_${user.id}`) 
        if(banko === null) banko = 0 

        let toto = await db.fetch(`total_${user.id}`)
        toto = banko+balo


        let totaleo = db.set(`total_${user.id}`, toto)
                }
            }
        }
    }
}