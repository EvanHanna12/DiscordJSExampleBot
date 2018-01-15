const { ShardingManager } = require('discord.js');
// dont change total shards unless your bot is in or around 2500 guilds
const manager = new ShardingManager(`bot.js`, {totalShards: 1});

manager.spawn();
manager.on('launch', shard => {console.log(`Successfully launched shard ${shard.id}`)});
// Shard #1 will have an ID of 0, #2 will have an ID of 1, etc..
