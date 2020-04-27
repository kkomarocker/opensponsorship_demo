var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var AthletesSchema = new Schema({
	firstName: {type: String, lowercase: true, required: true},
	lastName: {type: String, lowercase: true, required: true},
});