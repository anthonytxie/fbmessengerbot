const express = require('express');
const routes = require('./routes');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const request = require('request');
const { receivedMessage, receivedPostback} = require('./receive-functions')
const { sendGenericMessage, sendTextMessage, callSendAPI } = require('./send-functions')


const app = express();


//Middleware
app.use(bodyParser.json())
app.use(routes)


//validate webhook

app.get('/webhook', function(req, res) {
  if (req.query['hub.mode'] === 'subscribe' &&
      req.query['hub.verify_token'] === 'catfish') {
    console.log("Validating webhook");
    res.status(200).send(req.query['hub.challenge']);
  } else {
    console.error("Failed validation. Make sure the validation tokens match.");
    res.sendStatus(403);          
  }  
});


//messenger API posts to webhook 

app.post('/webhook', function (req, res) {
  var data = req.body;

  // Make sure this is a page subscription
  if (data.object === 'page') {

    // Iterate over each entry - there may be multiple if batched
    data.entry.forEach(function(entry) {
      var pageID = entry.id;
      var timeOfEvent = entry.time;

      // Iterate over messaging array which contains objects... each object represents one interaction event
      entry.messaging.forEach(function(event) {
        // here we check to see what kind of attribute exists on event to see what kind of event it is 
        if (event.message) {
          receivedMessage(event);
        } 
        //postback events have a payload in event.postback
        else if (event.postback) {
          receivedPostback(event);     
        }

        else {
          console.log("Webhook received unknown event: ", event);
        }
      });
    });

    // Assume all went well.
    //
    // You must send back a 200, within 20 seconds, to let us know
    // you've successfully received the callback. Otherwise, the request
    // will time out and we will keep trying to resend.
    res.sendStatus(200);
  }
});
  
console.log(sendTextMessage)





module.exports = app