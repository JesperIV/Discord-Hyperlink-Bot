//General bot stuff
const Discord = require('discord.js');
const bot = new Discord.Client();

const PREFIX = '[';

const token = 'BLANK';

bot.on('ready', ()=>{
    console.log('Hyperlinks armed and ready!');
    bot.user.setStatus('available')
    bot.user.setActivity('[help')
})

bot.login(token);

//Commands
bot.on('message', (msg) => {
    const args = msg.content.slice(PREFIX.length).split(',');
    
    switch(args[0]){
        
        case 'hyperlink':
            msg.delete();
            let hyperlinkEmbed = new Discord.MessageEmbed()
                .setColor('#f7b75d')
                .setTitle(args[2])
                .setURL(args[1])
                .setFooter('From ' + msg.author.tag)
            
            msg.channel.send(hyperlinkEmbed)
            break;

        case 'HL':
            msg.delete();
            let hlEmbed = new Discord.MessageEmbed()
                .setColor('#f7b75d')
                .setTitle(args[2])
                .setURL(args[1])
                .setFooter('From ' + msg.author.tag)
            
            msg.channel.send(hlEmbed)
            break;
        
        case 'help':
            let helpEmbed = new Discord.MessageEmbed()
                .setColor('#f7b75d')
                .setTitle('Hyperlink Bot Usage')
                .addFields(
                    { name: '[hyperlink', value: 'Example: [hyperlink, https://www.website.com/, LinkName' },
                    { name: '[HL', value: 'Example: [HL, https://www.website.com/, LinkName' },
                )
                .addField('\u200b', '\u200b')
                .setFooter('DISCLAIMER: Currently the link must be a full and functional link including www. or an alternative (If you were to send the link alone you should be able to click it)')
            
                msg.channel.send(helpEmbed)
    }
})

//https://discord.com/oauth2/authorize?client_id=773998786119991313&scope=bot&permissions=8
