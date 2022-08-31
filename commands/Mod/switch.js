const Discord = require('discord.js');

const Embed = new Discord.MessageEmbed()

module.exports = {
    commands: 'bah', // You Can Keep Any Name


    callback: async (message, args) => {

      


        const newEmbede = new Discord.MessageEmbed()
        .setColor('#030007')
        .setTitle('<a:S18_blackbow2:999988937655328808> Rules about Collared (Owned) submissives/switches <a:S18_blackbow2:999988937655328808>  ')
        .addFields(
            {name: '<a:S18_heartwhiteheart:1004750424424857730>   ***1.***', value: 'Collared subs are still submissive. They are below Switches and Dominants. Even if they are collared they are expected to show respect to their superiors. Just because a submissive is collared, does not mean it gets the right to disrespect any other Dominant. This kind of behaviour will not be tolerated'},
            {name: '<a:S18_heartwhiteheart:1004750424424857730>   ***2.***', value: 'Submissives/ Switches who have the collared role, meaning they are owned by a dominant has no right to decline another Dominants punishment. If any other Dominant feels like they have committed a mistake which is worthy of being punished by giving them a doable task, the submissive must complete the task.'},
            {name: '<a:S18_heartwhiteheart:1004750424424857730>   ***3.***', value: 'If any Dominant dislikes having their submissives be dommed by other Dominants, please make sure they show proper respect at least to other dominants. At the end of the day, they are still submissives, inferior to other dominants. '},
            {name: '<a:S18_heartwhiteheart:1004750424424857730>   ***4.***', value: 'If any submissive end up disrespecting any Dominant then refuses to do the punishment given by the Dominant using the excuse of not being subby for others but their owner will not be accepted, you must complete the task given by the Dominant you disrespected after you can report to your owner, she will take care of it. As a submissive, you hold no right to argue with your superior.'},
            {name: '<a:S18_heartwhiteheart:1004750424424857730>   ***5.***', value: 'As a Dominant, when you give punishment to an already owned submissive, please keep in mind some Dominants tell their submissives not to sub to other Dominants. But if any submissive ends up doing something worthy of punishment, lets say lines, maximum of 50 lines can be given as the punishment. Sometimes some Dominants might even demand money from their wallet (Server Virtual Economy) The maximum amount of money the dominant can ask for is 15% of their Total money. If the Dominant is not satisfied after these punishments also, they can report to the Submissives owner and She will take care of it. '},
            {name: '<a:S18_heartwhiteheart:1004750424424857730>   ***6.***', value: 'Doms can give further instructions and it should be in their Dom introduction. Please don not tell your subs to not listen to other Doms. This is a femdom server, you might not be online always and your sub can be on the server texting with other Doms in the general chat. They are expected to show respect, address their superiors with their titles and do as they are told as long as it is under a limit. If any Doms ends up crossing a limit with an already owned submissive, the sub should not argue with the Dom instead try to say nicely that they are not allowed to do the thing by their owner or they do not feel comfortable doing it. Still if the Dom forces it, the Sub can either do it just to avoid arguing with the Dom or, the Sub will get in contact with their owner or immediately let a staff member know if their owner is offline that they do not feel comfortable and give a proper reason why they could not do the task given by the Dom. Staff members will take the necessary steps. '},
            {name: '<a:S18_heartwhiteheart:1004750424424857730>   ***7.***', value: 'Steps taken by the staff members will be final. Since most of them being a submissive or switch, we would like everyone to accept the decision taken by staff members in an OOC way.'},
        )
        .setImage('https://cdn.discordapp.com/attachments/988174925347045444/1011602419387473940/ghfinal2.jpg');

        message.channel.send(newEmbede);
    }
}




