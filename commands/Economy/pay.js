const { MessageEmbed } = require('discord.js')
const db = require('quick.db')

module.exports = {
    commands: ['pay', 'donate', 'give'], // You Can Keep Any Name


    callback : async (message, args)  => {


        const member = message.member
        const user = message.mentions.members.first() || message.guild.members.cache.get(args[0])
        if(!user) return message.reply('Whom you want to give money?') // if No User Is Mentioned(Using ID/Ping)
        let balo = await db.fetch(`money_${member.id}`)
        let money = args[1]
        


        if(money === 'all') {  // If Someone Does `+dep all` All Money To Bank
            money = balo    
        }


        let moneymore = new MessageEmbed()
    .setColor("#FFFFFF")
    .setDescription(`<:S18_whitexx:1009845731038871712> ${member} You don't have enough money in your wallet.`);
        if(balo < money) return message.reply(moneymore)
        


        if(!money) return message.reply('how much **$** you want to give?')
        if(isNaN(money)) return message.reply(`Amount is not a number`)
        


        let ciao = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(money)

        db.add(`money_${user.id}`, money) // Same As balance.js // `bank_${user.id}` Keep This If You Want To Add To Bank

        db.subtract(`money_${member.id}`, money)



        const embed = new MessageEmbed()
        .setAuthor(`${user.user.username} Added Money`, user.user.displayAvatarURL({ dynamic: true }))
        .setTimestamp()
        .setColor('RANDOM')
        .setDescription(`
 ${member} added **${ciao}** To <@${user.id}>
        `)


        message.channel.send(embed)









        let balu = await db.fetch(`money_${user.id}`)
    if(balu === null) balu = 0 

    let banku = await db.fetch(`bank_${user.id}`) 
    if(banku === null) banku = 0 

    let totu = await db.fetch(`total_${user.id}`)
    totu = banku+balu


    let totalu = db.set(`total_${user.id}`, totu)








    let bala = await db.fetch(`money_${member.id}`)
    if(bala === null) bala = 0 

    let banka = await db.fetch(`bank_${member.id}`) 
    if(banka === null) banka = 0 

    let tota = await db.fetch(`total_${member.id}`)
    tota = banka+bala


    let totala = db.set(`total_${member.id}`, tota)
    }


    



}