const Discord = require("discord.js");

const Client = new Discord.Client;

const prefix = "!";

Client.on("ready", () => {
console.log("je suis la akhy");
});

Client.on("message", message => {
if(message.author.bot) return;

if(message.content == prefix + "météo"){
    message.channel.send("je ne sais pas akhy");
}

if(message.content == prefix + "chanson"){
    message.channel.send("Bono bonobo te dis s'il fait beau");
}

if(message.content == prefix + "danse salope"){
    message.channel.send("https://zupimages.net/up/21/24/1i14.gif");
}
});


Client.login(process.env.TOKEN);