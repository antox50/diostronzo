const { MessageEmbed } = require('discord.js')
const db = require('quick.db')
const ms = require('parse-ms') // npm i parse-ms@2.1.0
const { Capitalize } = require('tech-tip-cyber') // npm i tech-tip-cyber@latest

module.exports = {
    commands: ['roulette', 'roul', 'rl'], // You Can Keep Any Name
    description: 'Flip Coin ANd Earn $', // Optional
    

    callback: async(message, args, client) => {

        const user = message.member
        const ht = args[0] 
        if(!ht) return message.reply(`you must specify black or red`) // If No heads Or tails Provided
        let amount = args[1]
        if(!amount) return message.reply(`you must specify the ammount`) // If No Amount Provided
        let bal = db.fetch(`money_${user.id}`)
        
        const coin = ['black', 'red'] // Coin Options

        const timeout = 30000 // 120000 = 2 Mins
        const coinfliptime = db.fetch(`coinfliptime_${user.id}`)
        if(coinfliptime !== null && timeout - (Date.now() - coinfliptime) > 0) { // CoolDown
            const timeleft = ms(timeout - (Date.now() - coinfliptime))

            const embed = new MessageEmbed()
            .setAuthor(`${user.user.username} Roulette result `, user.user.displayAvatarURL({ dynamic: true }))
            .setTimestamp()
            .setColor('RANDOM')
            .setDescription(`
Try your luck in **${timeleft.minutes} Minutes ${timeleft.seconds} Seconds**
            `)
            message.channel.send(embed)
        } else {



            if(args[1] === 'all') {  // If Someone Does `+dep all` All Money To Bank
        
                amount = bal
        
        
                
        
        
                
            }




            let moneymore = new MessageEmbed()
    .setColor("#FFFFFF")
    .setDescription(`<:S18_whitexx:1009845731038871712> ${user} You're broke af, beg your superior for some money or earn some before trying again later.`);

            if(!coin.includes(ht)) return message.reply(`It should be black or red only`) // If Something Other Is Provided
            if(isNaN(amount)) return message.reply(`Amount is not a number`) // If Amount Is Not A Number
            if(amount > bal) return message.reply(moneymore) // If User Provided Greater Money Then He Has
            if(amount < 100) return message.reply(`Need to bet atleast $100`) // If Provided Amount Is Less Then $500

            let ciao = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amount)


            db.set(`coinfliptime_${user.id}`, Date.now())

            const flip = coin[Math.floor(Math.random() * coin.length)]

            const fliped = Capitalize({ // For Making heads To Heads And tails To Tails
                Capital: flip
            })

            
            
            const embed = new MessageEmbed()
    .setTitle('Roulette Machine')
    .setDescription(`${user} have placed a bet of <a:flyingbillsGH:1009133723628883999>${ciao} on ${ht}
**Time remaining: 30 seconds**`)
    .setImage('https://cdn.discordapp.com/attachments/988174925347045444/1009861658463703152/roulette.gif')
    .setColor('RANDOM')
    message.channel.send(embed)
            
            
            setTimeout(function(){ 
            
                let ciao1 = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amount)


            if(flip === ht) { // If Coin Fliped Is What User Provided
                const embed = new MessageEmbed()
                .setAuthor(`${user.user.username} Roulette result`, user.user.displayAvatarURL({ dynamic: true }))
                .setTimestamp()
                .setColor('RANDOM')
                .setDescription(`
<@${user.id}> the ball landed on **${fliped}** and you won <a:flyingbillsGH:1009133723628883999> **${ciao1}**
                `)
                message.channel.send(embed)
                db.add(`money_${user.id}`, amount)
              //  db.set(`coinfliptime_${user.id}`, Date.now())
            } else { // If Coin Fliped Is Not What User Provided
                const embed = new MessageEmbed()
                .setAuthor(`${user.user.username} Roulette result`, user.user.displayAvatarURL({ dynamic: true }))
                .setTimestamp()
                .setColor('RANDOM')
                .setDescription(`
<@${user.id}> the ball landed on **${fliped}** and you lost <a:flyingbillsGH:1009133723628883999> **${ciao1}**
                `)
                message.channel.send(embed)
                db.subtract(`money_${user.id}`, amount)
               // db.set(`coinfliptime_${user.id}`, Date.now())
            }
        

    }, 30000)

        let balo = await db.fetch(`money_${user.id}`)
        if(balo === null) balo = 0 
   
       

        let bank = await db.fetch(`bank_${user.id}`) 
        if(bank === null) bank = 0 

        let tot = await db.fetch(`total_${user.id}`)
        tot = bank+balo


         totale = db.set(`total_${user.id}`, tot)

    }
}
}