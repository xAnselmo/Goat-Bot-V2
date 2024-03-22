module.exports = {
 config: {
	 name: "prefix",
	 version: "1.0",
	 author: "Tokodori_Frtiz",//remodified by cliff
	 countDown: 5,
	 role: 0,
	 shortDescription: "no prefix",
	 longDescription: "no prefix",
	 category: "auto 🪐",
 },

 onStart: async function(){}, 
 onChat: async function({ event, message, getLang }) {
 if (event.body && event.body.toLowerCase() === "prefix") {
 return message.reply({
 body: `
𝚈𝙺, 𝙼𝚈 𝙿𝚁𝙴𝙵𝙸𝚇 𝙸𝚂 [ 𓆩 - 𓆪 ]\n
𝗦𝗢𝗠𝗘 𝗖𝗢𝗠𝗠𝗔𝗡𝗗𝗦 𝗧𝗛𝗔𝗧 𝗠𝗔𝗬 𝗛𝗘𝗟𝗣 𝗬𝗢𝗨:
➥ -𝗔𝗜 [𝗔𝗦𝗞 𝗬𝗢𝗨𝗥 𝗤𝗨𝗘𝗦𝗧𝗜𝗢𝗡]-> AI [1+1]
➥ -𝗚𝗘𝗠𝗜𝗡𝗜 [𝗦𝗘𝗡𝗗 𝗣𝗜𝗖𝗧𝗨𝗥𝗘] -> GEMINI [QUERTY]
➥ -𝗧𝗘𝗠𝗣𝗠𝗔𝗜𝗟 [𝗘𝗠𝗔𝗜𝗟 𝗚𝗘𝗡] -> TEMPMAIL [INBOX/CREATE]
➥ -𝗖𝗛𝗢𝗥𝗗𝗦 [𝗚𝗨𝗜𝗧𝗔𝗥 𝗖𝗛𝗢𝗥𝗗𝗦] -> CHORDS (TITLE)\n\n𝗛𝗔𝗩𝗘 𝗙𝗨𝗡 𝗨𝗦𝗜𝗡𝗚 𝗜𝗧 𝗘𝗡𝗝𝗢𝗬!❤️\n𝗕𝗢𝗧 𝗗𝗘𝗩𝗘𝗟𝗢𝗣𝗘𝗥:facebook.com/4rtfloorAkimitsu`,
 attachment: await global.utils.getStreamFromURL("https://i.imgur.com/M4luPbE.gif")
 });
 }
 }
}