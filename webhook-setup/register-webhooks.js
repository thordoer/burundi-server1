// register-webhooks.js
const axios = require("axios");

// ============= YOUR 40 BOTS CONFIGURATION =============
// REPLACE THESE WITH YOUR ACTUAL BOT TOKENS AND CHAT IDs!
BOTS = [
  {
    name: "client1",
    token: "8551231951:AAFv7Oj_7fAJ6_eAAJzaLVOoyTdUsQU_JCE",
    chatId: "7544733524",
  },

  {
    name: "client2",
    token: "8696618580:AAEMrm5zxE88LpqZkFwu8aVQUlP-YaYdFW4",
    chatId: "8104507429",
  },
  {
    name: "client3",
    token: "8697429856:AAF-A-tjDCg3jlf8LkErAkfuXYTmoksh23M",
    chatId: "8104507429",
  },
  {
    name: "client4",
    token: "8718319295:AAFkz-rC8upJD0Vh9SY6lt5tzq78RhYz6SQ",
    chatId: "5198742565",
  },
  // {
  //   name: "client5",
  //   token: "8536926842:AAG0VgEEUu-KRL8hI_59sqhnVU9pzVlxaJc",
  //   chatId: "8262114684",
  // },
  // {
  //   name: "client6",
  //   token: "8583657961:AAGWczTtqcdD4MIJ6YX6Yg9RfY8-0f4L3pA",
  //   chatId: "7955308688",
  // },
  // {
  //   name: "client7",
  //   token: "8516347083:AAEitTI-rPSweJG90lhCo2Ad7WUEJNg81KI",
  //   chatId: "5847666057",
  // },
  // {
  //   name: "client8",
  //   token: "8550102217:AAGHTT_ZCTn7HdZPNLWjfDTpHczeied4sKg",
  //   chatId: "8304013578",
  // },

  // {
  //   name: "client9",
  //   token: "8551308445:AAEPtYW1UjzsH5LU8OAZVzX2Fj7XWkZi0tQ",
  //   chatId: "8104507429",
  // },

  // {
  //   name: "client10",
  //   token: "8587505927:AAEwo7XynXs96rS1qJ5of3sNbZdzq_AdnSQ",
  //   chatId: "8399943305",
  // },

  // {
  //   name: "client11",
  //   token: "8594905172:AAG89A6yemnQbX8gp9qxpkwemN_qZZA_gpA",
  //   chatId: "8541142393",
  // },

  // {
  //   name: "client12",
  //   token: "8547232356:AAEQKVme-qIdg17HAHDP4hvZDJkBEQZvAXc",
  //   chatId: "8402619585",
  // },

  // {
  //   name: "client13",
  //   token: "8279990533:AAHIasCjWwKWhyf2NiphvliCFnpOv12QKV4",
  //   chatId: "8393736299",
  // },

  // {
  //   name: "client14",
  //   token: "8471872910:AAGBUm4yDgduZ9i3Po2-p6ft9L8EFGID1bc",
  //   chatId: "8411947886",
  // },

  // {
  //   name: "client15",
  //   token: "8441848883:AAFT49kfEGqjwHeHpas6pyZUfhMZZZk1V7Y",
  //   chatId: "989364049",
  // },

  // {
  //   name: "client16",
  //   token: "7884575102:AAFL1wWfJhryqdnUZKKKePhvPC0vWx3ed0o",
  //   chatId: "8509286699",
  // },
  // {
  //   name: "client17",
  //   token: "8345300764:AAHvdg4XIPhROOf4fhbrBSsN0lszwSoxkQU",
  //   chatId: "8575051751",
  // },
  // {
  //   name: "client18",
  //   token: "8421552202:AAGFAwvqNQoc0OCmlQZFKVMw66VhjfDs0ZQ",
  //   chatId: "7361191305",
  // },
  // {
  //   name: "client19",
  //   token: "8256068941:AAEogrIA3qahB6gi77Khz-nz3h88_PvFSck",
  //   chatId: "6799434009",
  // },
  // {
  //   name: "client20",
  //   token: "8231366396:AAEWuaeZZSwQa9e9Ly2BGW-I5jCcamrStyY",
  //   chatId: "8407364130",
  // },
  // {
  //   name: "client21",
  //   token: "8274651370:AAFd7YGqwyAxQlv2-bhb0DwsLRrFHyEbh-k",
  //   chatId: "8270010151",
  // },
  // {
  //   name: "client22",
  //   token: "8204867517:AAFWP6uPFn-ErBYZnGUCunYo01JFcPYgEN8",
  //   chatId: "7992766077",
  // },
  // {
  //   name: "client23",
  //   token: "8502344788:AAGbrPd4qqM5iVlig39PacvdIxHdTl9HI8g",
  //   chatId: "6177586192",
  // },
  // {
  //   name: "client24",
  //   token: "8445054411:AAHFKxQPiceGB1gYKVgcyqnETYUZsw5kjkg",
  //   chatId: "8201664664",
  // },

  // {
  //   name: "client25",
  //   token: "8508425646:AAHzd9zkS0CZ2WQz_oMaKDK_ELB1Z8f4mjM",
  //   chatId: "8176730540",
  // },

  // {
  //   name: "client26",
  //   token: "8261634933:AAFlzyn9ypE-7-44Joggm-pmeqlDvlk-c7I",
  //   chatId: "8436429962",
  // },
  // {
  //   name: "client27",
  //   token: "8366547085:AAH8Zp6LqJTHfvAqJUo5R4eCdNOW_5ijOoc",
  //   chatId: "6509882041",
  // },
  // {
  //   name: "client28",
  //   token: "8503311239:AAEZseql3V7K2RfL_LGRJL0K1Wxf7EdkgFE",
  //   chatId: "6651009288",
  // },
  // {
  //   name: "client29",
  //   token: "8482669914:AAHHKfrMKvgCOlNyWgNt5zvxW6YYSJJ_9Ls",
  //   chatId: "7505698058",
  // },
  // {
  //   name: "client30",
  //   token: "8791750342:AAEphSB1KvOfg98tojSZuYAoHiKRcbZX_SY",
  //   chatId: "7811380644",
  // },
];

// ============= YOUR SINGLE SERVER URL =============
// REPLACE THIS WITH YOUR ACTUAL SERVER URL!
// After you deploy the single server, you'll get a URL like:
// - Railway: https://your-project.railway.app
// - Render: https://your-project.onrender.com
const NEW_SERVER_URL = "https://burundi-server1.onrender.com"; // ⬅️ CHANGE THIS!

// ============= MAIN FUNCTION =============
async function registerAllWebhooks() {
  console.log(`🔧 Setting up ${BOTS.length} webhooks...\n`);

  let successCount = 0;
  let failedBots = [];

  for (const bot of BOTS) {
    const webhookUrl = `${NEW_SERVER_URL}/webhook/${bot.name}`;

    try {
      console.log(`📡 [${bot.name}] Setting webhook...`);
      console.log(`   URL: ${webhookUrl}`);

      const response = await axios.post(
        `https://api.telegram.org/bot${bot.token}/setWebhook`,
        {
          url: webhookUrl,
          drop_pending_updates: true,
          max_connections: 40,
        },
        { timeout: 15000 },
      );

      if (response.data.ok) {
        console.log(`   ✅ Success!\n`);
        successCount++;
      } else {
        console.log(`   ❌ Failed: ${response.data.description}\n`);
        failedBots.push({ name: bot.name, error: response.data.description });
      }
    } catch (error) {
      console.log(`   💥 Error: ${error.message}\n`);
      failedBots.push({ name: bot.name, error: error.message });
    }

    // Wait 200ms between requests to avoid rate limiting
    await new Promise((resolve) => setTimeout(resolve, 200));
  }

  // ============= RESULTS =============
  console.log("=".repeat(50));
  console.log("📊 REGISTRATION RESULTS:");
  console.log("=".repeat(50));
  console.log(`✅ Successful: ${successCount}/${BOTS.length}`);
  console.log(`❌ Failed: ${failedBots.length}`);

  if (failedBots.length > 0) {
    console.log("\n❌ Failed bots:");
    failedBots.forEach((bot) => {
      console.log(`   • ${bot.name}: ${bot.error}`);
    });
  }

  console.log("\n🎉 Webhook setup complete!");
  console.log(`🌐 Your single server: ${NEW_SERVER_URL}`);
}

// ============= VERIFY FUNCTION =============
async function verifyWebhooks() {
  console.log("\n🔍 Verifying webhooks...\n");

  for (const bot of BOTS) {
    try {
      const response = await axios.get(
        `https://api.telegram.org/bot${bot.token}/getWebhookInfo`,
        { timeout: 10000 },
      );

      if (response.data.ok) {
        const info = response.data.result;
        const status = info.url ? "✅ Set" : "❌ Not set";
        console.log(`${status} [${bot.name}] ${info.url || "No webhook set"}`);
      }
    } catch (error) {
      console.log(`💥 [${bot.name}] Failed to verify: ${error.message}`);
    }

    await new Promise((resolve) => setTimeout(resolve, 100));
  }
}

// ============= EXECUTE =============
async function main() {
  console.log("🤖 TELEGRAM WEBHOOK SETUP TOOL");
  console.log("=".repeat(50));

  // Check if BOTS array is empty
  if (BOTS.length === 0 || BOTS[0].token.includes("1234567890")) {
    console.log("❌ ERROR: You need to configure your bot tokens!");
    console.log("\n📝 INSTRUCTIONS:");
    console.log("1. Open register-webhooks.js in a text editor");
    console.log("2. Replace the BOTS array with your 40 bot configurations");
    console.log("3. Replace NEW_SERVER_URL with your actual server URL");
    console.log("4. Run this script again");
    return;
  }

  if (NEW_SERVER_URL.includes("your-new-server")) {
    console.log("❌ ERROR: You need to set your server URL!");
    console.log("\n📝 INSTRUCTIONS:");
    console.log("1. Deploy your single server first");
    console.log("2. Get the URL (e.g., https://your-app.railway.app)");
    console.log("3. Update NEW_SERVER_URL in this script");
    console.log("4. Run this script again");
    return;
  }

  // Ask for confirmation
  console.log(`\n⚠️  This will set webhooks for ${BOTS.length} bots`);
  console.log(`🌐 Server: ${NEW_SERVER_URL}`);
  console.log("\nDo you want to continue? (yes/no)");

  // For simplicity, just run it (you can add readline if you want)
  console.log("\n⏳ Starting webhook registration...\n");

  await registerAllWebhooks();
  await verifyWebhooks();
}

// Run the script
main().catch(console.error);
