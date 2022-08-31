const { MessageEmbed, Message } = require('discord.js')
const db = require('quick.db') // npm i quick.db
const ms = require('parse-ms') // npm i parse-ms

module.exports = {
    commands: ['collect'], // You Can Keep Any Name
    description: 'Get Your Weekly $', // Optional
   



    callback: async (message, args) => {


        
        const user = message.member
        const timeout = 14400000  // 14400000 = 1 Week
        var amount = 0 // Min Is 10,000 And Max Is 30,000(10000+20000)
        const weeklytime = db.fetch(`weeklytime_${user.id}`) // Same As balance.js
        var rvalue = ""
        var rloser = ""
        var rpath = ""
        var rpup = ""
        var rkitt = ""
        var rpigg = ""
        var rusel = ""
        var sub = ""
        var swi = ""
        var dom = ""
        var hunt = ""
        var bitch = ""
        var sup = ""
        var div = ""
        var god = ""
        var lvl1 = ""
        var lvl2 = ""
        var lvl3 = ""
        var lvl4 = ""
        var lvl5 = ""


        if(weeklytime !== null && timeout - (Date.now() - weeklytime) > 0) { // Check For CoolDown
            const timeleft = ms(timeout - (Date.now() - weeklytime))

            const embed = new MessageEmbed()
            .setAuthor(`${user.user.username} role reward`, user.user.displayAvatarURL({ dynamic: true }))
            .setTimestamp()
            .setColor('000000')
            .setDescription(`
            You can next collect income in ${timeleft.hours}h ${timeleft.minutes}m ${timeleft.seconds}s

            `)
            message.channel.send(embed)
        } else  {
            if(message.member.roles.cache.has('1013397559043162152')){
                amount = amount + 500
                rvalue ="<a:tlwHeart_Blue:1008690196008665128> trash <a:flyingbills:1009133723628883999> 500 \n"

                // return amount
            }
            if(message.member.roles.cache.has('1013400024501207081')){
                amount = amount + 1000
                rloser ="<a:tlwHeart_Blue:1008690196008665128> mutt <a:flyingbills:1009133723628883999> 1,000 \n"

                // return amount
            } 
            if(message.member.roles.cache.has('1013402407318851635')){
                amount = amount + 2200
                rpath ="<a:tlwHeart_Blue:1008690196008665128> brat <a:flyingbills:1009133723628883999> 2,200 \n"
                // return amount
            } 
            if(message.member.roles.cache.has('1013402995221856276')){
                amount = amount + 3500
                rpup ="<a:tlwHeart_Blue:1008690196008665128> human-seat <a:flyingbills:1009133723628883999> 3,500 \n"
                // return amount
            }  
            if(message.member.roles.cache.has('1013403944162172929')){
                amount = amount + 5300
                rkitt ="<a:tlwHeart_Blue:1008690196008665128> foot-rest <a:flyingbills:1009133723628883999> 5,300 \n"
                // return amount
            } 
            if(message.member.roles.cache.has('1013404471973388379')){
                amount = amount + 7500
                rpigg ="<a:tlwHeart_Blue:1008690196008665128> pitiful <a:flyingbills:1009133723628883999> 7,500 \n"
                // return amount
            } 
            if(message.member.roles.cache.has('1013405003794370570')){
                amount = amount + 12000
                rusel ="<a:tlwHeart_Blue:1008690196008665128> inferior <a:flyingbills:1009133723628883999> 12,000 \n"
                // return amount
            } 
            if(message.member.roles.cache.has('997096690467229756')){
                amount = amount + 100
                sub ="<a:tlwHeart_Blue:1008690196008665128> slave <a:flyingbills:1009133723628883999> 100 \n"
                
            } 
            if(message.member.roles.cache.has('997096740828225556')){
                amount = amount + 500
                swi ="<a:tlwHeart_Yellow:1008690205374550046>  switch <a:flyingbills:1009133723628883999> 500 \n"
                // return amount
            } 
            if(message.member.roles.cache.has('997096656208138260')){
                amount = amount + 1000
                dom ="<a:tlwHeart_Red:1008690176173822032> Dominant <a:flyingbills:1009133723628883999> 1,000 \n"
            } 
            if(message.member.roles.cache.has('1013418434643628156')){
                amount = amount + 3500
                hunt ="<a:tlwHeart_Red:1008690176173822032>  Diva <a:flyingbills:1009133723628883999> 3,500 \n"
            } 
            if(message.member.roles.cache.has('1013444899066085376')){
                amount = amount + 6500
                bitch ="<a:tlwHeart_Red:1008690176173822032>  Superior <a:flyingbills:1009133723628883999> 6,500 \n"
            } 
            if(message.member.roles.cache.has('1013446216572477440')){
                amount = amount + 10000
                sup ="<a:tlwHeart_Red:1008690176173822032>  Heavenly <a:flyingbills:1009133723628883999> 10,000 \n"
            } 
            if(message.member.roles.cache.has('1013446757176320040')){
                amount = amount + 14000
                div ="<a:tlwHeart_Red:1008690176173822032>  Ethernal <a:flyingbills:1009133723628883999> 14,000 \n"
            } 
            if(message.member.roles.cache.has('1013447398523150507')){
                amount = amount + 17000
                div ="<a:tlwHeart_Red:1008690176173822032>  Seductress <a:flyingbills:1009133723628883999> 17,000 \n"
            } 
            if(message.member.roles.cache.has('997177747816329287')){
                amount = amount + 15000
                god ="<a:tlwHeart_Red:1008690176173822032>  Goddess <a:flyingbills:1009133723628883999> 15,000 \n"
            } 
            if(message.member.roles.cache.has('1010925169432330321')){
                amount = amount + 2000
                lvl1 ="<a:HeartPurple:1008690185669726208>  level 10 <a:flyingbills:1009133723628883999> 2,000 \n"
            } 
            if(message.member.roles.cache.has('1010925411657592973')){
                amount = amount + 6000
                lvl2 ="<a:HeartPurple:1008690185669726208>  level 20 <a:flyingbills:1009133723628883999> 6,000 \n"
            } 
            if(message.member.roles.cache.has('1010925516682965002')){
                amount = amount + 10000
                lvl3 ="<a:HeartPurple:1008690185669726208>  level 30 <a:flyingbills:1009133723628883999> 10,000 \n"
            } 
            if(message.member.roles.cache.has('1010934491457540278')){
                amount = amount + 18000
                lvl4 ="<a:HeartPurple:1008690185669726208>  level 50 <a:flyingbills:1009133723628883999> 18,000 \n"
            } 
            if(message.member.roles.cache.has('1010934573082886194')){
                amount = amount + 28000
                lvl5 ="<a:HeartPurple:1008690185669726208>  level 100 <a:flyingbills:1009133723628883999> 28,000 \n"
            } 


      

            let bal = await db.fetch(`money_${user.id}`)
        if(bal === null) bal = 0 

        let bank = await db.fetch(`bank_${user.id}`) 
        if(bank === null) bank = 0 

        let tot = await db.fetch(`total_${user.id}`)
        tot = bank+bal


        let totale = db.set(`total_${user.id}`, tot)
            
            const embed = new MessageEmbed()
            .setAuthor(`${user.user.username} collected`, user.user.displayAvatarURL({ dynamic: true }))
            .setTimestamp()
            .setColor('000000')
            .setDescription(`
<a:checkmark:1008737232678567976>  Role income succesfully collected. 

${rvalue}${rloser}${rpath}${rpup}${rkitt}${rpigg}${rusel}${sub}${swi}${dom}${hunt}${bitch}${sup}${div}${god}${lvl1}${lvl2}${lvl3}${lvl4}${lvl5}

 **$${amount.toLocaleString()}** <a:coinsss:999019242345218068>
            `)
            message.channel.send(embed)
            db.add(`money_${user.id}`, amount) // Add Amount To User's Wallet
            db.set(`weeklytime_${user.id}`, Date.now()) // Set Time When Command Was Used

            
        }
        let bal = await db.fetch(`money_${user.id}`)
        if(bal === null) bal = 0 

        let bank = await db.fetch(`bank_${user.id}`) 
        if(bank === null) bank = 0 

        let tot = await db.fetch(`total_${user.id}`)
        tot = bank+bal


        let totale = db.set(`total_${user.id}`, tot)
    }
    
}

