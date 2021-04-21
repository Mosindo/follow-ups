const express = require('express');
const mongoose = require('mongoose');
const cors = require("cors");
const bodyParser = require("body-parser");
const customersRoute = require("./controllers/customers.js");

const app = express();

const port = 8000;

mongoose.connect(
    "mongodb://localhost:27017/customers",
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => {
      console.log("BD connectée");
    }
  );
  
app.use(cors());
app.use(express.urlencoded({
    extended: true
}))
app.use(bodyParser.json());
app.use("/customers", customersRoute);
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(cors());

app.listen(port, () => {
  console.log('Server started on port: ' + port);
});