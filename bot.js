const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("622863845542723586")
setInterval(function() {
channel.send(`sssssssss`);
}, 30)
})

client.login(process.env.BOT_TOKEN);