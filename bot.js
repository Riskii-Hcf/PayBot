const Discord = require('discord.js');
 
const bot = new Discord.Client();
 
const token = "What Is A Token?";
 
var prefix = '!';
 
var eb = ["You can help youself right?",
"Not right now Please",
"Nope",
"NOOOOOOO",
"It is certain",
"It is decidedly so",
"Without a doubt",
"Yes, definitely",
"You may rely on it",
"As I see it, yes",
"Most likely",
"Outlook good",
"Yes",
"Signs point to yes",
"Reply hazy try again",
"Ask again later",
"Better not tell you now",
"Cannot predict now",
"Concentrate and ask again",
"Don't count on it",
"My reply is no",
"My sources say no",
"Outlook not so good",
"Very doubtful"];
 
var lt = ["Earned 21$",
"Earned 10$",
"Earned 2$",
"Earned 20$",
"Earned 35$",
"Earned 8$",
"Earned 80$"];


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

bot.on("ready", function() {
      bot.user.setGame("PayBot Prefix = !" , "https://www.twitch.tv/123silly");
    console.log(`Started bot as: ${bot.user.tag}!`);
});
 
bot.on("guildMemberAdd", function(member) {
let joinleaves = member.guild.channels.find("name","main-chat");
if(!joinleaves) return;
joinleaves.sendMessage(member.toString() + " welcome to the server!");
 
if(!joinleaves) return;
 
});
 
bot.on("guildMemberRemove", function(member) {
 
let joinleaves = member.guild.channels.find("name","main-chat");
 
if(!joinleaves) return;
 
joinleaves.send(member.toString() + " has left... We will miss you! :cry:");
});
 
bot.on("message", function(message) {
if (message.author.equals(bot.user)) return;
 
if (!message.content.startsWith(prefix)) return;
 
var args = message.content.substring(prefix.length).split(" ");
 
switch (args[0].toLowerCase()) {
 
case "emojis":
const emojiList = message.guild.emojis.map(e=>e.toString()).join(" ");
message.channel.send(emojiList);
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
		
    case "hentaiporn":
    message.channel.sendMessage(animepics[Math.floor(Math.random() * animepics.length )] + "\n" + animepics[Math.floor(Math.random() * animepics.length )] + "\n" + animepics[Math.floor(Math.random() * animepics.length )]);
    break;
    case "hentaibomb":
    if(!message.channel.nsfw){
      message.reply("THIS IS A NSFW COMMAND, PLEASE USE THIS COMMAND IN A NSFW CHANNEL! :x:")
      }else{
        message.channel.sendMessage(h[Math.floor(Math.random() * h.length )] + "\n" + h[Math.floor(Math.random() * h.length )] + "\n" + h[Math.floor(Math.random() * h.length )]);
      }
    break;
    case "marry":
    let mar = message.mentions.users.first();
    if (!mar) {
      message.reply("Please mention a user to marry.");
    } else {
    var mare = new Discord.RichEmbed()
    .setTitle(`New people has been married! :heart_eyes: :heart_eyes: `)
    .setDescription(`:heart: <@${message.author.id}> is now married with <@${mar.id}>! :wink:`)
    .setImage(`https://i.ytimg.com/vi/6ytPCSS8_7s/maxresdefault.jpg`)
    .setColor(0x721487)
    message.channel.sendEmbed(mare);
    }
    break;


	case "invite":
	message.reply('Invite Me Here! https://discordapp.com/api/oauth2/authorize?client_id=413404274173935616&permissions=2146958583&scope=bot')
	break;	
case "help":
message.delete("help")
console.log(`Help message has been sent to <@${message.author.id}> !`)
message.channel.sendMessage(`<@${message.author.id}> -> **Commands List** has been sent to your pm/dm!`)
var embedt = new Discord.RichEmbed()
.setTitle("All Commands")
.setDescription('These Commands Will Help You!')
.setThumbnail ('https://ak4.picdn.net/shutterstock/videos/10035044/thumb/1.jpg')
.addField(`!8ball`, `:8ball: Gives A Answer!`)
.addField(`!ping`, `Shows A 99% Correct Ping.`)
.addField(`!emojis`, `Shows A L Emoji / Image.`)
.addField(`!say`, `Say Whatver You Said.`)
.addField(`!bal`, `Shows Your $$$ Balance.`)
.addField(`!mc [player]`, `Shows Minecraft Info.`)
.addField(`!bank`, `Shows The Whole Discord Server Bank.`)
.addField(`!coinflip`, `Gives You A Head Or Tail.`)
.addField(`!reward`, `Daily Reward For You!`)
.addField(`!work`, `Work For Money.`)
.setFooter("PayBot [Help]")
.setColor(0x1ab517)
message.author.sendEmbed(embedt)
break;

case "work":
if (args[1]) {
  message.channel.sendMessage('You Have  ' + ' `' + lt[Math.floor(Math.random() * lt.length)] + '`');
} else {
  message.channel.sendMessage("Please Provide Your Username");
}
break;

case "donate":
message.reply(`Donate Here! https://www.paypal.com`);
break;		
	
case "ping":
message.reply(`Pong! ${Math.round(bot.ping)}ms`);
break;
		
case "say":
    var sayargs = message.content.substring(5).split(" ");
                    const saymsg = sayargs.join(" ");
                    message.delete().catch(O_o=>{});
		    message.channel.sendMessage(saymsg);
  break;
case "mc":
var mc = new Discord.RichEmbed()
.setTitle("Minecraft information")
.setThumbnail('https://crafatar.com/renders/head/' + args[1] + '?helm&scale=10')
.setDescription('information about ' + args[1])
.addField('Username:', '' + args[1])
.addField(`Skin:`, `https://minecraftskinstealer.com/skin.php?u=` + args[1] + '&s=700')
.addField('NameMc:', 'https://namemc.com/name/' + args[1])
.setFooter('PayBot')
message.channel.sendEmbed(mc)
break;
		
case "clear":
if (args[1]) {
    if (args[1] > 2) {
        if (args[1] > 50) {
            message.reply("You are clearing too much messages!");
        }
        else {
let messagecount = parseInt(args[1]);
  message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
        }
    } else {
        message.reply("You can only delete 3 messages or more.");
    }
} else {
    message.reply("Please type number of messages to delete.");
}
break;

	case "bal":
	message.reply('Balance: $(balance.bank)');
	break;
	
		
	
 
 
 
 
 
}
});
 
 
 
 
 
 
bot.login(process.env.BOT_TOKEN);
