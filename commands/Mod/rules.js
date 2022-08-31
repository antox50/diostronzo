const Discord = require('discord.js');

const Embed = new Discord.MessageEmbed()

module.exports = {
    commands: 'lul', // You Can Keep Any Name


    callback: async (message, args) => {

      


        const newEmbede = new Discord.MessageEmbed()
        .setColor('#000001')
        .setTitle('ㅤㅤㅤㅤㅤ ㅤ<a:S18_blackbow2:999988937655328808>   Goddess Hub Rules <a:S18_blackbow2:999988937655328808>  ')
        .addFields(
            {name: '<a:S18_heartwhiteheart:1004750424424857730>   ***1.***', value: 'Follow Discord Guidelines and Terms of Service.'},
            {name: '<a:S18_heartwhiteheart:1004750424424857730>   ***2.***', value: 'This is an 18+ server, if you are below the age of 18 we kindly ask you to leave the server, otherwise, you will simply be kicked/banned.'},
            {name: '<a:S18_heartwhiteheart:1004750424424857730>   ***3.***', value: 'This is a Femdom server, which means its about Female Domination. All Females will be worshipped and treated better than others here. Males are submissive and nothing other than that.'},
            {name: '<a:S18_heartwhiteheart:1004750424424857730>   ***4.***', value: 'Be respectful. Having fun and joking around is totally fine as long as both sides are okay with it. Please dont get stuff out of your hands. As a submissive, know your place before Dominants.'},
            {name: '<a:S18_heartwhiteheart:1004750424424857730>   ***5.***', value: 'Respect the roles. If someone is taken/collared respect it. Dont forcefully try to dom an owned submissive. Respect the DMs roles, if someone has their DM Status as Ask to Dm, do not do them without asking first. The same goes for people with DMs closed role, Just simply dont DM them.'},
            {name: '<a:S18_heartwhiteheart:1004750424424857730>   ***6.***', value: 'Please ask for DMing permission in the dedicated channel.'},
            {name: '<a:S18_heartwhiteheart:1004750424424857730>   ***7.***', value: 'Selling anything or advertising is strictly prohibited by anyone. Do not post any Server link anywhere on the server. Dont post anything advertising related.'},
            {name: '<a:S18_heartwhiteheart:1004750424424857730>   ***8.***', value: 'Respect everyone. Dont kink shame, dont make fun of everyone and respect everyone who is new to Femdom, BDSM. Everyone starts from somewhere.'},
            {name: '<a:S18_heartwhiteheart:1004750424424857730>   ***9.***', value: 'Respect titles and pronunciations. Address a dominant with their titles. If a dominant is okay with you not addressing them always or anything, thats fine but if any dominant demands to be addressed properly by the subs, make sure you always use honorifics when talking to them.'},
            {name: '<a:S18_heartwhiteheart:1004750424424857730>   ***10.***', value: 'About you not being able to chat on the server. You need to type a code somewhere in the server to get access to the server. write +enter to get full access of the server. Not sure in which channel to type the code in? continue reading the rules properly and you will get the answer.'},
            {name: '<a:S18_heartwhiteheart:1004750424424857730>  ***11.***', value: 'Do not troll. There is a difference between being a Brat and having fun and being an absolute annoying troll. This kind of behaviour will not be tolerated and the user will end up being kicked.'},
            {name: '<a:S18_heartwhiteheart:1004750424424857730>   ***12.***', value: 'Respect Limits. If someone is not comfortable with something dont force them to do the thing. This server is mostly for roleplaying purposes but some submissive and dominant might be into IRL things also. We request you to do such things with people who are comfortable doing it.'},
            {name: '<a:S18_heartwhiteheart:1004750424424857730>   ***13.***', value: 'This server is only about Femdom. No male can be dom or switch here. Dominant and Switch roles are only for females. If you are a male switch-leaning sub, you can mention it in the introduction.'},
            {name: '<a:S18_heartwhiteheart:1004750424424857730>   ***14.***', value: 'This server is about Roleplaying, hanging out and having fun basically so we hope you enjoy your time here. Ohh also, add the word "server" after the code you previously read up in the rules and type it in the waiting room.'},
            {name: '<a:S18_heartwhiteheart:1004750424424857730>   ***15.***', value: 'If any Dominant ends up owning multiple subs, and some of their subs are feeling like they are feeling ignored and not being given enough time as they expect. Overall not happy being owned by their owner, we have a 72 hours rule. Subs are allowed to be free after 72 hours. Only if their Dominant ignores them for that amount of time straight. If someone goes on a break from discord for a few days, this rule will not be effective.'}

        )
        .setImage('https://cdn.discordapp.com/attachments/988174925347045444/1011602419387473940/ghfinal2.jpg');

        message.channel.send(newEmbede);
    }
}




