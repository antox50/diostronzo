const Discord = require('discord.js');

const Embed = new Discord.MessageEmbed()

module.exports = {
    commands: 'dio', // You Can Keep Any Name


    callback: async (message, args) => {

      


        const newEmbede = new Discord.MessageEmbed()
        .setColor('#030007')
        .setTitle('<a:S18_blackbow2:999988937655328808> Rules about Collared (Owned) submissives/switches <a:S18_blackbow2:999988937655328808>  ')
        .addFields(
            
         {name: '<a:S18_heartwhiteheart:1004750424424857730>   ***6.***', value: 'Dominants can give further instructions and it should be in their Dom introduction. Please don not tell your submissives to not listen to other Dominants. This is a femdom-related server, you might not be online always and your submissive can be on the server texting with other Dominants in the general chat. They are expected to show respect, address their superiors with their titles and do as they are told as long as it is under a limit. If any Dominant ends up crossing a limit with an already owned submissive, the sub should not argue with the dominant instead try to say nicely that they are not allowed to do the thing by their owner or they do not feel comfortable doing it. Still if the Dominant forces it, the submissive can either do it just to avoid arguing with the Dominant or, the submissive will get in contact with their owner or immediately let a staff member know if their owner is offline that they do not feel comfortable and give a proper reason why they could not do the task given by the Dominant. Staff members will take the necessary steps. '},
         {name: '<a:S18_heartwhiteheart:1004750424424857730>   ***6.***', value: 'Steps taken by the staff members will be final. Since most of them being a submissive or switch, we would like everyone to accept the decision taken by staff members in an OOC way.'},
        )
        .setImage('https://media.discordapp.net/attachments/997234158122319872/997234239059804260/GH.jpg?width=1246&height=701');

        message.channel.send(newEmbede);
    }
}