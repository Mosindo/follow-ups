const express = require("express");
const router = express.Router();
const customersModel = require("../models/customers.js");

router.get("/", async (req, res) => {
  try {
    const customers = await customersModel.find();
    res.json(customers);
  } catch (err) {
    res.json({
      message: err,
    });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const customer = await customersModel.findById(req.params.id);
    res.json(customer);
  } catch (err) {
    res.json({
      message: err,
    });
  }
});

router.post("/add", async (req, res, next) => {
  try {
    const customerName = await customersModel.findOne({
      name: req.body.name,
    });

    if (customerName) {
      res.status(400).json(`Le prénom ${req.body.name} existe déja`);
      return;
    }

    await customersModel.create({
      firstName: req.body.firstName,
      name: req.body.name,
      stage: req.body.stage,
    });
    res.json("ajout effectué !");
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .send(
        "Une erreur est survenue, nous mettons tout en oeuvre pour y remédier"
      );
  }
});

router.put("/update/:id", async (req, res, next) => {
  try {
    const customerUpdate=await customersModel.updateOne(
      {_id: req.params.id},{
      name:req.body.name,
      firstName:req.body.firstName,
      stage:req.body.stage
    });
    res.json(`mise à jour effectuer ${req.body.firstName}`)

  } catch (err) {
    console.log(err);
    res
      .status(500)
      .send(
        "Une erreur est survenue, nous mettons tout en oeuvre pour y remédier"
      );
  }
  next;
});

router.delete("/delete/:id", async (req, res, next) => {
    try {
      await customersModel.deleteOne({_id: req.params.id});
      res.json("supprimé !");
      
    } catch (err) {
      console.log(err);
      res
        .status(500)
        .send(
          "Une erreur est survenue, nous mettons tout en oeuvre pour y remédier"
        );
    }
    next;
  });

module.exports = router;
