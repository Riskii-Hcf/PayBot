const Discord = require('discord.js');
const bot = new Discord.Client();
var token = "no token, just stop looking at token ffs lol";
var guilds = {};

bot.on("ready", function() {
	  bot.user.setGame("[PayBot] Prefix = !", "https://www.twitch.tv/123silly");
    console.log(`Started bot as: ${bot.user.tag}!`);
});

//===========================================

bot.on("guildMemberAdd", function(member) {

let joinleave = member.guild.channels.find("name","welcome");
let memberRole = member.guild.roles.find("name", "Member");

if(!joinleave) return;
if(!memberRole) return;

joinleave.send(`:tada: Welcome **` + member.toString() + `** to ${member.guild.name}! Our membercount is: **${member.guild.members.size}**!`);
member.addRole(memberRole.id);
});

bot.on("guildMemberRemove", function(member) {

let joinleaves = member.guild.channels.find("name","join-leave");

if(!joinleaves) return;

joinleaves.send(`This **` + member.toString() + `** Lefted Our Discord. Membercount Is Now **${member.guild.members.size}** `);
});
//============================


bot.on("message", function(message) {
  try{
      if (!guilds[message.guild.id]) {
          guilds[message.guild.id] = {
              prefix: "(",
              advert: 0,
			  antiswear: 0,
          };
      }
  } catch (e) {
    console.log(e);
  }

  const advert = guilds[message.guild.id].advert;

	if (advert === 1) { //detects if antiswear is on or not
  var string = message.content;
  var lower = string.toLowerCase();
  for (i = 0; i < 554; i++)
  {
      if (lower.indexOf(ads.list[i]) >= 0)
      {
          if(message.guild.member(message.author).hasPermission(`ADMINISTRATOR`)) {
			  //admins can advertise.
         } else {
          message.delete();
          message.reply(":x: You are not allowed to advertise.")
          //userData.swears++;
          break;
}
      }
  }
}


function clean(text) {
  if (typeof(text) === `string`)
    return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, `@` + String.fromCharCode(8203));
  else
      return text;
}

const as = guilds[message.guild.id].as;

if (as === 1) { //detects if antiswear is on or not
  var string = message.content;
  var lower = string.toLowerCase();
  for (i = 0; i < 554; i++)
  {
      if (lower.indexOf(swears.list[i]) >= 0)
      {
          if(message.guild.member(message.author).hasPermission(`ADMINISTRATOR`)) {
         } else {
          message.delete();
          message.reply(":x: You are not allowed to swear.")
          //userData.swears++;
          break;
}
      }
  }
}


var parseTime = function(milliseconds) {
  var seconds = Math.floor(milliseconds/1000); milliseconds %= 1000;
  var minutes = Math.floor(seconds/60); seconds %= 60;
  var hours = Math.floor(minutes/60); minutes %= 60;
  var days = Math.floor(hours/24); hours %= 24;
  var written = false;
  return (days?(written=true,days+` days`):``)+(written?`, `:``)
      +(hours?(written=true,hours+` hours`):``)+(written?`, `:``)
      +(minutes?(written=true,minutes+` minutes`):``)+(written?`, `:``)
      +(seconds?(written=true,seconds+` seconds`):``)+(written?`, `:``)
      +(milliseconds?milliseconds+` milliseconds`:``);
};


  const prefix = "!"

  const hexcols = [0xFFB6C1, 0x4C84C0, 0xAD1A2C, 0x20b046, 0xf2e807, 0xf207d1, 0xee8419, 0x8a2be2];

  if (message.author.bot) return;

  if (message.author.equals(bot.user)) return;

  if (!message.content.startsWith(prefix)) return;
  
  if(message.channel.type === 'DM') return;

  var args = message.content.substring(prefix.length).split(" ");
  switch (args[0].toLowerCase()) {
case "ping":
message.reply(`Pong! ${Math.round(bot.ping)}ms`);
break;
case "8ball":
if (args[1]) {
  message.channel.sendMessage(':8ball: ' + message + '? - `' + eb[Math.floor(Math.random() * eb.length)] + '`');
} else {
  message.channel.sendMessage("Please provide a question");
}
break;
case "coinflip":
var result = Math.floor((Math.random() * 2) + 1);
    if (result === 1) {
    message.reply('The coin landed on heads');
} else if (result === 2) {
message.reply('The coin landed on tails');
}
break;
 
case "emojis":
const emojiList = message.guild.emojis.map(e=>e.toString()).join(" ");
message.channel.send(emojiList);
break;
case "prefix":
if(message.guild.member(message.author).hasPermission(`ADMINISTRATOR`)) {
if(message.channel.type === 'dm') {
  message.reply(":x: **This command is not allowed in PM's!** :x:");
} else {
	if (args[1]) {
  const newPrefix = args.slice(1).join(" ");
  guilds[message.guild.id].prefix = newPrefix;
  message.reply(`The Server Prefix Is Now ${newPrefix}`);
	} else {
		message.reply("**Prefix Letter Can't Be Empty**");
	}
}
} else {
	message.reply(":x: You are missing **ADMINISTRATOR** permission! :x:");
}
break;
	  case "bank":
message.reply(`Banking System ```Bank``` $balance`);
break;
case "help":
message.delete("help")
console.log(`Help message has been sent to <@${message.author.id}> !`)
message.channel.sendMessage(`<@${message.author.id}> -> **Commands List** has been sent to your pm/dm!`)
var embedt = new Discord.RichEmbed()
.setTitle("All Commands")
.setDescription('These Commands Will Help You!')
.setThumbnail ('https://ak4.picdn.net/shutterstock/videos/10035044/thumb/1.jpg')
.addField(`=8ball`, `:8ball: Gives A Answer!`)
.addField(`=ping`, `Shows A 99% Correct Ping.`)
.addField(`=emojis`, `Shows A L Emoji / Image.`)
.addField(`=say`, `Say Whatver You Said.`)
.addField(`=bank`, `Shows The Whole Bank On The Discord Server`)
.addField(`=bal [player]`, `Shows Discord Member Bank Balance`)
.addField(`=reward`, `Gives You A Reward Daily [Beta].`)
.addField(`=mc [user]`, `Kicks A User.`)
.addField(`=prefix [prefix letter]`, `Gives You A New Prefix [Beta].`)
.addField(`=help`, `Shows Help Command.`)
.setFooter("PayBot [Banking / Ranking System Bot 1.0]")
.setColor(0x1ab517)
message.author.sendEmbed(embedt)
break;
case "mc":
if (args[1]) {
 var mcskin = new Discord.RichEmbed()
.setTitle(`Minecraft Information`)
.setDescription(`Welcome back ` + args[1] + `! Here is some information about you:`)
.addField(`Username:`, args[1], true)
.addField(`Skin:`, `https://minecraftskinstealer.com/skin.php?u=`+ args[1] +`&s=700`, true)
.addField(`Use this skin to your account:`, `[Click Me!](https://www.minecraft.net/profile/skin/remote?url=https://minecraft.net/skin/` + args[1] + `.png)`)
.setAuthor(`Requested by ${message.author.username}`, message.author.displayAvatarURL)
.setThumbnail(`https://minotar.net/avatar/`+ args[1] + `/100.png`)
.setColor(0x721487)
message.channel.sendEmbed(mcskin);
} else {
message.reply("Please enter a nickname!");
}
break;

  const prefix = guilds[message.guild.id].prefix;
  
  var autorespond = message.content;
  
  switch (autorespond.toLowerCase()) {
});

bot.on("guildCreate", guild => {
  guild.owner.sendMessage(`Hello <@${guild.owner.id}>,\nI have been invited to ${guild.name}!\n\nTo start with me simply type **(help** in your discord server!\n**PLEASE NOTICE:** Before using any moderation command please do (addmod\n\nInvite me: https://discordapp.com/api/oauth2/authorize?client_id=413404274173935616&permissions=2146958583&scope=bot \nSupport Discord Server: https://discord.gg/7TeVwdE\n\n\nPayBot By Riskii#3057`)

})
bot.login(process.env.BOT_TOKEN);
