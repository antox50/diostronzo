const Discord = require('discord.js');

const Embed = new Discord.MessageEmbed()

module.exports = {

    commands: 'prova', // You Can Keep Any Name


    callback: async (message, args) => {

      


        const newEmbede = new Discord.MessageEmbed()
        .setColor('#030007 ')
        .setTitle('Kinks')
        .setDescription('<a:Licc:1008726614709911724> <@&997101737007661136> \n <:ft1_Heels:1008726624558133370>   <@&997102536077090866>  \n <:Maika_Smug4:1008726636918743102>   <@&997102588233257020> \n <:ft1_whips:1008726649459712170>  <@&997101604819976252> \n <:sph:997535707977482401>    <@&997101642551930961> \n <:hypnoslut:1008726671454650423>   <@&997101884227719208> \n <:Bootyz:1008726681705521152>    <@&997101959897174107> \n <a:FootTrample:1008726692648456272>     <@&997102386977968249> \n <:SANGoodSissy:1008726704828723210>    <@&997102132140449892> \n <a:ft1_panties:1008726715280916490>   <@&997102081200623717> \n <a:3asyl_spit:1008726727985483908>    <@&1008720697905905745> \n <a:3asyl_choke:1008726740157337681>    <@&1008715328110460958> \n <a:2asylslutslap:1008726756196352070>   <@&997102297668653076> (Slapping, Spanking, Whipping, Punching) \n <a:0_candle:1008726769655877633>    <@&1008721300052775102>  (Candles, Electric Stimulation, Hot/Cold) \n <a:knifeplay:1008726828606820422>    <@&1008715308653092945> (Knife, Gun, Fire)')

        message.channel.send(newEmbede)

        .then(msg => {
            msg.react("<a:Licc:1008726614709911724>")
            msg.react("<:ft1_Heels:1008726624558133370> ")
            msg.react("<:Maika_Smug4:1008726636918743102>")
            msg.react("<:ft1_whips:1008726649459712170>")
            msg.react("<:sph:997535707977482401> ")
            msg.react("<:hypnoslut:1008726671454650423>")
            msg.react("<:Bootyz:1008726681705521152> ")
            msg.react("<a:FootTrample:1008726692648456272>  ")
            msg.react("<:SANGoodSissy:1008726704828723210>")
            msg.react("<a:ft1_panties:1008726715280916490>")
            msg.react("<a:3asyl_spit:1008726727985483908>")
            msg.react("<a:3asyl_choke:1008726740157337681>")
            msg.react("<a:2asylslutslap:1008726756196352070>")
            msg.react("<a:0_candle:1008726769655877633>")
            msg.react("<a:2lsbegonknees:1008726601615278201>")
            msg.react("<a:knifeplay:1008726828606820422> ")
            

        })
   
        
    }
}

