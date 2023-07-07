require("dotenv").config();
const TelegramBot = require("node-telegram-bot-api");
const token = "5813670487:AAHCqITYcWT2-qMjRgcPuxvQulcmb1YMYMs";
const bot = new TelegramBot(token, { polling: true });
console.log(token);

const axios = require("axios");
const cheerio = require("cheerio");

const url =
  "https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=0&ie=utf8&query=%EC%9D%8C%EC%95%85%EC%88%9C%EC%9C%84";

// bot.onText(/^안녕/, (msg, match) => {
//   const chatId = msg.chat.id;
//   //   const resp = match['input'] //메아리
//   const resp = "난 별로";
//   console.log(resp);
//   bot.sendMessage(chatId, resp);
// });

// bot.onText(/^음악차트/, async (msg, match) => {
//   const chatId = msg.chat.id;

//   try {
//     const res = await axios.get(url);
//     const $ = cheerio.load(res.data);
//     const song = [];

//     $(".tit_area").each(function () {
//       song.push($(this).text());
//     });

//     for (let i = 0; i < song.length; i++) {
//       await bot.sendMessage(chatId, `${i + 1}위 - ${song[i]}`);
//     }

//     console.log(song);
//   } catch (error) {
//     console.error(error);
//   }
// });

bot.on("message", (msg) => {
  const chatId = msg.chat.id;
  console.log(msg);
});
