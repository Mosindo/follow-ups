const mongoose= require("mongoose");


const customerSchema= new mongoose.Schema({
    name: String,
    firstName:String,
    stage: {
        type: String,
        required: true,
        enum: ["Prospect","1er contact", "1ere relance", "2éme relance","Signature"],
        default: "Prospect"
    }
});

const customerModel = mongoose.model("customers", customerSchema);
module.exports = customerModel;