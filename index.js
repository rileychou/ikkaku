const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');
const command = require('./command');

client.on('ready', () => {
    console.log('The client is ready');

    command(client, 'ping', message => {
        message.channel.send('Pong');
    });

    command(client, 'pong', message => {
        message.channel.send('Ping');
    });

    command(client, 'save', message => {
        message.channel.send('the turtles!');
    });

    command(client, ['hello', 'hi', 'hey', 'howdy', 'yo', 'sup', 'henlo', 'hai', 'ello'], message => {
        message.channel.send('Hello ' + message.author.username + '!');
    });

    command(client, ['bye', 'byee', 'goodbye', 'byebye'], message => {
        message.channel.send('Farewell ' + message.author.username + '!');
    });

    command(client, 'next', message => {
        let meetArr = [];
        //make sure you set the month to the actual month number -1. ex. January is 0, February is 1, etc...
        meetArr.push(new Date(2021, 10, 23));
        meetArr.push(new Date(2021, 10, 30));
        meetArr.push(new Date(2021, 11, 13));
        meetArr.push(new Date(2021, 11, 27));
        meetArr.push(new Date(2021, 12, 11));
        meetArr.push(new Date(2021, 12, 25));

        let nextMeet;

        let today = new Date();
        for (let i = 0; i<meetArr.length; i++){
            if (today >= meetArr[i]){
                continue;
            }
            nextMeet = meetArr[i];
            break;
        }
        message.channel.send("Our next club meeting is " + nextMeet.toDateString());
    });

    command(client, 'help', message => {
        const embed = new Discord.MessageEmbed()
            .setTitle('Help')
            .setDescription("Available commands: \n\n `!ping` - Pong \n `!pong` - Ping \n `!save` - the turtles! \n `!hello` - ikkaku will greet you \n `!bye` - ikkaku says bye \n\n `!info` - club information \n `!next` - next meeting date and time \n `!intro` - ikkaku's self introduction \n `!fact` - get an ocean fact \n `!joke` - ikkaku gives a pun \n ")
            .setColor('#bf8fff')

        message.channel.send(embed);
    });

    command(client, 'info', message => {
        const embed = new Discord.MessageEmbed()
            .setTitle('Info')
            .setDescription("Ah, it's you, young apprentice. You have summoned wise ikkaku for club info.\n\n Ocean Conservancy Club is a student-led organization that is dedicated towards preserving the ocean and its marine wildlife. \n\n I lurk in the depths of this ocean, and I occassionally visit this server. But before I go, you can find all the helpful links here: https://linktr.ee/avocean. Farewell friend, we'll meet anon.")
            .setColor('#80d4ff')

        message.channel.send(embed);
    });

    command(client, 'intro', message => {
        const embed = new Discord.MessageEmbed()
            .setTitle('Hello!')
            .setDescription("I am ikkaku, the official narwhal of OCC. My job is to help the ocean lovers in this server and have a little bit of fun with all of you!")
            .setColor('#ffdc52')

        message.channel.send(embed);
    });

    command(client, 'link', message => {
        const embed = new Discord.MessageEmbed()
            .setTitle('Meeting Link')
            .setURL('https://us04web.zoom.us/j/71473601155?pwd=YUw0U3h1NllIOFE0TmNMQlBTdGVBZz09')
            .setDescription('6pm, every other tuesday')

        message.channel.send(embed);
    });

    command(client, 'fact', message => {
        const facts = ["Do you know there are 8 million tons of plastic in the ocean?", 
        "The ocean is home for 95% of life.", "Coral produces its own sunscreen.", 
        "The ocean is at least 4 billion years old (to be exact 4.533)", 
        "The ocean creates more than 50% of the world's oxygen.", "OCC cares about the ocean so much that we’re hosting a beach cleanup in the future!", 
        "The deepest place in the ocean is called the Mariana Trench.", "Humans have only explored 5% of the ocean", "There are lakes and hidden waterfalls IN the ocean.", 
        "The ocean is helping you read this message: hundreds of thousands of undersea cables transmit 99% of the world's data.", "It takes 1000 years for the water to complete a full journey around the world", 
        "230,000 marine animals are known.", "14% of protein consumption comes from fish."];
        let rand = Math.floor(Math.random()*facts.length);
        
        message.channel.send(facts[rand]);
    });

    command(client, 'joke', message => {
        const jokes = ["The ocean a-piers to be blue", "I’ve got a remedy for your seasickness, it’s called a pocean!", "If Hogwarts was in the ocean, they would play squidditch", 
        "Whose music do fish listen to the most? Frank Ocean", "You are jawesome"];
        let rand = Math.floor(Math.random()*jokes.length);

        message.channel.send(jokes[rand]);
    });
    command(client, "status", message => {
        const content = message.content.replace('!status ', '')
        //set status?

        client.user.setPresence({
            activity: {
                name: content,
                type: 0,
            }
        })
    });
});

/*
when local testing, uncomment config.token, 
when deployed on heroku, uncomment process.env.DJS_TOKEN
*/

//client.login(config.token);
client.login(process.env.DJS_TOKEN);

// hi i'm riley