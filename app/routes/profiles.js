const router = require("express").Router();
const Athlete = require("../models/athletes");

router.get("/", (req, res) => {
	res.send("testing profiles route");
});

router.post("/createProfile", (req, res) => {
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

	athlete.save(err => {
		if (err) res.send(err);
		res.send("Successfully created profile");
	});
});

module.exports = router;