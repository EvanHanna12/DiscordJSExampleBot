// Get the discord.js library, and assign it to a variable
// If Discord.JS is not installed, hit the WINDOWS+R keys, and type CMD
// use the CD command to change to the directory where your bot is
// ex: CD C:\Programs\MyDiscordBot
// then: npm install discord.js --save
// If Node & NPM is not installed install it from https://nodejs.org/en/
// run bot with the command from CMD: node bot.js
// or if you have sharder.js, use: node sharder.js
const Discord = require('discord.js');

// Initiate the discord client
const client = new Discord.Client();

// Bot token
// Get from your bot application
// https://discordapp.com/developers/applications/me
const token="MzU5NTEyNjA3NzE3MDY0NzA2.DT6FeQ.vVUzrDMoRslJDsHmFECgetqcRU4";

// Bot Prefix
const prefix="!";

// option to log activity changes to console
// this will send a message to the console at least every 5 seconds
var log_change_to_console=false;

// Changes the bots activity message between these every five seconds
setInterval(function() {
	// Changes the bots status to "Watching ${client.guilds.size} Guilds"
	// client.guilds.size = total count of guilds the bot is in
	// Function: https://discord.js.org/#/docs/main/stable/class/ClientUser?scrollTo=setActivity
	// Type Values: https://discord.js.org/#/docs/main/stable/typedef/ActivityType
	client.user.setActivity(`${client.guilds.size} Guilds`,{"type":"WATCHING"});
	if(log_change_to_console) {
		// logs the activity change to the console
		// client.guilds: https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=guilds 
		console.log(`Changed Activity To "${client.guilds.size} Guilds" (WATCHING)`);
	}
	setTimeout(function() {
		// Changes the bots status to "Listening to ${client.channels.size} Channels"
		// client.channels.size = total count of channels the bot can see throughout all guilds
		// Function: https://discord.js.org/#/docs/main/stable/class/ClientUser?scrollTo=setActivity
		// Type Values: https://discord.js.org/#/docs/main/stable/typedef/ActivityType
		client.user.setActivity(`${client.channels.size} Channels`,{"type":"LISTENING"});
		if(log_change_to_console) {
			// logs the activity change to the console
			// client.guilds: https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=guilds 
			console.log(`Changed Activity To "${client.channels.size} Channels" (LISTENING)`);
		}
	}, 5000);
	setTimeout(function() {
		// Changes the bots status to "Playing With ${client.users.size} Users"
		// client.users.size = total users the bot can see throughout all guilds
		// Function: https://discord.js.org/#/docs/main/stable/class/ClientUser?scrollTo=setActivity
		// Type Values: https://discord.js.org/#/docs/main/stable/typedef/ActivityType
		client.user.setActivity(`With ${client.users.size} Users`,{"type":"PLAYING"});
		if(log_change_to_console) {
			// logs the activity change to the console
			// client.guilds: https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=guilds 
			console.log(`Changed Activity To "With ${client.users.size} Users" (PLAYING)`);
		}
	}, 10000);
}, 15000);


// This event will run if the bot starts, and logs in, successfully.
// Event: https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-ready
client.on("ready", () => {
  // logs a message to console with how man guilds the bot is in, how many channels it can see, and how many users it can see.
  // client.guilds: https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=guilds
  // client.users: https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=users
  console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`); 
  // Example of changing the bot's playing game to something useful. `client.user` is what the
  // Change the bots game to "Watching ${client.guilds.size} Guilds"
  // client.guilds.size = total count of guilds the bot is in
  // Function: https://discord.js.org/#/docs/main/stable/class/ClientUser?scrollTo=setActivity
  // Type Values: https://discord.js.org/#/docs/main/stable/typedef/ActivityType
	 client.user.setActivity(`${client.guilds.size} Guilds`,{"type":"WATCHING"});
});

// This event will run when the bot is added to a guild.
// Event: https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-guildCreate
client.on("guildCreate", guild => {
  // Guild Class: https://discord.js.org/#/docs/main/stable/class/Guild
  console.log(`New Guild: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);
});


// This event will run when the bot is removed from a guild.
// Event: https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-guildDelete
client.on("guildDelete", guild => {
  // Guild Class: https://discord.js.org/#/docs/main/stable/class/Guild
  console.log(`Removed from: ${guild.name} (id: ${guild.id})`);
});


// This event will run when a member joins a guild.
// Event: https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-guildMemberAdd
client.on("guildMemberAdd", member => {
	// GuildMember Class: https://discord.js.org/#/docs/main/stable/class/GuildMember
	console.log(`New Member: ${member.user.tag} in guild ${member.guild.name} (${member.guild.id})`);
});


// This event will run when a member leaves or is kicked from a guild.
// Event: https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-guildMemberRemove
client.on("guildMemberRemove", member => {
	// Member Object: https://discord.js.org/#/docs/main/stable/class/GuildMember
	console.log(`Member Left: ${member.user.tag} in guild ${member.guild.name} (${member.guild.id})`);
});


// This event will run when a member is banned from a guild.
// Event: https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-guildBanAdd
client.on("guildBanAdd", member => {
	// Guild Class: https://discord.js.org/#/docs/main/stable/class/Guild
	// User Class: https://discord.js.org/#/docs/main/stable/class/User
	console.log(`Member Banned: ${member.user.tag} in guild ${member.guild.name} (${member.guild.id})`);
});


// This event will run when a member is unbanned from a guild.
// Event: https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-guildBanRemove
client.on("guildBanRemove", member => {
	// Guild Class: https://discord.js.org/#/docs/main/stable/class/Guild
	// User Class: https://discord.js.org/#/docs/main/stable/class/User
	console.log(`Member UnBanned: ${member.user.tag} in guild ${member.guild.name} (${member.guild.id})`);
});


// This event will run when a member sends a message in a channel the bot can see
// Message Class: https://discord.js.org/#/docs/main/stable/class/Message
client.on("message", async message => {
	
	// Its best to ignore all messages from other bots
	// this makes it ignore itself, and all other bots.
	if(message.author.bot) return;
	
	if(message.content.indexOf(prefix) !== 0) return;
  
	// Here we separate our "command" name, and our "arguments" for the command. 
	// e.g. if we have the message "!say Is this the real life?" , we'll get the following:
	// command = say
	// args = ["Is", "this", "the", "real", "life?"]
	const args = message.content.slice(prefix.length).trim().split(/\s+/g);
	const command = args.shift().toLowerCase();

	switch(command) {
		case "ping":
			// Calculates ping between sending a message and editing it, giving a nice round-trip latency.
			// The second ping is an average latency between the bot and the websocket server (one-way, not round-trip)
			// Message Class: https://discord.js.org/#/docs/main/stable/class/Message
			// Channel Class: https://discord.js.org/#/docs/main/stable/class/Channel
			const m = await message.channel.send("Ping?");
			m.edit(`Pong! Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ping)}ms`);
		break;

		case "kick":
			// This command should be limited to staff. In this example we just hardcode the role names.
			// Please read on Array.some() to understand this bit: 
			// https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/some
			if(!message.member.roles.some(r=>["STAFF","ROLE2"].includes(r.name))) {
			  return message.reply("Sorry, you don't have permissions to use this!");
			}
			
			// Let's first check if we have a member and if we can kick them!
			// message.mentions.members is a collection of people that have been mentioned, as GuildMembers.
			// GuildMember Class: https://discord.js.org/#/docs/main/stable/class/GuildMember
			// Message Class: https://discord.js.org/#/docs/main/stable/class/Message
			// message.mentions: https://discord.js.org/#/docs/main/stable/class/Message?scrollTo=mentions
			// MessageMentions Class: https://discord.js.org/#/docs/main/stable/class/MessageMentions
			let kickmember = message.mentions.members.first();
			if(!kickmember) {
			  return message.reply("Please mention a valid member of this server");
			}
			
			if(!kickmember.kickable) {
			  return message.reply("I cannot kick this user! Do they have a higher role? Do I have kick permissions?");
			}
			// slice(1) removes the first part, which here should be the user mention!
			let kickreason = args.slice(1).join(' ');
			if(!kickreason) {
			  return message.reply("Please indicate a reason for the kick!");
			}
			
			// Now, time to kick them!
			await kickmember.kick(kickreason)
			  .catch(error => message.reply(`Sorry ${message.author} I couldn't kick ${kickmember.user.tag} because of : ${error}`));
			message.reply(`${member.user.tag} has been kicked by ${kickmessage.author.tag} because: ${reason}`);
		break;
		
		case "ban":
			// This command will be similar to kick, but here we'll check for permissions
			// Permission Strings: https://discord.js.org/#/docs/main/stable/class/Permissions?scrollTo=s-FLAGS
			// .hasPermission Function: https://discord.js.org/#/docs/main/stable/class/GuildMember?scrollTo=hasPermission
			// .hasPermissions Function: https://discord.js.org/#/docs/main/stable/class/GuildMember?scrollTo=hasPermissions
			// People with the ADMINISTRATOR permission, and the OWNER will bypass this, the last 2 parameters cause this.
			if(!message.member.hasPermission("BAN_MEMBERS",null,true,true)) {
			// Example with Multiple Permissions:
			// .hasPermissions(Array("BAN_MEMBERS","KICK_MEMBERS"),null,true,true)) {
			  return message.reply("Sorry, you don't have permissions to use this!");
			}
			
			// Let's first check if we have a member and if we can ban them!
			// message.mentions.members is a collection of people that have been mentioned, as GuildMembers.
			// GuildMember Class: https://discord.js.org/#/docs/main/stable/class/GuildMember
			// Message Class: https://discord.js.org/#/docs/main/stable/class/Message
			// message.mentions: https://discord.js.org/#/docs/main/stable/class/Message?scrollTo=mentions
			// MessageMentions Class: https://discord.js.org/#/docs/main/stable/class/MessageMentions
			let banmember = message.mentions.members.first();
			if(!banmember) {
			  return message.reply("Please mention a valid member of this server");
			}
			
			if(!banmember.kickable) {
			  return message.reply("I cannot ban this user! Do they have a higher role? Do I have ban permissions?");
			}
			
			// slice(1) removes the first part, which here should be the user mention!
			let banreason = args.slice(1).join(' ');
			
			if(!banreason) {
			  return message.reply("Please indicate a reason for the ban!");
			}
			// Now, time to ban them!
			await banmember.ban(banreason)
			  .catch(error => message.reply(`Sorry ${message.author} I couldn't ban ${banmember.user.tag} because of : ${error}`));
			message.reply(`${banmember.user.tag} has been banned by ${message.author.tag} because: ${banreason}`);
		break;
		
		default:
			return;
	}
});

// This will connect the bot with discords API
// Client Class: https://discord.js.org/#/docs/main/stable/class/Client
client.login(token);
