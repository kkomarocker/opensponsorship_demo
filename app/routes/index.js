// Distinguishes to appropriate routes.

const router = require("express").Router();

module.exports = router;

router.use("/profiles", require("./profiles"));

router.use((req, res, next) => {
	const err = new Error("API route not found!");
	err.status = 404;
	next(err);
});