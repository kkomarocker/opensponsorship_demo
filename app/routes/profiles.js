const router = require("express").Router();
const Athlete = require("../models/athletes");

router.get("/", (req, res) => {
	Athlete.find({}, (err, docs) => {
		if (err) res.json(err);
		else res.json(docs);
	});
});

router.get("/:id", (req, res) => {
	const { id } = req.params;
	Athlete.findById(id, (err, data) => {
		if (err) throw err;
		res.send(data);
	});
});

router.post("/create", (req, res) => {
	Athlete.create(req.body, (err, data) => {
		if (err) throw err;
		const id = data._id;

		res.send(`Successfully created profile ${id}`);
	});
});



module.exports = router;