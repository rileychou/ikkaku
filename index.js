const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');
const command = require('./command');

client.on('ready', () => {
    console.log('The client is ready');

    command(client, 'ping', message => {
        message.channel.send('Pong');
    });

    command(client, ['hello', 'hi', 'hey', 'howdy', 'yo', 'sup', 'henlo'], message => {
        message.channel.send('Hello ' + message.author.username + '!');
    });

    command(client, 'help', message => {
        const embed = new Discord.MessageEmbed()
            .setTitle('Help')
            .setDescription('Available commands: \n\n `!ping` - Pong \n `!hello` - ikkaku will greet you')
            .setColor('#bf8fff')

        message.channel.send(embed);
    });

    command(client, 'info', message => {
        const embed = new Discord.MessageEmbed()
            .setTitle('Info')
            .setDescription("Ah, it's you, young apprentice. You have summoned wise ikkaku for club info.\n\n Ocean Conservancy Club is a student-led organization that is dedicated towards preserving the ocean and its marine wildlife. I hope you enjoy it here")
            .setColor('#80d4ff')

        message.channel.send(embed);
    });
});

client.login(process.env.DJS_TOKEN);