module.exports.config = {
	name: "paint",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Réynél",
	description: "just a paint",
	commandCategory: "mentions",
	usages: "[mention or blank]",
  cooldowns: 5,
	dependencies: {"fs-extra": "","discord.js": "","discord-image-generation" :"","node-superfetch": ""}
};

module.exports.run = async ({ event, api, args, Users }) => {
  const DIG = global.nodemodule["discord-image-generation"];
  const Discord = global.nodemodule['discord.js'];
  const request = global.nodemodule["node-superfetch"];
  const fs = global.nodemodule["fs-extra"];
  if (this.config.credits != 'Réynél') {
        console.log('\x1b[33m[ WARN ]\x1b[37m » credits to Réynél'+ global.config.BOTNAME + ' đổi credits modules "' + this.config.name + '"');
        return api.sendMessage('[ WARN ] Detect bot operator ' , event.threadID, event.messageID);
      }
   let { senderID, threadID, messageID } = event;
  var id = Object.keys(event.mentions)[0] || event.senderID;
  var currency = args.toString().replace(/,/g,  '  ')
  var avatar = (await request.get(`https://graph.facebook.com/${id}/picture?width=512&height=512&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`)).body;
  
  let img = await new DIG.Bobross().getImage(avatar)
  let attach = new Discord.MessageAttachment(img);
  var path_wanted = __dirname + "/cache/wetd.png";
  fs.writeFileSync(path_wanted, attach.attachment);
  api.sendMessage({body: "𝗝𝘂𝘀𝘁 𝘀𝘁𝗮𝘆 𝘁𝗵𝗲𝗶𝗿 𝗜'𝗺 𝗽𝗮𝗶𝗻𝘁𝗶𝗻𝗴 𝘆𝗼𝘂 𝗯𝘂𝗱𝗱𝘆", attachment: fs.createReadStream(path_wanted)}, event.threadID, () => fs.unlinkSync(path_wanted), event.messageID);
                 }