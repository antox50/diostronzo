const Discord = require('discord.js');

const Embed = new Discord.MessageEmbed()

module.exports = {
    commands: 'gamecommands', // You Can Keep Any Name


    callback: async (message, args) => {

      


        const newEmbede = new Discord.MessageEmbed()
        .setColor('#000001')
        .setTitle('<a:S18_blackbow2:999988937655328808>Game commands<a:S18_blackbow2:999988937655328808>')
        .setDescription(`
<a:S18_heartwhiteheart:1004750424424857730>   ***1.*** Dice-Roll
***Usage:***
+dr <guess 1-6> <amount>
+dice <guess 1-6> <amount>
+diceroll <guess 1-6> <amount>
        
<a:S18_heartwhiteheart:1004750424424857730>   ***2.*** Roulette
***Usage:***
+rl <black/red> <amount>
+roulette  <black/red> <amount>
        
<a:S18_heartwhiteheart:1004750424424857730>   ***3.*** Slot-Machine
***Usage:***
+sl <amount>
+slot <amount>
`)
   //     .setImage('https://cdn.discordapp.com/attachments/988174925347045444/1011602419387473940/ghfinal2.jpg');

        message.channel.send(newEmbede);
    }
}