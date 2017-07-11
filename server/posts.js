//create get started button



curl -X POST -H "Content-Type: application/json" -d '{
  "setting_type":"greeting",
  "greeting":{
    "text":"Hi {{user_first_name}}, welcome to this bot."
  }
}' "https://graph.facebook.com/v2.6/me/thread_settings?access_token=EAACH5pouINQBAJ3mAtwvT54KZBuGsTHMG6DTyA4feCejTNixTiN2Ow07rQXsHTChMWBQs8j9LYqaVgZApGQL53utF5849BA1uM6ucav8huPodU99fBxz1bQ3U2pZAD5ZCxImPprEP9pgByR3MV5dSG6e8KoV0ZB52SAJ2r9BrzgZDZD"    

//delete get started button
curl -X DELETE -H "Content-Type: application/json" -d '{
  "setting_type":"greeting"
}' "https://graph.facebook.com/v2.6/me/thread_settings?access_token=EAACH5pouINQBAJ3mAtwvT54KZBuGsTHMG6DTyA4feCejTNixTiN2Ow07rQXsHTChMWBQs8j9LYqaVgZApGQL53utF5849BA1uM6ucav8huPodU99fBxz1bQ3U2pZAD5ZCxImPprEP9pgByR3MV5dSG6e8KoV0ZB52SAJ2r9BrzgZDZD"   
    


//persistent menu
curl -X POST -H "Content-Type: application/json" -d '{
  "persistent_menu":[
    {
      "locale":"default",
      "composer_input_disabled":true,
      "call_to_actions":[
        {
          "title":"My Account",
          "type":"nested",
          "call_to_actions":[
            {
              "title":"Pay Bill",
              "type":"postback",
              "payload":"PAYBILL_PAYLOAD"
            },
            {
              "title":"History",
              "type":"postback",
              "payload":"HISTORY_PAYLOAD"
            },
            {
              "title":"Contact Info",
              "type":"postback",
              "payload":"CONTACT_INFO_PAYLOAD"
            }
          ]
        },
        {
          "type":"web_url",
          "title":"Latest News",
          "url":"http://petershats.parseapp.com/hat-news",
          "webview_height_ratio":"full"
        }
      ]
    },
    {
      "locale":"zh_CN",
      "composer_input_disabled":false
    }
  ]
}' "https://graph.facebook.com/v2.6/me/messenger_profile?access_token=YOUR_ACCESS_TOKEN_HERE"


// can use this to send back payloads that are direct intents for API.AI
    