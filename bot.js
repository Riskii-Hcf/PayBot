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
.setFooter('Latenci')
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
