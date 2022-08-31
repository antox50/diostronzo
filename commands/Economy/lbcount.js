const { MessageEmbed } = require('discord.js')
const db = require('quick.db')
const ms = require('parse-ms') // npm i parse-ms@2.1.0
const { Capitalize } = require('tech-tip-cyber') // npm i tech-tip-cyber@latest


module.exports = {
    commands: ['lb'],




callback: async(message, args) => {

    const user = message.member
    let balo = await db.fetch(`money_${user.id}`)
    if(balo === null) balo = 0 

   

    let bank = await db.fetch(`bank_${user.id}`) 
    if(bank === null) bank = 0 

    let tot = await db.fetch(`total_${user.id}`)
    tot = bank+balo


     totale = db.set(`total_${user.id}`, tot)
    }

}