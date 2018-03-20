const { ShardingManager } = require('discord.js');
// don't change total shards unless your bot is at or around 2500 guilds
const manager = new ShardingManager(`bot.js`, {totalShards: 1});

manager.spawn();
manager.on('launch', shard => {console.log(`Successfully launched shard ${shard.id}`)});
// (computers count from zero) Shard #1 will have an ID of 0, #2 will have an ID of 1, etc..
