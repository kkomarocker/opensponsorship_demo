const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const port = process.env.PORT || 8081;
const app = express();

app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api", require("./app/routes/index"));

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

app.listen(port, () => {
	console.log(`Server is running on ${port}`);
});
