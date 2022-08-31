const { MessageEmbed } = require('discord.js')

module.exports = {
    commands: 'heel', // You Can Keep Any Name
    description: 'Bans A User.', // Optional 

    callback: (message, args) => {
   


        let images = [ // Find More Names In Description
            'https://c.tenor.com/WguZJzvzVD0AAAAC/anime-heels.gif',
            'https://data.whicdn.com/images/221109565/original.gif',
            'https://c.tenor.com/EpIPbrhcg88AAAAC/star-wars-visions-heels.gif',
            'https://3.bp.blogspot.com/-ERdax-6ATxE/Vasse4MBGvI/AAAAAAAANYc/GFdFe2JlOgA/s1600/Omake%2BGif%2BAnime%2B-%2BWorking%2521%2521%2521%2B-%2BEpisode%2B3%2B-%2BKozue%2BStops%2BSatou.gif',
            'https://38.media.tumblr.com/530696eb09849f37a42ad832c4631411/tumblr_n9qto5S0mb1s307p6o1_500.gif',
   
        ]
        
       



        const embed = new MessageEmbed()
        .setTitle('heel')
       
        .setImage(images[Math. floor(Math. random()*images.length)])
        .setColor('RANDOM')
        message.channel.send(embed)
    }
}