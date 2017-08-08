'use strict';

const express = require('express');
const bodyParser = require('body-parser');

const restService = express();

restService.use(bodyParser.urlencoded({
    extended: true
}));

restService.use(bodyParser.json());

restService.post('/echo', function(req, res) {
    
	var end =  "Thank you so much for talking with me..Have happy day..";
	var speech =  "Seems like some problem. Speak again.";
	var params = req.body.result.parameters;
	var first_name = params.first_name; 
	var partner_name = params.partner_name; 
	
	var first_name_length = first_name.length;
	var partner_name_length = partner_name.length;
	
	
		
	if(  (first_name == "Livin" ||  first_name == "livin")  
      && (partner_name == "Pooja" || partner_name == "pooja")){
		
			speech = "Your name has " + first_name_length +" characters  and your partner has "+ partner_name_length + " . Guys you people are made of each other .";
	
	}else {
			speech = "Guys, cool.. I wish you all success for future...";
	}
	speech=speech.concat(end);
    return res.json({
        speech:speech,
        displayText: speech ,
        source: 'webhook-echo-sample'
    });
});

restService.post('/slack-test', function(req, res) {

    var slack_message = {
        "text": "Details of JIRA board for Browse and Commerce",
        "attachments": [{
            "title": "JIRA Board",
            "title_link": "http://www.google.com",
            "color": "#36a64f",

            "fields": [{
                "title": "Epic Count",
                "value": "50",
                "short": "false"
            }, {
                "title": "Story Count",
                "value": "40",
                "short": "false"
            }],

            "thumb_url": "https://stiltsoft.com/blog/wp-content/uploads/2016/01/5.jira_.png"
        }, {
            "title": "Story status count",
            "title_link": "http://www.google.com",
            "color": "#f49e42",

            "fields": [{
                "title": "Not started",
                "value": "50",
                "short": "false"
            }, {
                "title": "Development",
                "value": "40",
                "short": "false"
            }, {
                "title": "Development",
                "value": "40",
                "short": "false"
            }, {
                "title": "Development",
                "value": "40",
                "short": "false"
            }]
        }]
    }
    return res.json({
        speech: "speech",
        displayText: "speech",
        source: 'webhook-echo-sample',
        data: {
            "slack": slack_message
        }
    });
});




restService.listen((process.env.PORT || 8000), function() {
    console.log("Server up and listening");
});
