const request = require('request');


const messengerPosts = {};

messengerPosts.setGreetings = (text) => {
  request({
    uri: "https://graph.facebook.com/v2.6/me/thread_settings?access_token=EAACH5pouINQBANbCRlN4XCgcSa1wEEcdvGcIgZCrFjbBdVq9gGpZAHkg8FPDjZBuyVMxxLycu2ZChXVLJClAi2e86kGfSbpmcVEO3uVp2VUTaZBZB8frZC1lAooy4ds43xCQyivyZAoy9tvu7WDBc9ksTOXvATTDeBZCexwv4RO3UbAZDZD",
    method: 'POST',
    json: {  
      "setting_type":"greeting",
      "greeting":{"text":text}
    }
  },(error, response, body) => {
    if (!error && response.statusCode == 200) {
      console.log(body);
    } 
    else {
      console.error("Unable to send message.");
      console.error(response);
      console.error(error);
    }
  });  
};

// setGreetings("Hi {{user_first_name}}, welcome to this bot.");


messengerPosts.getStarted = (payload) => {
  request({
    uri: "https://graph.facebook.com/v2.6/me/messenger_profile?access_token=EAACH5pouINQBANbCRlN4XCgcSa1wEEcdvGcIgZCrFjbBdVq9gGpZAHkg8FPDjZBuyVMxxLycu2ZChXVLJClAi2e86kGfSbpmcVEO3uVp2VUTaZBZB8frZC1lAooy4ds43xCQyivyZAoy9tvu7WDBc9ksTOXvATTDeBZCexwv4RO3UbAZDZD",
    method: 'POST',
    json: 
      { 
        "get_started":{
          "payload": payload
        }
      }}
    ,(error, response, body) => {
      if (!error && response.statusCode == 200) {
        console.log(body);
      } 
      else {
        console.error("Unable to send message.");
        console.error(response);
        console.error(error);
    }
  });  
};

messengerPosts.getStarted('start')