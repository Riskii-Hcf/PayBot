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


var h = [
  'https://simg3.gelbooru.com/images/95/68/9568145f22350f7acfc8efb54d6f694e.jpeg','https://files.yande.re/image/ce8e14c0b8919994e8c57152e3c7b8f6/yande.re%20432859%20censored%20fate_grand_order%20feet%20mash_kyrielight%20naked%20nipples%20pussy%20pussy_juice%20remana.jpg',
  'https://simg3.gelbooru.com/images/ef/e8/efe83f21c2d222b68559bd2816aef4e8.png',
  'https://danbooru.donmai.us/data/__megumin_kono_subarashii_sekai_ni_shukufuku_wo_drawn_by_apoidea__b31ab36f6e4b62102e81a4f92cbeb9b0.jpg',
  'https://konachan.com/image/54eaeb126270dffe405042bffa46a3e9/Konachan.com%20-%20259982%20ass%20ass_grab%20bed%20brown_hair%20green_eyes%20gyouza_teishoku%20naked_shirt%20original%20sex%20short_hair.png',
  'https://files.yande.re/image/1a4d3fafcb34a269d7d203370168c507/yande.re%20432823%20anus%20ass%20ass_grab%20monster%2Bmusume%20monster_girl%20nipples%20pantsu%20pointy_ears%20pussy%20sayori%20thong%20topless.jpg',
  'https://simg3.gelbooru.com/images/4c/7b/4c7b8a289d8b0a74073bc2debe27ed38.gif',
  'https://danbooru.donmai.us/data/__hakurei_reimu_and_sananana_cookie_touhou_and_touhou_drawn_by_oozon_ozon__83d50be518f74ca31d5a38bca8c56d0a.png',
  'https://konachan.com/image/0b7c462faad96aadad4f9b09f2b5c91f/Konachan.com%20-%20259325%20anus%20ass%20ass_grab%20creampie%20cum%20game_cg%20green_eyes%20green_hair%20hunie_pop%20long_hair%20ninamo%20theiatena_venus%20uncensored.jpg',
  'https://files.yande.re/image/a2d9643fb870bd5c3684f48681b6b0e0/yande.re%20433012%20boku_wa_tomodachi_ga_sukunai%20breasts%20cait%20kashiwazaki_sena%20kimono%20nipples%20no_bra%20nopan%20open_shirt%20pussy%20uncensored.png'];

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
case "prefix":
if(message.guild.member(message.author).hasPermission(`ADMINISTRATOR`)) {
if(message.channel.type === 'dm') {
  message.reply(":x: **This command is not allowed in PM's!** :x:");
} else {
	if (args[1]) {
  const newPrefix = args.slice(1).join(" ");
  guilds[message.guild.id].prefix = newPrefix;
  message.reply(`New prefix for **${message.guild.name}** is **${newPrefix}** ! :x: **NOTICE:** Prefix cannot be changed to music part, sorry.`);
	} else {
		message.reply(":x: **Your prefix cant be empty!** :x:");
	}
}
} else {
	message.reply(":x: You are missing **ADMINISTRATOR** permission! :x:");
}
break;
case "suggest":
if (args[1]) {
var time = new Date();
var sugargs = message.content.substring(prefix.length+8).split(" ");
const sugmsg = sugargs.join(" ");
var sembed = new Discord.RichEmbed()
.setTitle(`**Suggestion**`)
.setDescription(`${sugmsg}`)
.setAuthor(`Requested by ${message.author.username}`, message.author.displayAvatarURL)
.setFooter(`Sent at ${time}`)
.setColor(0xe8d830)
message.guild.channels.find("name", "suggestion").sendMessage(sembed).then(function (message) {
  message.react("đź‘Ť")
  message.react("đź‘Ž")
}).catch(function() {
  //Something
 });
message.reply("<:aloid_09:406932185371901964> Suggestion has been sent! :mailbox:");
} else {
  return message.reply(":x: **PLEASE WRITE A SUGGESTION!** :x:");
}
break;
case "say":
if(message.author.id == "395954014715510784") {
    var sayargs = message.content.substring(prefix.length+4).split(" ");
                    const saymsg = sayargs.join(" ");
                    message.delete().catch(O_o=>{});
		    message.channel.sendMessage(saymsg);
    } else {

        message.channel.send(":x: **Bot Owner Only**");
    }
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
case "8ball":
if (args[1]) {
var balls = ["Nope", "No", "Nah", "Nuu!", "Never", "I think not", "Maybe no", "Yes", "Yas", "Always", "I think yes", "Maybe yes", "Maybe"];
var qargs = message.content.substring(prefix.length+6).split(" ");
const qumsg = qargs.join(" ");
var balle = new Discord.RichEmbed()
.setTitle(`Aloid's 8ball`)
.setDescription(`Question: ` + qumsg + `\n\nAnswer: ` + balls[Math.floor(Math.random() * balls.length)])
.setAuthor(`Requested by ${message.author.username}`, message.author.displayAvatarURL)
.setThumbnail(`https://emojipedia-us.s3.amazonaws.com/thumbs/120/apple/118/billiards_1f3b1.png`)
.setFooter(`Here is my answer to your question...`)
.setColor(0x721487)
message.channel.sendEmbed(balle);
} else {
	message.reply("Please write a question.");
}
break;
case "avatar":
let useri = message.mentions.users.first();
if (!useri) {
	var ave = new Discord.RichEmbed()
	.setImage(message.author.avatarURL)
	.setAuthor(`Requested by ${message.author.username}`, message.author.displayAvatarURL)
	.setColor(0x721487)
	message.channel.sendEmbed(ave);
} else {
	var spme = new Discord.RichEmbed()
	.setImage(useri.avatarURL)
	.setAuthor(`Requested by ${message.author.username}`, message.author.displayAvatarURL)
	.setColor(0x721487)
	message.channel.sendEmbed(spme);
}
break;
    
    case "info":
    const used = process.memoryUsage().heapUsed / 1024 / 1024;
    const owner = "Riskii#3057";
    const laungage = "Discord.JS/Node.JS";
    var infoe = new Discord.RichEmbed()
    .setTitle(`Info about Aloid`)
    .setDescription(`Hello i am PayBot,\nA bot which will make your server better(and funnier)\nI am owned by **${owner}** and i was coded in **${laungage}**!\nHere is some information about me:\n\nName: Aloid\nCreator: ${owner}\nMemory used: ${Math.round(used * 100) / 100}MB\nUptime: ${parseTime(bot.uptime)}\nServer Count: ${bot.guilds.size}\nUsers: ${bot.users.size}\nChannels: ${bot.channels.size}`)
    .setFooter(`ALOID COPYRIGHT 2018`)
    .setAuthor(`Requested by ${message.author.username}`, message.author.displayAvatarURL)
    .setThumbnail(`https://bts.net.pl/cdn/aloid.png`)
    .setColor(0x721487)
    message.channel.sendEmbed(infoe);
    break;
		case "raw":
		var rawargs = message.content.substring(prefix.length+4).split(" ");
                    const rawmsg = rawargs.join(" ");
					if (args[1]) {
        hastebin(rawmsg).then(r => {
            message.channel.send("<:aloid_09:406932185371901964> Posted text to Hastebin at this URL: " + r);
        }).catch(console.error);
					} else {
						message.reply("Please write a message!");
					}
		break;
		case "emojis":
		const emojiList = message.guild.emojis.map(e=>e.toString()).join(" ");
		var emojie = new Discord.RichEmbed()
		.setTitle(`Emoji List in ${message.guild.name}!`)
		.setDescription(emojiList)
		.setAuthor(`Requested by ${message.author.username}`, message.author.displayAvatarURL)
		.setColor(0x721487)
		message.channel.sendEmbed(emojie);
    break;
    // START OF MOD CMDS
  }
});

bot.on("message", function(message) {
  if (message.author.equals(bot.user)) return;

  const prefix = guilds[message.guild.id].prefix;
  
  var autorespond = message.content;
  
  switch (autorespond.toLowerCase()) {
case "<@410825339757920257>":
message.reply(`My prefix is ${prefix}!`);
break;
case "Botprefix":
message.reply(`My prefix is ${prefix}!`);
break;
}
});

bot.on("guildCreate", guild => {
  guild.owner.sendMessage(`Hello <@${guild.owner.id}>,\nI have been invited to ${guild.name}!\n\nTo start with me simply type **(help** in your discord server!\n**PLEASE NOTICE:** Before using any moderation command please do (addmod\n\nInvite me: https://discordapp.com/api/oauth2/authorize?client_id=413404274173935616&permissions=2146958583&scope=bot \nSupport Discord Server: https://discord.gg/7TeVwdE\n\n\nPayBot By Riskii#3057`)

})
bot.login(process.env.BOT_TOKEN);
