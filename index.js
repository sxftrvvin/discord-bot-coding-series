const Discord = require('discord.js');
const client = new Discord.Client()

client.once('ready', () => {
	console.log('Repl coded bot is online!');
});

client.login(process.env.token);
