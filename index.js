const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');
const command = require('./command');

client.on('ready', () => {
    console.log('The client is ready');

    command(client, 'ping', message => {
        message.channel.send('Pong');
    });

    command(client, 'hello', message => {
        message.channel.send('Hi' + message.member.username);
    });
});

client.login(process.env.DJS_TOKEN);