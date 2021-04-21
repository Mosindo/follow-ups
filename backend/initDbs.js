const mongoose = require("mongoose");
const customersModel = require("./models/customers.js");



mongoose.connect( "mongodb://localhost:27017/customers", {useNewUrlParser: true,useUnifiedTopology: true},
    () => {
        console.log("DB connected");
    }
);

async function createCustomers() {
    await customersModel.deleteMany({}).exec();
    await customersModel.create([{
            firstName: "Archer",
            name: "Sterling",
            stage:"Prospect"
        },
        {
            firstName: "Lana",
            name: "Kane",
            stage:"1ere relance"
        },
        {
            firstName: "Cyril",
            name: "Figgis",
            
        }
    ]);
    await console.log("customers")
}
createCustomers();