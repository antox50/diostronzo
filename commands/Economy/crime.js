const { MessageEmbed } = require('discord.js')
const db = require('quick.db') // npm i quick.db
const ms = require('parse-ms') // npm i parse-ms


module.exports = {
    commands: ['crime'], 
    description: 'crime For Money', 


    callback: async (message, args) => {

        const user = message.member
        const random = (min, max) => {
            return Math.floor(Math.random() * (max - min) ) + min
        }

        const timeout = 300000 // 1 Min In MiliSecond
        const amount = Math.floor(Math.random() * 250) + 100  // max and min




        let actps = [ 
            'You commit a crime for <a:coinsss:999019242345218068>',

            ]
    
            let actns = [
                'they found you and you have to pay <a:coinsss:999019242345218068>',
    
            ]
            const actn = Math.floor(Math.random() * actns.length)
            const actp = Math.floor(Math.random() * actps.length)
        

        let options = [
            'Success',
            'Failed',
        ]
        let begged = random(0, parseInt(options.length))
        let final = options[begged]
        const begtime = await db.get(`crime-time_${user.id}`) 

        if(begtime !== null && timeout - (Date.now() - begtime) > 0) {
            const timeleft = ms(timeout - (Date.now() - begtime))

            const embed = new MessageEmbed()
            .setAuthor(`${user.user.username} `, user.user.displayAvatarURL({ dynamic: true }))
            .setTimestamp()
            .setColor('000000')
            .setDescription(`
you can use this command in ${timeleft.minutes}m ${timeleft.seconds}s 

Default CoolDown Is **5 Minutes**
            `)
            message.channel.send(embed)
        } else {
            if(final === 'Success') {

           //     const give = Math.floor(Math.random() * gave.length)
               
                db.add(`money_${user.id}`, amount)
                const embed1 = new MessageEmbed()
                .setAuthor(`${user.user.username} `, user.user.displayAvatarURL({ dynamic: true }))
                .setTimestamp()
                .setColor('#1DB231')
                .setDescription(`**${actps[actp]}** **$${amount}** 
                `)
                message.channel.send(embed1)
                db.set(`crime-time_${user.id}`, Date.now())


                let bal = await db.fetch(`money_${user.id}`)
                if(bal === null) bal = 0 
            
                let bank = await db.fetch(`bank_${user.id}`) 
                if(bank === null) bank = 0 
            
                let tot = await db.fetch(`total_${user.id}`)
                tot = bank+bal
            
            
                let totale = db.set(`total_${user.id}`, tot)
                



        } else if(final === 'Failed') {
            db.subtract(`money_${user.id}`, amount)
                const embed1 = new MessageEmbed()
                .setAuthor(`${user.user.username} `, user.user.displayAvatarURL({ dynamic: true }))
                .setTimestamp()
                .setColor('#B83A0A')
                .setDescription(`**${actns[actn]}** **$${amount}** 
                `)
                message.channel.send(embed1)
                db.set(`crime-time_${user.id}`, Date.now())


                let bal = await db.fetch(`money_${user.id}`)
    if(bal === null) bal = 0 

    let bank = await db.fetch(`bank_${user.id}`) 
    if(bank === null) bank = 0 

    let tot = await db.fetch(`total_${user.id}`)
    tot = bank+bal


    let totale = db.set(`total_${user.id}`, tot)
        }
    }
    
    }}
