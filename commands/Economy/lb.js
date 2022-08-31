const { MessageEmbed } = require('discord.js')
const db = require('quick.db')








module.exports = (client) => {




    client.on('message', message => {
        const prefix = "+" // For Using Command
        if(message.content === `${prefix}lb`) {
            

    
            setTimeout(function(){ 



                
            let tot = db.all().filter(data => data.ID.startsWith(`total_`)).sort((a, b) => b.data - a.data) // Get Users Money(Wallet), You Can Change To Bank
            tot.length = 10 // Top 10
            var finalLb = ""
            for(var i in tot) {
                finalLb += `**${tot.indexOf(tot[i])+1}.** ${client.users.cache.get(tot[i].ID.slice(6))} **·** \`$${tot[i].data.toLocaleString()}\`\n` // 6 Because `money_` Is 5 Digit and 6th Digit Is User ID
            }

            // Sending As Embed
            const embed = new MessageEmbed()
            .setAuthor('Goddess Hub top 10 Leaderboard', client.user.displayAvatarURL({ dynamic: true }))
            .setTimestamp()
            .setColor('000000')
            .setDescription(`
${finalLb}
            `)
            message.channel.send(embed)




        }, 1)
        }




        
    })
}




