const Discord = require('discord.js');
const bot = new Discord.Client();
var token = "2343258923hr9hUhwirbiew9rhu9rbubf3b_r23u9rhu923hewh";
var guilds = {};

bot.on("ready", function() {
	  bot.user.setGame("PayBot Prefix = ! | (help", "https://www.twitch.tv/123silly");
    console.log(`Started bot as: ${bot.user.tag}!`);
});


//===========================================

bot.on("guildMemberAdd", function(member) {

let joinleave = member.guild.channels.find("name","join-leave");
let memberRole = member.guild.roles.find("name", "Member");

if(!joinleave) return;
if(!memberRole) return;
	
