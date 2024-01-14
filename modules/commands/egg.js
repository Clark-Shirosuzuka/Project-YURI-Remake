module.exports.config = {
	name: "egg",
	version: "7.3.1",
	hasPermssion: 0,
	credits: "Réynél",
	description: "egg a person you mention",
	commandCategory: "mentions",
	usages: "[blank or mention]",
	cooldowns: 5,
	dependencies: {"fs-extra": "","discord.js": "","discord-image-generation" :"","node-superfetch": ""}
};

module.exports.run = async ({ event, api, args, Users }) => {
  const DIG = global.nodemodule["discord-image-generation"];
  const Discord = global.nodemodule['discord.js'];
  const request = global.nodemodule["node-superfetch"];
  const fs = global.nodemodule["fs-extra"];
   let { senderID, threadID, messageID } = event;
  var id = Object.keys(event.mentions)[0] || event.senderID;
  
  var avatar = (await request.get(`https://graph.facebook.com/${id}/picture?width=512&height=512&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`)).body;
  
  let img = await new DIG.Mms().getImage(avatar);
  let attach = new Discord.MessageAttachment(img);
  var path_trash = __dirname + "/cache/egg.png";
  fs.writeFileSync(path_trash, attach.attachment);
  api.sendMessage({body: "𝖸𝖾𝖺𝗁 𝗒𝗈𝗎 𝗅𝗈𝗈𝗄 𝗍𝗈𝗍𝖺𝗅𝗅𝗒 𝖺 𝗌𝗁𝗂𝗍", attachment: fs.createReadStream(path_trash)}, event.threadID, () => fs.unlinkSync(path_trash), event.messageID);
}
