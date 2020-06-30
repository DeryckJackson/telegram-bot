// npm request and cron import
const request = require('request');
const CronJob = require('cron').CronJob;

// Bot API and URL
const botApi = '';
const telegramApiUrl = 'https://api.telegram.org/bot';

//Chat Ids for messages
const chatIdAlainaDeryck = '-208802000'
const chatIdDeryck = '671692309'

//Function for sending messages through the Bot API
const sendMessage = (chatId, message) => {
  request.post(
    {
      url: `${telegramApiUrl}${botApi}/sendMessage?chat_id=${chatId}&text=${message}`
    },
    function (err, httpResponse, body) {
      console.log(err, body);
    }
  );
}

//Reminder message array for Alaina
const reminderMessages = [
  'Time for your lats, Alaina!',
  'Do your lats, Wolf Girl.',
  'Do your lats, Wolfe.'];

//Random reminder message function for alaina's lats
const randomReminderMessage = () => {
  return reminderMessages[Math.floor(Math.random() * (reminderMessages.length - 1))];
};

// POST function code for bot on Time schedule
// Monday-Friday message to Alaina
// console.log('Before job instantiation');
// const weekdayRemindersAlaina = new CronJob('00 00 08 * * 1-5', function() {
//   sendMessage(chatIdAlainaDeryck, randomReminderMessage());
// }, null, true, 'America/Los_Angeles', null, false);
//
// // Monday night reminder message to Alaina
// const mondayNightReminderAlaina = new CronJob('00 00 22 * * 1', function() {
//   sendMessage(chatIdAlainaDeryck, randomReminderMessage());
// }, null, true, 'America/Los_Angeles', null, false);
//
// // wednesday night reminder message to Alaina
// const wednesdayNightReminderAlaina = new CronJob('00 00 22 * * 3', function() {
//   sendMessage(chatIdAlainaDeryck, randomReminderMessage());
// }, null, true, 'America/Los_Angeles', null, false);
//
// // Friday night reminder message to Alaina
// const fridayNightReminderAlaina = new CronJob('00 00 22 * * 5', function() {
//   sendMessage(chatIdAlainaDeryck, randomReminderMessage());
// }, null, true, 'America/Los_Angeles', null, false);
//
// //Saturday morning reminder message to Alaina
// const saturdayMorningReminderAlaina = new CronJob('00 00 10 * * 6', function() {
//   sendMessage(chatIdAlainaDeryck, randomReminderMessage())
// }, null, true, 'America/Los_Angeles', null, false);
//
// //Nightly reminder for son to brush teeth
// const everyNightRemindersDeryck = new CronJob('00 00 18 * * 0-6', function() {
//   sendMessage(chatIdDeryck, 'Rowan brush teeth. Deryck Floss.');
// }, null, true, 'America/Los_Angeles', null, false);
//
// //Sunday Bath reminder for Rowan
// const sundayReminderBathRowan = new CronJob('00 00 17 * * 0', function() {
//   sendMessage(chatIdDeryck, 'Rowan\'s bathtime.')
// }, null, true, 'America/Los_Angeles', null, false);
//
// //Tuesday bathtime reminder for Rowan
// const tuesdayReminderBathRowan = new CronJob('00 00 17 * * 2', function() {
//   sendMessage(chatIdDeryck, 'Rowan\'s bathtime.')
// }, null, true, 'America/Los_Angeles', null, false);

//Thursday Bathtime reminder for Rowan
// const thursdayReminderBathRowan = new CronJob('00 00 17 * * 4', function() {
//   sendMessage(chatIdDeryck, 'Rowan\'s bathtime.')
// }, null, true, 'America/Los_Angeles', null, false);

//Nightly redbull amount question
const redbullQuestionDeryck = new CronJob('00 00 18 * * 0-6', function() {
  sendMessage(chatIdAlainaDeryck, 'How many Redbulls did you have today, Deryck?')
}, null, true, 'America/Los_Angeles', null, false);
