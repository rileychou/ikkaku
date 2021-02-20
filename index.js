const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');
const command = require('./command');

client.on('ready', () => {
    console.log('The client is ready');

    command(client, 'ping', message => {
        message.channel.send('Pong');
    });

    command(client, ['hello', 'hi', 'howdy', 'yo', 'sup'], message => {
        message.channel.send('Hello ' + message.author.username + '!');
    });

    command(client, "status", message => {
        const conent = message.conent.replace('!status ', '')
        //set status?

        client.user.setPreference({
            activity: {
                name: content,
                type: 0,
            }
        })

    })
});

client.login(process.env.DJS_TOKEN);