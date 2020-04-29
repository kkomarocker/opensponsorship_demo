const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AthletesSchema = new Schema({
	firstName: { type: String, required: true },
	lastName: { type: String, required: true },
	dateOfBirth: { type: Date, default: Date.now() },
	gender: { type: String, required: true },
	location: { type: String, required: true },
	description: { type: String, max: 255 },
	association: { type: String, required: true },
	team: { type: String },
	drinksAlcohol: { type: String },
	married: { type: String },
});

module.exports = mongoose.model("Athlete", AthletesSchema);
