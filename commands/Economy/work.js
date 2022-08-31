const { MessageEmbed, Guild } = require('discord.js')
const db = require('quick.db') // npm i quick.db
const ms = require('parse-ms') // npm i parse-ms



module.exports = {
    commands: ['work'], 
    description: 'work For Money', 



    
    callback: async (message, args, client) => {

        
        const user = message.member
        const random = (min, max) => {
            return Math.floor(Math.random() * (max - min) ) + min
        }

        const timeout = 300000 // 1 Min In MiliSecond
        const amount = Math.floor(Math.random() * 200) + 100  // max and min




        let acts = [ // Find More Names In Description
            ' You cleaned God Arean shoe, she pays you <a:coinsss:999019242345218068> ',
            'You made some coffee for Mistress Emily, she give you a small tip. <a:coinsss:999019242345218068> ',
            'You cleaned God Arean bathroom, she paid you <a:coinsss:999019242345218068>' ,
            'You help Antox clean God Arean bedroom and he gives you <a:coinsss:999019242345218068>',
            'You helped Goddess Polina, she pays you <a:coinsss:999019242345218068>',
            'God Arean slapped you, you earned <a:coinsss:999019242345218068>',
        ]
        
        const act = Math.floor(Math.random() * acts.length) // To Get Random Name
        

 
        
        const colo = Math.floor(Math.random() * acts.length)


        let options = [
            'Success',
        ]
        let begged = random(0, parseInt(options.length))
        let final = options[begged]
        const begtime = await db.get(`work-time_${user.id}`) 

        if(begtime !== null && timeout - (Date.now() - begtime) > 0) {
            const timeleft = ms(timeout - (Date.now() - begtime))

            const embed = new MessageEmbed()
            .setAuthor(`${user.user.username}`, user.user.displayAvatarURL({ dynamic: true }))
            .setTimestamp()
            .setColor('000000')
            .setDescription(`
            You cannot work for ${timeleft.minutes}m ${timeleft.seconds}s
            `)
            message.channel.send(embed)
        } else {
            if(final === 'Success') {

           //     const give = Math.floor(Math.random() * gave.length)
               
                db.add(`money_${user.id}`, amount)
                const embed1 = new MessageEmbed()
                .setAuthor(`${user.user.username} Begged`, user.user.displayAvatarURL({ dynamic: true }))
                .setTimestamp()
                .setColor('#1DB231')
                .setDescription(`${acts[act]} $${amount}
                `)
                message.channel.send(embed1)
                db.set(`work-time_${user.id}`, Date.now())




                

        }}
        let bal = await db.fetch(`money_${user.id}`)
        if(bal === null) bal = 0 

        let bank = await db.fetch(`bank_${user.id}`) 
        if(bank === null) bank = 0 

        let tot = await db.fetch(`total_${user.id}`)
        tot = bank+bal


        let totale = db.set(`total_${user.id}`, tot)



      
      
    }

    


}
