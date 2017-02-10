if (!process.env.token) {
    console.log('Error: Specify token in environment');
    process.exit(1);
}

var Botkit = require('botkit');
let fs = require('fs')

var controller = Botkit.slackbot({
    debug: false
});

var bot = controller.spawn({
    token: process.env.token
}).startRTM();


controller.hears(['(.*)してみた','(.*)しました'],['ambient,message_received'], function(bot, message) {

    let done = message.match[1];
    bot.reply(message, `君は${done}できるフレンズなんだね!!\nすっごーい!`)

});
