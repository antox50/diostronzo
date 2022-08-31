const { MessageEmbed } = require('discord.js')
const moment = require('moment') // npm i moment
moment.locale('ENG')

module.exports ={
    commands: ['userinfo', 'user-info', 'ui', 'memberinfo', 'member-info', 'mi'], // You Can Keep Any Name
    description: 'Shows User Info About A User or Pinged User.', // Optional

    callback: (message, args) => {

        const member = message.mentions.members.first() || message.member
        // For Status Of User, We Will Use Emoji To Look Nice
        const status = {
            online: '🟢:- Online',
            idle: '🟡:- Idle',
            dnd: '🔴:- DND',
            offline: '⚫:- Offline'
        }

        const embed = new MessageEmbed()
        .setColor('RANDOM')
        .setTitle(`User Info Of ${member.user.username}`, member.user.displayAvatarURL())
        .setThumbnail(member.user.displayAvatarURL({dynamic: true, size: 512}))
        .addField(':tlwHeart_Blue:  **User-Name**', `${member.user.username}#${member.user.discriminator}`) // We Use Emojis Also
        .addField('<a:tlwHeart_Red:1008690176173822032> **User ID**', `${member.id}`)
        .addField('<a:tlwHeart_Yellow:1008690205374550046> **Status**', `${status[member.presence.status]}`)
        .addField('<a:whiteheartdrip:1008696454447120424> **Account Created**', `${moment.utc(member.user.createdAt).format('LLLL')}`)
        .addField('<:whitearrowsup:1008696475796115528> **Joined Server**', `${moment.utc(member.joinedAt).format('LLLL')}`)
        .addField('<a:pflameaqua:1008690147505737848>  **VC**', member.voice.channel ? member.voice.channel.name + `(${member.voice.channel.id})` : 'Not In A VC')
        .addField('<a:BowPurpleCute:1008690127150788669>  **Roles**', `${member.roles.cache.map(role => role.toString())}`, true)
        // Add More Fields If Want
        message.channel.send(embed)
    }
}