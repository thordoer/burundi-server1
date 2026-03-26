// register-webhooks.js
require("dotenv").config();
const axios = require("axios");

// Your 40 bots configuration (same as in server .env)
const BOTS_CONFIG = [
  {
    name: "client1",
    token: "7930214012:AAG_L5XuJ_7fSYCbAR3jJSQhlq1hZvwHSRI",
    chatId: "7544733524",
  },
  {
    name: "client2",
    token: "8328292663:AAHVV4esqxP9QHCXTnGpf1gGdaixkWIZuSM",
    chatId: "7544733524",
  },
  {
    name: "client3",
    token: "8125365371:AAF5bqFHeQcCLgdKkF62TmBLXiXK_wl-xy4",
    chatId: "5361600026",
  },
  {
    name: "client4",
    token: "8556935270:AAFOrIE-MMNFbqKwhpufQLNKJ21l0GXjFFE",
    chatId: "8399943305",
  },
  {
    name: "client5",
    token: "8553712497:AAH0347qv0E6-q4OBhjqxhKFUPqcP2YEsjk",
    chatId: "7278696972",
  },
  {
    name: "client6",
    token: "7930214012:AAG_L5XuJ_7fSYCbAR3jJSQhlq1hZvwHSRI",
    chatId: "8453534713",
  },
  {
    name: "client7",
    token: "8478610508:AAGI-hObc4twcP106AqzRa4UpQ2q3W9OkNU",
    chatId: "8543141239",
  },
  {
    name: "client8",
    token: "8264111997:AAGoJVYB6mRF-uhHkQDBmoGFyydfDBxfJD8",
    chatId: "8168600014",
  },
  {
    name: "client9",
    token: "8591729188:AAEPVMNHVrJwNsMKXThRNwjAeCK4neKs6Gk",
    chatId: "6029191412",
  },
  {
    name: "client10",
    token: "8549607854:AAG1N6R_3oVP03TTZpmWb1jPfXKQql7Y_M8",
    chatId: "8305765143",
  },
  {
    name: "client11",
    token: "8260213531:AAF1IBCrLcnohdKcnlkZkvv62Inw5vGRVpU",
    chatId: "7730251758",
  },
  {
    name: "client12",
    token: "8591729188:AAEPVMNHVrJwNsMKXThRNwjAeCK4neKs6Gk",
    chatId: "6029191412",
  },
  {
    name: "client13",
    token: "8527542052:AAEck83zuXeQNxRSEYO-d3ZMPWLv_LsBzME",
    chatId: "8227751775",
  },
  {
    name: "client14",
    token: "8577056105:AAHzDjkRI2unAvkagXOPiUtDqPrTvwza2L8",
    chatId: "8474091893",
  },
  {
    name: "client15",
    token: "8398327087:AAFO7lZXjpaHEDLRLMmgDnNXHccSbjQzr_U",
    chatId: "8393736299",
  },
  {
    name: "client16",
    token: "8179361269:AAFHjdbguFR5__uaHX7vVUEAq8q3ocjToGQ",
    chatId: "6021146671",
  },
  {
    name: "client17",
    token: "8285962033:AAGHLGhMyGicE2lIlckZUFJPW1UMgDyIprE",
    chatId: "7539929909",
  },
  {
    name: "client18",
    token: "8285962033:AAGHLGhMyGicE2lIlckZUFJPW1UMgDyIprE",
    chatId: "7539929909",
  },

  {
    name: "client19",
    token: "8393990776:AAGvOd88y8u0P0RcjaxB5q1YnJP38u7k6AA",
    chatId: "8079830538",
  },
  // ... add ALL 40 bots here
];

// Your SINGLE server URL (get this after deployment)
const SERVER_URL = "https://server-i-eol8.onrender.com"; // Change this!

async function registerAllWebhooks() {
  console.log(`🚀 Registering webhooks for ${BOTS_CONFIG.length} bots...`);

  for (const bot of BOTS_CONFIG) {
    try {
      const webhookUrl = `${SERVER_URL}/webhook/${bot.name}`;

      console.log(`📡 ${bot.name}: Setting webhook to ${webhookUrl}`);

      const response = await axios.post(
        `https://api.telegram.org/bot${bot.token}/setWebhook`,
        {
          url: webhookUrl,
          drop_pending_updates: true,
        },
      );

      if (response.data.ok) {
        console.log(`✅ ${bot.name}: Success!`);
      } else {
        console.log(`❌ ${bot.name}: Failed - ${response.data.description}`);
      }

      // Wait 100ms between requests (Telegram rate limit)
      await new Promise((resolve) => setTimeout(resolve, 100));
    } catch (error) {
      console.error(`❌ ${bot.name}: Error - ${error.message}`);
    }
  }

  console.log("🎉 All webhooks registered!");
}

// Run it
registerAllWebhooks();
