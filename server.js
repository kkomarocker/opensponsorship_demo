var express = require("express");
var morgan = require("morgan");
var mongoose = require("mongoose");
var app = express();
var port = process.env.PORT || 8081;

app.use(morgan("dev"));

mongoose.connect("mongodb://localhost:27017/admin", err => {
	if (err) {
		console.log(`Not connected to db: ${err}`);
	} else {
		console.log("Successfully connected db");
	}
});

app.listen(port, () => {
	console.log(`Server is running on ${port}`);
});
