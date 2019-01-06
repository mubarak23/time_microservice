const express = require("express");
var bodyParser = require('body-parser');
var app = express();

app.use(function(req, res, next){
	console.log("Project is running Sucessfully");
	next();

})

app.get("/", function(req, res){
	res.json("Welcom to the world of NodeJs");
});

app.route('/api/timestamp/:date?')
  .get(function (req, res){
    
    var date = null;
    // parse the date string
    if (req.params.date !== undefined) {

      // check if it is a unix timestamp...
      var unixTimestamp = parseInt(req.params.date*1);
      if (isNaN(unixTimestamp)) {
        
        // it's not a unix timestamp string
        date = new Date(req.params.date);
      } else {
        
        // it is a timestamp
        date = new Date(unixTimestamp);
      }
      
    } else {
      
      // the date string parameter is empty. 
      // create a new date based on current time 
      date = new Date(Date.now());
    }
    
    // Initialize the response object, if Date is invalid
    // this one will be returned

    var response = date == "Invalid Date" ? 
      { error: "Invalid Date" } :
      { "unix": date.getTime(),
        "utc": date.toUTCString()
      };
    
    res.json(response);
  });

/*app.route("/api/timestamp/:date?")
	.get(function(req, res){
			//var date = null;
			var date = req.params.date;
			//res.json(date);

		var dataobj;
		if(date === ''){
			date = new Date();

			if(isNAN(date) === true){
				dataobj = {
					"unix": "date.getTime()",
					"utc": "date.toUTCString()"
				};
				res.json(dataobj);
			}else{

				dataobj = {
					"unix": "null",
					"utc": "invalid date"
				};
				res.json(dataobj);
			}	
		}
		//res.json(dataobj);		
	})*/

/*app.get("/api/timestamp/:date_string", function(req, res){
		var date = req.params.date_string;
		*/
		//res.json(date);
		/*var dataobj;
		if(date === null){
			date = new Date();

			if(isNAN(date) === true){
				dataobj = {
					"unix": "date.getTime()",
					"utc": "date.toUTCString()"
				};
				res.json(dataobj);
			}else{

				dataobj = {
					"unix": "null",
					"utc": "invalid date"
				};
				res.json(dataobj);
			}	
		}*/
		//res.json(dataobj);	

//})





var listener = app.listen(3000, function(){
	console.log("Your Application is running on port " + listener.address().port);


})