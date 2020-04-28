const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AssociationSchema = new Schema({
	association: { type: String, required: true }
});

module.exports = mongoose.model("Associations", AssociationSchema);
