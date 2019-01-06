const express = require("express");
var app = express();

app.use(function(req, res, next){
	console.log("Project is running Sucessfully");
	next();

})

app.get("/", function(req, res){
	res.json("Welcom to the world of NodeJs");
});

app.get("/api/timestamp/:date_string", function(req, res){
		$data = req.params.date_string;
			

})





var listener = app.listen(3000, function(){
	console.log("Your Application is running on port " + listener.address().port);


})