


// set greetings
curl -X POST -H "Content-Type: application/json" -d '{
  "setting_type":"greeting",
  "greeting":{
    "text":"Hi {{user_first_name}}, welcome to this bot."
  }
}' "https://graph.facebook.com/v2.6/me/thread_settings?access_token=EAACH5pouINQBANbCRlN4XCgcSa1wEEcdvGcIgZCrFjbBdVq9gGpZAHkg8FPDjZBuyVMxxLycu2ZChXVLJClAi2e86kGfSbpmcVEO3uVp2VUTaZBZB8frZC1lAooy4ds43xCQyivyZAoy9tvu7WDBc9ksTOXvATTDeBZCexwv4RO3UbAZDZD"    



// get started button


curl -X POST -H "Content-Type: application/json" -d '{ 
  "get_started":{
    "payload":"GET_STARTED_PAYLOAD"
  }
}' "https://graph.facebook.com/v2.6/me/messenger_profile?access_token=EAACH5pouINQBANbCRlN4XCgcSa1wEEcdvGcIgZCrFjbBdVq9gGpZAHkg8FPDjZBuyVMxxLycu2ZChXVLJClAi2e86kGfSbpmcVEO3uVp2VUTaZBZB8frZC1lAooy4ds43xCQyivyZAoy9tvu7WDBc9ksTOXvATTDeBZCexwv4RO3UbAZDZD"  

// get payload on get started button

curl -X GET "https://graph.facebook.com/v2.6/me/messenger_profile?fields=get_started&access_token=PAGE_ACCESS_TOKEN=EAACH5pouINQBANbCRlN4XCgcSa1wEEcdvGcIgZCrFjbBdVq9gGpZAHkg8FPDjZBuyVMxxLycu2ZChXVLJClAi2e86kGfSbpmcVEO3uVp2VUTaZBZB8frZC1lAooy4ds43xCQyivyZAoy9tvu7WDBc9ksTOXvATTDeBZCexwv4RO3UbAZDZD"    

// post persistent menu

curl -X POST -H "Content-Type: application/json" -d '{
  "persistent_menu":[
    {
      "locale":"default",
      "composer_input_disabled":true,
      "call_to_actions":[
        {
          "title":"Menu",
          "type":"nested",
          "call_to_actions":[
            {
              "title":"Burger",
              "type":"postback",
              "payload":"menu-burger"
            },
            {
              "title":"Drinks",
              "type":"postback",
              "payload":"menu-drinks"
            },
            {
              "title":"Sides",
              "type":"postback",
              "payload":"menu-sides"
            }
          ]
        },
        {
          "type":"postback",
          "title":"Order",
          "payload":"order",
        },
        {
          "type":"postback",
          "title":"Help",
          "payload":"help",
        }
      ]
    },
    {
      "locale":"zh_CN",
      "composer_input_disabled":false
    }
  ]
}' "https://graph.facebook.com/v2.6/me/messenger_profile?access_token=EAACH5pouINQBANbCRlN4XCgcSa1wEEcdvGcIgZCrFjbBdVq9gGpZAHkg8FPDjZBuyVMxxLycu2ZChXVLJClAi2e86kGfSbpmcVEO3uVp2VUTaZBZB8frZC1lAooy4ds43xCQyivyZAoy9tvu7WDBc9ksTOXvATTDeBZCexwv4RO3UbAZDZD"
