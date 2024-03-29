<html><head></head><body>const axios = require('axios');

module.exports = {
  config: {
    name: 'chesca',
    version: '1.0',
    author: 'LiANE @nealianacagara',
    role: 0,
    category: 'Ai-Chat',
    shortDescription: {
      en: `Meet Chesca AI! Chesca is an energetic filipina AI that loves to chat to just enjoy her life, she also share her knowledge with you!`
    },
    longDescription: {
      en: `Meet Chesca AI! Chesca is an energetic filipina AI that loves to chat to just enjoy her life, she also share her knowledge with you!`
    },
    guide: {
      en: '{pn}chesca [query]'
    },
  },

  onStart: async function ({ api, event, args, usersData }) {
    try {
      const query = args.join(" ") || "hello";
      const { name } = (await usersData.get(event.senderID));

      if (query) {
        api.setMessageReaction("⏳", event.messageID, (err) =&gt; console.log(err), true);
        const processingMessage = await api.sendMessage(
          `Asking 💗 Chesca. Please wait a moment...`,
          event.threadID
        );

        const apiUrl = `https://lianeapi.onrender.com/@LianeAPI_Reworks/api/chesca?key=j86bwkwo-8hako-12C&amp;userName=${encodeURIComponent(name || "a user")}&amp;query=${encodeURIComponent(query)}`;
        const response = await axios.get(apiUrl);

        if (response.data &amp;&amp; response.data.message) {
          const trimmedMessage = response.data.message.trim();
          api.setMessageReaction("✅", event.messageID, (err) =&gt; console.log(err), true);
          await api.sendMessage({ body: trimmedMessage }, event.threadID, event.messageID);

          console.log(`Sent 💗 Chesca's response to the user`);
        } else {
          throw new Error(`Invalid or missing response from 💗 Chesca API`);
        }

        await api.unsendMessage(processingMessage.messageID);
      }
    } catch (error) {
      console.error(`❌ | Failed to get 💗 Chesca's response: ${error.message}`);
      const errorMessage = `❌ | An error occurred. You can try typing your query again or resending it. There might be an issue with the server that's causing the problem, and it might resolve on retrying.`;
      api.sendMessage(errorMessage, event.threadID);
    }
  },
};
</body></html>