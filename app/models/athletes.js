var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var AthletesSchema = new Schema({
	firstName: { type: String, lowercase: true, required: true },
	lastName: { type: String, lowercase: true, required: true },
	dateOfBirth: { type: Date, default: Date.now() },
	gender: { type: String, lowercase: true, required: true },
	location: { type: String, lowercase: true, required: true },
	association: { type: String, required: true },
	sports: { type: Array },
	team: { type: String },
	drinksAlcohol: { type: String },
	married: { type: String },
});

module.exports = mongoose.model("Athlete", AthletesSchema);
