const slotItems = ["<a:BowBlueCute:1008690104413458504>", "<a:BowPinkCute:1008690115696140308>", "<a:BowPurpleCute:1008690127150788669>", "<a:S18_blackbow2:999988937655328808>", "<a:crownpinkGH2:1009435078604115968>", "<a:heels2GH:1009810986477293661>", "<a:ft1_panties:1008726715280916490>"];
const db = require("quick.db");
const Discord = require('discord.js');
const { MessageEmbed, Message } = require('discord.js')
const ms = require('parse-ms')






module.exports = {
    commands: ['slot', 'sl', 'slot machine'], // You Can Keep Any Name
    description: 'Flip Coin ANd Earn $', // Optional


    callback: async(message, args, client) => {

    const user = message.member
    let moneydb = await db.fetch(`money_${user.id}`)





    let money = (args[0]);
    let win = false;

    
  


    const timeout = 30000
    const slotime = db.get(`slot${user.id}`)


    if(slotime !== null && timeout - (Date.now() - slotime) > 0) { // CoolDown
        const timeleft = ms(timeout - (Date.now() - slotime))

        const embed = new MessageEmbed()
        .setAuthor(`${user.user.username} Roulette result `, user.user.displayAvatarURL({ dynamic: true }))
        .setTimestamp()
        .setColor('RANDOM')
        .setDescription(`
Try your luck in **${timeleft.minutes} Minutes ${timeleft.seconds} Seconds**
        `)
        message.channel.send(embed) 
    }else{



    let ciao = new MessageEmbed()
    .setColor("#FFFFFF")
    .setDescription(`<:S18_whitexx:1009845731038871712> You are broke as fuck, beg your superior's for some money or earn some before trying again. (100 is min) <:areansmirk:1009166410372616192>`);


    let eddai = new MessageEmbed()
    .setColor("#FFFFFF")
    .setDescription(`<:S18_whitexx:1009845731038871712> Minimum bet is <a:flyingbillsGH:1009133723628883999> **100**`);




 // CoolDown
    if(args[0] === 'all') {  // If Someone Does `+dep all` All Money To Bank
        
        money = moneydb


       


        
    }



    let moneymore = new MessageEmbed()
    .setColor("#FFFFFF")
    .setDescription(`<:S18_whitexx:1009845731038871712> ${user} You're broke af, beg your superior for some money or earn some before trying again later.`);

    let moneyhelp = new MessageEmbed()
    .setColor("#FFFFFF")
    .setDescription(`<:S18_whitexx:1009845731038871712> Please specify an amount, **example:** +pl <amount>`);


    

    if(isNaN(money)) return message.reply(`Amount is not a number`)
    if (!money) return message.channel.send(moneyhelp);
    if (money > moneydb) return message.channel.send(moneymore);
    if (money < 100) return message.channel.send(eddai)

    let tuamadre = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(money)



    const embed = new MessageEmbed()
    .setTitle('Slot Machine')
    .setDescription(`${user} used <a:flyingbillsGH:1009133723628883999> ${tuamadre} in the slot machine
**Time remaining: 30 seconds**`)
    .setImage('https://media.discordapp.net/attachments/1003614981780164708/1009833438892798042/slot-machine-army-of-the-dead.gif')
    .setColor('RANDOM')
    db.set(`slot${user.id}`, Date.now())
    message.channel.send(embed)

    let number = []
    for (i = 0; i < 3; i++) { number[i] = Math.floor(Math.random() * slotItems.length); }

    if (number[0] == number[1] && number[1] == number[2]) { 
        money *= 9
        win = true;
    } else if (number[0] == number[1] || number[0] == number[2] || number[1] == number[2]) { 
        money *= 2
        win = true;
    }


    setTimeout(function(){ 
        
        let diocr = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(money)
        
        if (win) {

           // db.set(`slotime${user.id}`, Date.now()) 

            let slotsEmbed1 = new MessageEmbed()
                .setTitle('Slot Machine')
                .setDescription(`${slotItems[number[0]]} | ${slotItems[number[1]]} | ${slotItems[number[2]]}\n\n ${user} **You won**  <a:flyingbillsGH:1009133723628883999> ${diocr} Dollars`)
                .setColor("#FFFFFF")
            message.channel.send(slotsEmbed1)
            db.add(`money_${user.id}`, money)
         
        } else {
            let slotsEmbed = new MessageEmbed()
                .setTitle('Slot Machine')
                .setDescription(`${slotItems[number[0]]} | ${slotItems[number[1]]} | ${slotItems[number[2]]}\n\n ${user} **You lost** <a:flyingbillsGH:1009133723628883999> ${diocr} Dollars`)
                .setColor("#FFFFFF")
            message.channel.send(slotsEmbed)
            db.subtract(`money_${user.id}`, money)
      


            
   
        } 
     }, 30000)
    
    
     let bal = await db.fetch(`money_${user.id}`)
     if(bal === null) bal = 0 
 
     let bank = await db.fetch(`bank_${user.id}`) 
     if(bank === null) bank = 0 
 
     let tot = await db.fetch(`total_${user.id}`)
     tot = bank+bal
 
 
     let totale = db.set(`total_${user.id}`, tot)
     

}
    }
}