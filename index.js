const Discord = require('discord.js');
const client = new Discord.Client({ partials: ['MESSAGE', 'CHANNEL', 'REACTION'] });;

client.queue = new Discord.Collection(); // Add This

const { prefix, token } = require('./config.json')
const welcome = require('./commands/Mod/welcome');
const loadCommands = require('./commands/load-commands');
const lb = require('./commands/Economy/lb');
const lbc = require('./commands/Economy/lbcash');














client.once('ready', () => {
    console.log('Ready.')


    setInterval(() => {
        const statuses = [
            `Arean's server`,


   
        ]

        const status = statuses[Math.floor(Math.random() * statuses.length)]
        client.user.setActivity(status, { type: "WATCHING"}) // Can Be WATCHING, STREAMING, LISTENING
    }, 10000) // Second You Want to Change Status, This Cahnges Every 2 Seconds

    welcome(client)
    loadCommands(client)
    lb(client)
    lbc(client)

   
  



})




// Add This
client.on('voiceStateUpdate', (old, New) => {
    if(old.id !== client.user.id) return
    if(old.channelID && !New.channelID) client.queue.delete(old.guild.id)
})















client.login(token)

