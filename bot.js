const Discord = require('discord.js');
const A7MD = new Discord.Client();
client.on('ready', () => {
console.log("BOT ONLINE");
 
A7MD.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
**
سلام عليكم 
لو سمحت ممكن تدخل سيرفرى
                               [https://discord.gg/nK9bgGW] 
الدعووة خاصة لك ياقلبي  ... [ ${member}  ]
**`) 
}).catch(console.error)
})
A7MD.login('NTM4Mzk4MzQ1NTM0ODk4MjE2.DzFa4g.Ho0wBrzKRk9VA6oRuKTiltRVKY8');
