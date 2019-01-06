const express = require("express");
var app = express();

app.get("/", function(req, res){
	res.json("Welcom to the world of NodeJs");
});





var listener = app.listen(3000, function(){
	console.log("Your Application is running on port " + listener.address().port);


})