const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TeamSchema = new Schema({
	association: { type: String, required: true },
	team: { type: String, required: true },
});

module.exports = mongoose.model("Teams", TeamSchema);
