var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var AthletesSchema = new Schema({
	firstName: { type: String, required: true },
	lastName: { type: String, required: true },
	dateOfBirth: { type: Date, default: Date.now() },
	gender: { type: String, required: true },
	location: { type: String, required: true },
	description: { type: String, max: 255, required: true },
	association: { type: String, required: true },
	sports: { type: Array },
	team: { type: String },
	drinksAlcohol: { type: String },
	married: { type: String },
});

module.exports = mongoose.model("Athlete", AthletesSchema);
