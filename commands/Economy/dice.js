const { MessageEmbed } = require('discord.js')
const db = require('quick.db')
const ms = require('parse-ms') // npm i parse-ms@2.1.0
const { Capitalize } = require('tech-tip-cyber') // npm i tech-tip-cyber@latest

module.exports = {
    commands: ['dice', 'diceroll', 'dr'], // You Can Keep Any Name
    description: 'Flip Coin ANd Earn $', // Optional
    

    callback: async(message, args, client) => {

        const user = message.member
        const ht = args[0] 
        if(!ht) return message.reply(`you must specify the number <1, 2, 3>`) // If No heads Or tails Provided
        let amount = args[1]
        if(!amount) return message.reply(`you must specify the ammount`) // If No Amount Provided
        let bal = db.fetch(`money_${user.id}`)
        let ciao = ""
        
        const coin = ['1', '2', '3', '4', '5', '6'] // Coin Options
        var lol = ""




        const timeout = 30000 // 120000 = 2 Mins
        const coinfliptime = db.fetch(`dadatime${user.id}`)
        if(coinfliptime !== null && timeout - (Date.now() - coinfliptime) > 0) { // CoolDown
            const timeleft = ms(timeout - (Date.now() - coinfliptime))

            const embed = new MessageEmbed()
            .setAuthor(`${user.user.username} Dice-Roll`, user.user.displayAvatarURL({ dynamic: true }))
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

            if(!coin.includes(ht)) return message.reply(`It should be a number from 1-6 <1, 2, 3>`) // If Something Other Is Provided
            if(isNaN(amount)) return message.reply(`Amount is not a number`) // If Amount Is Not A Number
            if(amount > bal) return message.reply(moneymore) // If User Provided Greater Money Then He Has
            if(amount < 100) return message.reply(`Need to bet atleast $100`) // If Provided Amount Is Less Then $500


            let tuamadre = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amount)


            db.set(`dadatime${user.id}`, Date.now())

            const flip = coin[Math.floor(Math.random() * coin.length)]

            const fliped = Capitalize({ // For Making heads To Heads And tails To Tails
                Capital: flip
            })

            
        if(args[0] === "1"){
            lol = "<:dice1gh:1009910011234877490>"
        }
        if(args[0] === "2"){
            lol = "<:dice2gh:1009910041626812466>"
        }
        if(args[0] === "3"){
            lol = "<:dice3gh:1009910077337116763>"
        }
        if(args[0] === "4"){
            lol = "<:dice4gh:1009910115337515163>"
        }
        if(args[0] === "5"){
            lol = "<:dice5gh:1009910144555036742>"
        }
        if(args[0] === "6"){
            lol = "<:dice6gh:1009910171532787802>"
        }


            const embed = new MessageEmbed()
            .setTitle('Dice-Roll')
            .setDescription(`<@${user.id}> You have placed a bet of <a:flyingbillsGH:1009133723628883999>**${tuamadre}** on ${lol} ${ht}
        **Time remaining: 30 seconds**`)
            .setImage('https://cdn.discordapp.com/attachments/988174925347045444/1009903405004763157/dice-roll.gif')
            .setColor('RANDOM')
            message.channel.send(embed)
            db.set(`dadatime${user.id}`, Date.now())
                    






    if(flip === "1"){
        ciao = "<:dice1gh:1009910011234877490>"
    }
    if(flip === "2"){
        ciao = "<:dice2gh:1009910041626812466>"
    }
    if(flip === "3"){
        ciao = "<:dice3gh:1009910077337116763>"
    }
    if(flip === "4"){
        ciao = "<:dice4gh:1009910115337515163>"
    }
    if(flip === "5"){
        ciao = "<:dice5gh:1009910144555036742>"
    }
    if(flip === "6"){
        ciao = "<:dice6gh:1009910171532787802>"
    }









            setTimeout(function(){ 
            


  


            if(flip === ht) { // If Coin Fliped Is What User Provided

             

            


                amount *= 5
                let tuamadre = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amount)



                const embed = new MessageEmbed()
                .setAuthor(`${user.user.username} Dice-Roll`, user.user.displayAvatarURL({ dynamic: true }))
                .setTimestamp()
                .setColor('RANDOM')
                .setDescription(`
<@${user.id}> The dice landed on ${ciao} ${fliped} and you won <a:flyingbillsGH:1009133723628883999>**${tuamadre}**
                `)
                message.channel.send(embed)

                db.add(`money_${user.id}`, amount)
           
            } else { // If Coin Fliped Is Not What User Provided



                
                let tuamadre = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amount)


                const embed = new MessageEmbed()
                .setAuthor(`${user.user.username} Dice-Roll`, user.user.displayAvatarURL({ dynamic: true }))
                .setTimestamp()
                .setColor('RANDOM')
                .setDescription(`
                <@${user.id}> The dice landed on ${ciao} ${fliped} and you lost <a:flyingbillsGH:1009133723628883999>**${tuamadre}**
                `)
                message.channel.send(embed)
                db.subtract(`money_${user.id}`, amount)
                
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