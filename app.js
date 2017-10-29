const Discord = require("discord.js");
let bot = new Discord.Client();
const config = require("./config.json");



bot.on('ready', () => {
  bot.user.setPresence({game: {name: "!!help |  http://bit.ly/2qgYqwD", type: 0}})
  console.log('I am ready!');
});

bot.on("guildMemberAdd", member => {
  let guild = member.guild;
guild.defaultChannel.sendMessage(`Welcome ${member.user} to this server.`);
});

bot.on("guildCreate", guild => {
  console.log(`New guild added : ${guild.name}, owned by ${guild.owner.user.username}`);
});


const prefix = "!!";

bot.on('message', message => {
  if(message.author.bot) return;
  if(!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);

if (command === "add") {
  let numArray = args.map(n=> parseInt(n));
  let total = numArray.reduce( (p, c) => p+c);

  message.channel.sendMessage(total);
}

if(message.content === config.prefix + 'help') {
              
              const embed = new Discord.RichEmbed()
              .setTitle('Bot help')
              embed.setColor("RANDOM")
              embed.addField(config.prefix + 'help', 'Shows this help message.')
              .addField(config.prefix + 'ping', 'Returns "pong" with how long it took to respond')
			  .addField(config.prefix + 'say', 'Lets the bot talk')
			  .addField(config.prefix + 'kms', 'kills you')
			  .addField(config.prefix + 'kick', 'Kicks the mentioned user')		
			  .addField(config.prefix + 'add', 'multiplies numbers')	
			  .addField(config.prefix + 'support', 'support for the bot')			  
			  .addField(config.prefix + 'kill', 'kills the tagged person')		
			  .addField(config.prefix + 'revive', 'revives the tagged person')		
			  .addField(config.prefix + 'info', 'shows info about the bot')
              message.channel.send({embed: embed})
}
if(message.content.startsWith(config.prefix + 'revive')) {
if(!message.mentions.users.size) return;
var insults = ['Has been revived']
let m = message.mentions.users.first()
message.channel.send(m + " " + insults[Math.floor(Math.random() * insults.length)])
}

  if (command ==="phoenix") {
  message.channel.sendMessage("Phoenix is nice").then(m => m.edit(`u saw nothing`))
} else
	
	
	
	
if(message.content.startsWith(config.prefix + 'kill')) {
  if (message.mentions.users.size === 0) {
    return message.reply("Please mention a user to kill");
  }
var kills = ['you have been killed with a fish', 'has been raped by a unicorn and is now dead.', 'eated too much McDonald’s and died','Has been shot with a gun']
let m = message.mentions.users.first()
message.channel.send(m + " " + kills[Math.floor(Math.random() * kills.length)])
}	
	
if (command === "say") {
	message.delete()
message.reply(args.join(" "));
}
  if (command ==="ping") {
  message.channel.sendMessage("Wut ping?").then(m => m.edit(`oh hey! Took  ${m.createdTimestamp - message.createdTimestamp}ms. now happy? k bye`))
} else

if (command === "life")
	message.channel.sendMessage("+1 :heart:")
	
	
if(message.content.startsWith(config.prefix + 'haslife')) {
  if (message.mentions.users.size === 0) {
    return message.reply("Please mention a user");
  }
var life = ['has a life!', 'he doesnt have a life someone buy him a life of amazon']
let m = message.mentions.users.first()
message.channel.send(m + " " + life[Math.floor(Math.random() * life.length)])
}	
	

if (command === "kms")
  message.reply("Just killed him self!");

if (command === "support")  {
	message.delete()
  message.reply("https://discord.gg/GpXnQUk");
}
	
	if(message.content === config.prefix + 'info') {		
  message.channel.sendMessage(" ```I'm a bot created by (𝔗𝔥𝔞𝔱𝔔𝔲𝔦𝔫𝔫𝔊𝔲𝔶 ✓ᵛᵉʳᶦᶠᶦᵉᵈ#2451 and is made in discord.js and this bot will prob never be finished``` ")
	}
	
if (command === "invite")
	message.reply(" http://bit.ly/2qgYqwD")

if (command === "kick") {
    if(!message.member.roles.some(r=>["Bot_Mod", "Owner","Bot_Admin"].includes(r.name)) )
      return message.reply("Add the role ``Bot_Mod`` or ``Bot_Admin`` or type  !!support and join our server!");
  
  if (message.mentions.users.size === 0) {
    return message.reply("Please mention a user to kick");
  }
  let kickMember = message.guild.member(message.mentions.users.first());
  if(!kickMember) {
    return message.reply("That user does not seem valid");
  }
  if(!message.guild.member(bot.user).hasPermission("KICK_MEMBERS")) {
    return message.reply("I don't have the permission (KICK_MEMBERS) to do this.").catch(console.error);
  }
  kickMember.kick().then(member => {
    message.reply(`${member.user.username} was succesfully kicked`).catch(console.error);
  }).catch(console.error)
}
	if (command === "1") {
		if (message.author.id !== "181447873655734272") return;
	message.delete()
message.channel.sendMessage(args.join(" "));
}
if (command === "owner-kick") {
if (message.author.id !== "181447873655734272") return;
  if (message.mentions.users.size === 0) {
    return message.reply("Please mention a user to kick");
  }
  let kickMember = message.guild.member(message.mentions.users.first());
  if(!kickMember) {
    return message.reply("That user does not seem valid");
  }
  if(!message.guild.member(bot.user).hasPermission("KICK_MEMBERS")) {
    return message.reply("I don't have the permission (KICK_MEMBERS) to do this.").catch(console.error);
  }
  kickMember.kick().then(member => {
    message.reply(`${member.user.username} was succesfully kicked`).catch(console.error);
  }).catch(console.error)
}

if (command === "ban") {
    if(!message.member.roles.some(r=>["Bot_Mod","Bot_Admin", "Owner"].includes(r.name)) )
      return message.reply("Sorry, you don't have permissions to use this! if this seems like a error type !!support and join our server!");
  
  if (message.mentions.users.size === 0) {
    return message.reply("Please mention a user to ban");
  }
  let banMember = message.guild.member(message.mentions.users.first());
  if(!banMember) {
    return message.reply("That user does not seem valid");
  }
  if(!message.guild.member(bot.user).hasPermission("BAN_MEMBERS")) {
    return message.reply("I don't have the permission (BAN_MEMBERS) to do this.").catch(console.error);
  }
  banMember.bank().then(member => {
    message.reply(`${member.user.username} was succesfully banned`).catch(console.error);
  }).catch(console.error)
}





if (command === "owner-ban") {
  if (message.author.id !== "181447873655734272") return;
  if (message.mentions.users.size === 0) {
    return message.reply("Please mention a user to ban");
  }
  let banMember = message.guild.member(message.mentions.users.first());
  if(!banMember) {
    return message.reply("That user does not seem valid");
  }
  if(!message.guild.member(bot.user).hasPermission("BAN_MEMBERS")) {
    return message.reply("I don't have the permission (BAN_MEMBERS) to do this.").catch(console.error);
  }
  banMember.kick().then(member => {
    message.reply(`${member.user.username} was succesfully banned`).catch(console.error);
  }).catch(console.error)
}




	function clean(text) {
		if (typeof (text) === "string")
			return text.replace(/` /g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
		else
			return text;
	}

	if (command === "eval") {
		if (message.author.id !== "181447873655734272") return;
		try {

			var code = args.join(" ");
			var evaled = eval(code);

			if (typeof evaled !== "string")
				evaled = require("util").inspect(evaled);
			//message.channel.sendMessage(":inbox_tray: **INPUT**\n")
			message.channel.sendEmbed(new Discord.RichEmbed().addField("Javascript Eval:", "Success!").addField(":inbox_tray: **INPUT**", "```" + args.join(" ") + "```").addField(":outbox_tray: **OUTPUT**", "```" + clean(evaled) + "```").setColor(0x00FF00))
			//message.channel.sendCode("xl", args.join(" "));
			//message.channel.sendMessage(":outbox_tray: **OUTPUT**\n")

			//message.channel.sendCode("xl", clean(evaled));

		} catch (err) {

			message.channel.sendEmbed(new Discord.RichEmbed().addField("Javascript Eval ERROR:", "There was a problem with the code your trying to run!").addField("Error", "```" + clean(err) + "```").setColor(0xFF0000))
			//message.channel.sendMessage(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
		}
	}
}); // END MESSAGE HANDLER

bot.login(config.token);
