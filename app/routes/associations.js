const router = require("express").Router();
const Associations = require("../models/associations");

router.get("/getAssociation", (req, res) => {
	Associations.find({}, (err, docs) => {
		if (err) res.json(err);
		else res.json(docs);
	});
});

module.exports = router;