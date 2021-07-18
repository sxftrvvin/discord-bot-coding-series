const Discord = require('discord.js')

module.exports = {
    name: 'advanced',
    description: "advanced ping command",

    async run(client, message, args) {
        // It sends the user "Pinging"
        message.channel.send("pinging... we'll be ready soon!").then(m => {
            // The math thingy to calculate the user's ping
            var ping = m.createdTimestamp - message.createdTimestamp;

            // Basic embed
            var pingingsuccess = new Discord.MessageEmbed()
                .setTitle('pong!')
                .setDescription(`your ping currently is ${ping} ms.`)
                .setAuthor(`completed..`)
                .setColor("RANDOM")

            // Then It Edits the message with the ping variable embed that you created
            m.edit(pingingsuccess)
        });
    }
}