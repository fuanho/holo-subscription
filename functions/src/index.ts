import * as functions from 'firebase-functions';
import { Telegraf } from "telegraf";

// Start writing Firebase Functions
// https://firebase.google.com/docs/functions/typescript

const token: string = functions.config().bot.token;
const username: string = functions.config().bot.username;
const bot = new Telegraf(token, { username });

bot.start((ctx) => ctx.reply("Welcome!"));
bot.command("test", (ctx) => ctx.reply("Hi"));

export const helloBot = functions.https.onRequest(async (request, response) => {
    // Catch all workaround
  bot.on('message', () => {
    response.status(200).end()
  })

  try {
    await bot.handleUpdate(request.body, response);
  } catch (err) {
    console.error(err);
  }
});
