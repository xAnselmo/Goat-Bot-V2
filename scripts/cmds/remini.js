const a = require('axios');
const tinyurl = require('tinyurl');

module.exports = {
  config: {
    name: "remini",
    version: "1.0",
    author: "JARiF",
    countDown: 15,
    role: 0,
    longDescription: "enhance your image.",
    category: "utility",
    guide: {
      en: "{pn} reply to an image"
    }
  },

  onStart: async function ({ message, args, event, api }) {
    let imageUrl;

    if (event.type === "message_reply") {
      const replyAttachment = event.messageReply.attachments[0];

      if (["photo", "sticker"].includes(replyAttachment?.type)) {
        imageUrl = replyAttachment.url;
      } else {
        return api.sendMessage(
          { body: "⚠️ | 𝗠𝗨𝗦𝗧 𝗥𝗘𝗣𝗟𝗬 𝗧𝗢 𝗔𝗡 𝗜𝗠𝗔𝗚𝗘." },
          event.threadID
        );
      }
    } else if (args[0]?.match(/(https?:\/\/.*\.(?:png|jpg|jpeg))/g)) {
      imageUrl = args[0];
    } else {
      return api.sendMessage({ body: "☣️ | 𝗠𝗨𝗦𝗧 𝗥𝗘𝗣𝗟𝗬 𝗧𝗢 𝗔𝗡 𝗜𝗠𝗔𝗚𝗘 𝗢𝗥 𝗣𝗥𝗢𝗩𝗜𝗗𝗘 𝗔𝗡 𝗜𝗠𝗔𝗚𝗘 𝗨𝗥𝗟." }, event.threadID);
    }

    try {
      const url = await tinyurl.shorten(imageUrl);
      const k = await a.get(`https://www.api.vyturex.com/upscale?imageUrl=${url}`);

      message.reply(📲📳) | 𝗣𝗟𝗘𝗔𝗦𝗘 𝗪𝗔𝗜𝗧...");

      const resultUrl = k.data.resultUrl;

      message.reply({ body: "✅✅ | 𝗜𝗠𝗔𝗚𝗘 𝗘𝗡𝗛𝗔𝗡𝗖𝗘𝗗 𝗦𝗨𝗖𝗖𝗘𝗦𝗦𝗙𝗨𝗟𝗟𝗬.", attachment: await global.utils.getStreamFromURL(resultUrl) });
    } catch (error) {
      message.reply("😭😭 | 𝗔𝗣𝗜 𝗗𝗘𝗔𝗗...");
    }
  }
};