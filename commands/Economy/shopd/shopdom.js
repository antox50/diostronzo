const { MessageEmbed } = require('discord.js')
const db = require('quick.db') // npm i quick.db

module.exports = {
    commands: ['shopd', 'shopdom', 'domshop'], // You Can Keep Any Name
    description: 'See Items In Shops', // Optional

    callback: async(message, args, client) => {

        const prefix = db.fetch(`prefix_${message.guild.id}`)

        const embed = new MessageEmbed()
        .setAuthor(' Femdom shop for Doms 👠')
        .setTimestamp()
        .setColor('RED')
        .setDescription(`Use command buy<item-name>
**NOTE:**
Ping staff to buy one of the last 3 Items

<a:flyingbills:1009133723628883999> **45,000 - Diva**
Buy this item to get the role "Diva" and earn 3,500 every 4 hours.

<a:flyingbills:1009133723628883999> **65,000 - Superior**
Buy this item to get the role "Superior" and earn 6,500 every 4 hours.

<a:flyingbills:1009133723628883999> **120,000 - Heavenly**
Buy this item to get the role "Heavenly" and earn 10,000 every 4 hours.

<a:flyingbills:1009133723628883999> **270,000 - Ethereal**
Buy this item to get the role "Ethereal" and earn 14,000 every 4 hours.

<a:flyingbills:1009133723628883999> **350,000 - Seductress**
Buy this item to get the role "Seductress" and earn 17,000 every 4 hours.




<a:flyingbills:1009133723628883999> **600,000 - Custom Channel**
Note: After you buy this item, you are expected to pay a weekly rent of 250,000 to
the server Owner **God Arean**. The channel will be visible under the Prayer Category.
(Goddesses who already have a Custom channel, don't have to pay the buying amount.
Only the weekly rent is expected to be paid every week from now.)
__Every time you buy a channel, the next one's price will increase by 15%__

<a:flyingbills:1009133723628883999> **300,000 - Custom Role**
From now Dominants and Goddesses can buy custom roles for themselves or even
for their submissives. Multiple roles can be bought. All you need to do is pay the
Server Owner **God Arean** the price amount, and give her a colour code and the
name of the role you wish to have.
__Every time you buy a role, the next one's price will increase by 35%__

<a:flyingbills:1009133723628883999> **2,000,000 - Custom Category**
Dominants and Goddesses can now buy their own separated category from now.
After saying the price 2,000,000 you will receive your own category, but it will still
remain empty. You will then have to buy channels for it separately.
__Every time you buy a role, the next one's price will increase by 50%__
`)
        .setFooter('Shop')
        message.channel.send(embed)
    }
}