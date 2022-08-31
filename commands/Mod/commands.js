const Discord = require('discord.js');

const Embed = new Discord.MessageEmbed()

module.exports = {
    commands: 'commands', // You Can Keep Any Name


    callback: async (message, args) => {

      


        const newEmbede = new Discord.MessageEmbed()
        .setColor('#000001')
        .setTitle('<a:S18_blackbow2:999988937655328808>Bot commands<a:S18_blackbow2:999988937655328808>')
        .setDescription(`
<a:S18_heartwhiteheart:1004750424424857730>   ***1.*** Work/slut/crime/ commands.
***Usage:***
+work
+slut
+crime
<a:S18_heartwhiteheart:1004750424424857730>   ***2.*** Robbing command.
***Usage:***
+rob <user> 
Note: 2 hours cooldown.
<a:S18_heartwhiteheart:1004750424424857730>   ***3.*** Payments/Donations.
***Usage:***
+pay <user> <amount>
+donate <user> <amount>
<a:S18_heartwhiteheart:1004750424424857730>   ***4.*** Leaderboards.
***Usage:***
+lb
+leaderboard
+lb-cash 
<a:S18_heartwhiteheart:1004750424424857730>   ***5.*** Deposit/Withdraw
***Usage:***
+dep <amount>
+deposit <amount>
+with <amount>
+withdraw <amount>
<a:S18_heartwhiteheart:1004750424424857730>   ***6.*** Collect
***Usage:***
+collect
<a:S18_heartwhiteheart:1004750424424857730>   ***7.*** Shops.
***Usage:***
+subshop
+domshop
+buy <item-name>
        `)
   //     .setImage('https://cdn.discordapp.com/attachments/988174925347045444/1011602419387473940/ghfinal2.jpg');

        message.channel.send(newEmbede);
    }
}