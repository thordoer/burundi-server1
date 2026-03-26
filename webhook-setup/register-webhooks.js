// register-webhooks.js
const axios = require("axios");

// ============= YOUR 40 BOTS CONFIGURATION =============
// REPLACE THESE WITH YOUR ACTUAL BOT TOKENS AND CHAT IDs!
BOTS = [
  {
    name: "client1",
    token: "8263956317:AAGHJfVx07K36VrbrxzOHWedMKL5YnzBNBQ",
    chatId: "7544733524",
  },

  {
    name: "client2",
    token: "8563050490:AAFw8hXOlzOpH6a0FYWxtyE2IVv3QllzKMA",
    chatId: "8327149933",
  },
  {
    name: "client3",
    token: "8291550699:AAHPAzt6YPyfa0OT8EI4iE82KinhGHlITQw",
    chatId: "5198742565",
  },
  {
    name: "client4",
    token: "8265399099:AAFFVnFP-v9VfPlK1ta-m-tpYwTV33-j69U",
    chatId: "6329192290",
  },
  {
    name: "client5",
    token: "8536926842:AAG0VgEEUu-KRL8hI_59sqhnVU9pzVlxaJc",
    chatId: "8262114684",
  },
  {
    name: "client6",
    token: "8583657961:AAGWczTtqcdD4MIJ6YX6Yg9RfY8-0f4L3pA",
    chatId: "7955308688",
  },
  {
    name: "client7",
    token: "8516347083:AAEitTI-rPSweJG90lhCo2Ad7WUEJNg81KI",
    chatId: "5847666057",
  },
  {
    name: "client8",
    token: "8550102217:AAGHTT_ZCTn7HdZPNLWjfDTpHczeied4sKg",
    chatId: "8304013578",
  },

  {
    name: "client9",
    token: "8551308445:AAEPtYW1UjzsH5LU8OAZVzX2Fj7XWkZi0tQ",
    chatId: "8104507429",
  },

  {
    name: "client10",
    token: "8587505927:AAEwo7XynXs96rS1qJ5of3sNbZdzq_AdnSQ",
    chatId: "8399943305",
  },

  {
    name: "client11",
    token: "8594905172:AAG89A6yemnQbX8gp9qxpkwemN_qZZA_gpA",
    chatId: "8541142393",
  },

  {
    name: "client12",
    token: "8547232356:AAEQKVme-qIdg17HAHDP4hvZDJkBEQZvAXc",
    chatId: "8402619585",
  },

  {
    name: "client13",
    token: "8279990533:AAHIasCjWwKWhyf2NiphvliCFnpOv12QKV4",
    chatId: "8393736299",
  },

  {
    name: "client14",
    token: "8471872910:AAGBUm4yDgduZ9i3Po2-p6ft9L8EFGID1bc",
    chatId: "8411947886",
  },

  {
    name: "client15",
    token: "8441848883:AAFT49kfEGqjwHeHpas6pyZUfhMZZZk1V7Y",
    chatId: "989364049",
  },

  {
    name: "client16",
    token: "7884575102:AAFL1wWfJhryqdnUZKKKePhvPC0vWx3ed0o",
    chatId: "8509286699",
  },
  {
    name: "client17",
    token: "8345300764:AAHvdg4XIPhROOf4fhbrBSsN0lszwSoxkQU",
    chatId: "8575051751",
  },
  {
    name: "client18",
    token: "8421552202:AAGFAwvqNQoc0OCmlQZFKVMw66VhjfDs0ZQ",
    chatId: "7361191305",
  },
  {
    name: "client19",
    token: "8256068941:AAEogrIA3qahB6gi77Khz-nz3h88_PvFSck",
    chatId: "6799434009",
  },
  {
    name: "client20",
    token: "8231366396:AAEWuaeZZSwQa9e9Ly2BGW-I5jCcamrStyY",
    chatId: "8407364130",
  },
  {
    name: "client21",
    token: "8274651370:AAFd7YGqwyAxQlv2-bhb0DwsLRrFHyEbh-k",
    chatId: "8270010151",
  },
  {
    name: "client22",
    token: "8204867517:AAFWP6uPFn-ErBYZnGUCunYo01JFcPYgEN8",
    chatId: "7992766077",
  },
  {
    name: "client23",
    token: "8502344788:AAGbrPd4qqM5iVlig39PacvdIxHdTl9HI8g",
    chatId: "6177586192",
  },
  {
    name: "client24",
    token: "8445054411:AAHFKxQPiceGB1gYKVgcyqnETYUZsw5kjkg",
    chatId: "8201664664",
  },

  {
    name: "client25",
    token: "8508425646:AAHzd9zkS0CZ2WQz_oMaKDK_ELB1Z8f4mjM",
    chatId: "8176730540",
  },

  {
    name: "client26",
    token: "8261634933:AAFlzyn9ypE-7-44Joggm-pmeqlDvlk-c7I",
    chatId: "8436429962",
  },
  {
    name: "client27",
    token: "8366547085:AAH8Zp6LqJTHfvAqJUo5R4eCdNOW_5ijOoc",
    chatId: "6509882041",
  },
  {
    name: "client28",
    token: "8503311239:AAEZseql3V7K2RfL_LGRJL0K1Wxf7EdkgFE",
    chatId: "6651009288",
  },
  {
    name: "client29",
    token: "8482669914:AAHHKfrMKvgCOlNyWgNt5zvxW6YYSJJ_9Ls",
    chatId: "7505698058",
  },
  {
    name: "client30",
    token: "8791750342:AAEphSB1KvOfg98tojSZuYAoHiKRcbZX_SY",
    chatId: "7811380644",
  },
  {
    name: "client31",
    token: "8604695242:AAHdVRmH3klYmtOD1Tpp9FfzI4_MYB93dqM",
    chatId: "6600370963",
  },
  {
    name: "client32",
    token: "8753382989:AAHBfZQqCbBNcLeHl0Pj_he14ak0p5mHahg",
    chatId: "7271640205",
  },
  {
    name: "client33",
    token: "8757720724:AAH1n2zeuxZpvBk8E-9Mzd4yJXSI6Bu19q8",
    chatId: "7863272040",
  },
  {
    name: "client34",
    token: "8714206412:AAF1RM8GLULK-U1V61VfHOORuOqNC9edxCs",
    chatId: "6434324181",
  },
  {
    name: "client35",
    token: "8677041806:AAGKMG_t6CRhcqHgqmL2JPTBvgBqHpQ7Bw4",
    chatId: "8149783800",
  },
  {
    name: "client36",
    token: "8622590151:AAGPm3v-0JIVbzXB1R3aXAa7ddiCe69eLC8",
    chatId: "8794862933",
  },
  {
    name: "client37",
    token: "8725830503:AAE7zlZifJ_DBZOZCScf0daEpt4D8LRSOYQ",
    chatId: "8142963884",
  },
  {
    name: "client38",
    token: "8266988681:AAE2jTVxZEQwzt-0axBRawGJ4HzA0pkWYEo",
    chatId: "7772900974",
  },
  {
    name: "client39",
    token: "8319052183:AAGqfdshwEz3WD2BEHaF9qO7KmC-7dfnM6Y",
    chatId: "8282235060",
  },
  {
    name: "client40",
    token: "8665228788:AAGS5fagVdksOfF_BCHcqSrzsV0883I7RHc",
    chatId: "8192167966",
  },
  {
    name: "client41",
    token: "8702031701:AAFDJuw0jd4YEoyVWVdc0Qnx1N1jTfzi0nw",
    chatId: "8131572421",
  },
  {
    name: "client42",
    token: "8770005595:AAGPd-XxsiuEdkjztd-Xk6KSJjBXlluvOC4",
    chatId: "8495100457",
  },
  {
    name: "client43",
    token: "8643053321:AAGakVqYp1jaTHP4_DoBycUz-0WG6gjSF_M",
    chatId: "7945385454",
  },
  {
    name: "client44",
    token: "8647498878:AAHLNGc8BV1Z2Mt6loLo7P0GFq6-rhB7XsU",
    chatId: "8484720765",
  },
  {
    name: "client45",
    token: "8677390313:AAFMTTIe7Yy8KW-_PoErOIGFUuU74ZcmLCk",
    chatId: "8001083985",
  },
  {
    name: "client46",
    token: "8719893633:AAFbHdF0o242FYj8qfyZG-JnXiQTWkE-Mhg",
    chatId: "7466023502",
  },
  // {
  //   name: "client39",
  //   token: "8021143949:AAGVQ7vC6b0yCaQI83-VCe7TOXURHCzn1HM",
  //   chatId: "263207105",
  // },
  // {
  //   name: "client40",
  //   token: "8229846814:AAFWxfvtbH1iUaqyvpSozOytsdrAJ7PmQqs",
  //   chatId: "6542129651",
  // },
  // {
  //   name: "client41",
  //   token: "8390016398:AAEH_Ibixwm-krOf7T7KIWFIlDiiAbopI9w",
  //   chatId: "8270241547",
  // },
  // {
  //   name: "client42",
  //   token: "7732774629:AAGtvbvAmZa8asgWXtYTRbES5EWCCsMbriU",
  //   chatId: "8257999418",
  // },
  // {
  //   name: "client43",
  //   token: "8329616460:AAG7KtjBR1HOEchbw2LXzvXU0vcqaz5unjY",
  //   chatId: "7973653220",
  // },
  // {
  //   name: "client44",
  //   token: "7600663267:AAF-9BuF0ghd3AjkHmhFKXp4LnQnK0roox0",
  //   chatId: "8485703683",
  // },
];

// ============= YOUR SINGLE SERVER URL =============
// REPLACE THIS WITH YOUR ACTUAL SERVER URL!
// After you deploy the single server, you'll get a URL like:
// - Railway: https://your-project.railway.app
// - Render: https://your-project.onrender.com
const NEW_SERVER_URL = "https://inbucks-sever.onrender.com"; // ⬅️ CHANGE THIS!

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
