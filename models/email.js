const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const emailSchema = new Schema ({
    firstName:{type: String, required: true},
    lastName:{type: String},
    company:{type: String},
    email:{type: String},
    subject:{type: String, required: true},
    body:{type: String, required: true}
});

const Email = mongoose.model("Email", emailSchema);

module.exports = Email;