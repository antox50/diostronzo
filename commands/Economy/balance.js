const { MessageEmbed } = require('discord.js')
const db = require('quick.db') // npm i quick.db
var currencyFormatter = require('currency-formatter');



module.exports  = {
    commands: ['balance', 'bal'], // You Can Keep Any Name
    description: 'Check Your Balance' , // Optional

    callback: async (message, args) => {

        const user = message.mentions.members.first() || message.guild.members.cache.find(member => member.user.username.toLowerCase() === args.join(" ").toLowerCase()) || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(member => member.displayName.toLowerCase() === args.join(" ").toLowerCase()) || message.member


        


        let bal = await db.fetch(`money_${user.id}`)
        if(bal === null) bal = 0 
   
       

        let bank = await db.fetch(`bank_${user.id}`) 
        if(bank === null) bank = 0 

        let tot = await db.fetch(`total_${user.id}`)
        tot = bank+bal


         totale = db.set(`total_${user.id}`, tot)





         let ciao = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(bal)
         let ciao1 = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(bank)
         let ciao2 = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(tot)
      
       

        const embed = new MessageEmbed()
        .setAuthor(`${user.user.username} Balance`, user.user.displayAvatarURL({ dynamic: true }))
        .setTimestamp()
        .setColor('RANDOM')
        .setDescription(`<a:flyingbills:1009133723628883999> Wallet: **${ciao}** 
<a:Bankcard:1009133847058845796> Bank: **${ciao1}** 
<a:moneybagg:1009134293961936946> Total: **${ciao2}** 


        `)
        message.channel.send(embed)
    } // Keep Any Money Symbol, I kept $ Because Its Easy To Write Here
}

