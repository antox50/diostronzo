const { MessageEmbed } = require('discord.js')
const db = require('quick.db') // npm i quick.db

module.exports = {
    commands: ['shops', 'shopsub', 'subshop'], // You Can Keep Any Name
    description: 'See Items In Shops', // Optional

    callback: async(message, args, client) => {

        const prefix = db.fetch(`prefix_${message.guild.id}`)

        const embed = new MessageEmbed()
        .setAuthor(' Femdom shop for Subs ')
        .setTimestamp()
        .setColor('2AAEDC')
        .setDescription(`Use command buy<item-name>

<a:flyingbills:1009133723628883999> **6,000 - trash**
buy this item to get the role trash and earn 500 every 4 hours


<a:flyingbills:1009133723628883999> **8,000 - mutt**
buy this item to get the role mutt and earn 1000 every 4 hours
   

<a:flyingbills:1009133723628883999> **13,000 - brat**
buy this item to get the role brat and earn 2200 every 4 hours


<a:flyingbills:1009133723628883999> **24,000 - human-seat**
buy this item to get the role human-seat and earn 3500 every 4 hours


<a:flyingbills:1009133723628883999> **45,000 - foot-rest**
buy this item to get the role foot-rest and earn 5300 every 4 hours


<a:flyingbills:1009133723628883999> **84,000 - pitiful**
buy this item to get the role pitiful and earn 7500 every 4 hours


<a:flyingbills:1009133723628883999> **150,000 - inferior**
buy this item to get the role inferior and earn 12000 every 4 hours  
`)

        .setFooter('Shop')
        message.channel.send(embed)
    }
}