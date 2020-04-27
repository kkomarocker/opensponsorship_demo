var express = require("express");
var morgan = require("morgan");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var app = express();
var port = process.env.PORT || 8081;

var Athlete = require("./app/models/athletes");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));

// To remove deprecation warnings..
mongoose.set("useNewUrlParser", true);
mongoose.set("useUnifiedTopology", true);

mongoose.connect("mongodb://localhost:27017/admin", err => {
	if (err) {
		console.log(`Not connected to db: ${err}`);
	} else {
		console.log("Successfully connected MongoDB");
	}
});

app.post("/createProfile", (req, res) => {
	var athlete = new Athlete();

	athlete.firstName = req.body.firstName;
	athlete.lastName = req.body.lastName;
	athlete.dateOfBirth = req.body.dateOfBirth;
	athlete.gender = req.body.gender;
	athlete.location = req.body.location;
	athlete.association = req.body.association;
	athlete.sports = req.body.sports;
	athlete.team = req.body.team;
	athlete.drinksAlcohol = req.body.drinksAlcohol;
	athlete.married = req.body.married;

	athlete.save();

	res.send("Successfully created profile");
});

app.listen(port, () => {
	console.log(`Server is running on ${port}`);
});
