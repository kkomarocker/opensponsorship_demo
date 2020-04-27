const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");
const port = process.env.PORT || 8081;
const app = express();

app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "/public")));
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

app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname, "/public/app/views/index.html"));
}); // Send index.html for any other requests

app.listen(port, () => {
	console.log(`Server is running on ${port}`);
});
