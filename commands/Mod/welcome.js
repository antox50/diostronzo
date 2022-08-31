const { MessageEmbed, Message } = require("discord.js")

module.exports = (client) => {
    const welcomechannelId = '997095031246688326' //Channel You Want to Send The Welcome Message
    const targetChannelId = `997096584695259206` //Channel For Rules

    client.on('guildMemberAdd', (member) => {
        console.log(member) // If You Want The User Info in Console Who Joined Server Then You Can Add This Line. // Optional
        const channel = member.guild.channels.cache.get(welcomechannelId)

         
            channel.send(`Hello <@${member.id}>`);
        
        const embed = new MessageEmbed()
        .setAuthor(`${member.user.username}`,member.user.displayAvatarURL({dynamic: true, size: 512}))
        .setTitle(`<a:stella:1008677346217304084> ────── Welcome to Goddess Hub ──────<a:stella:1008677346217304084> `)
        .setDescription(`<a:S18_heartwhiteheart:1004750424424857730>   Get your <#997084816715546745> \n <a:S18_heartwhiteheart:1004750424424857730>   Read the <#997096584695259206> \n <a:S18_heartwhiteheart:1004750424424857730>  Post your introduction \n <:dtt:1008680578566082592>   <#997097077857341440> \n <:4lscollar:997830092275331112>   <#997097485396881439> \n \n <a:stella:1008677346217304084>   ───────── Enjoy your stay here. ───────── <a:stella:1008677346217304084>  `)
       .setImage('https://cdn.discordapp.com/attachments/988174925347045444/1011602419387473940/ghfinal2.jpg')
        .setColor('000000')
    channel.send(embed)
        
    })


    const leavechannelId = '997095031246688326' //Channel You Want to Send The Leave Message

    client.on('guildMemberRemove', (member) => {
        // You Can Do The Same For Leave Message
        const leavemessage = `**${member.user.username}** Just Left Server.`

        const channel1 = member.guild.channels.cache.get(leavechannelId)
        channel1.send(leavemessage)
    })
}