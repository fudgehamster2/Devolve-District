const Discord = require('discord.js');
 const client = new Discord.Client();

client.on('ready', () => {
 console.log(`Logged in as ${client.user.tag}!`);
 });

client.on('message', msg => {
 if (msg.content === 'ping') {
 msg.reply('pong');
 }
 });

client.login('token');Njg1NTQ3MDM0NzM1OTM1NTE4.XmKP-A.UmRyPktQeMSivzfzNI9shNhGRTs
