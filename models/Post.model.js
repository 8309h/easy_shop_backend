const mongoose = require("mongoose");

const MenProductSchema = new mongoose.Schema({
    Title: { type: String, required: true },
    Category: String, 
    Image: { type: String, required: true },
    Description: { type: String, required: true },
    Price: { type: Number, required: true },
});

const WomenProductSchema = new mongoose.Schema({
  Title: { type: String, required: true },
  Catogory: String, 
  Image: { type: String, required: true },
  Description: { type: String, required: true },
  Price: { type: Number, required: true },
  
});

const MenProductModel = mongoose.model("MenProduct", MenProductSchema);
const WomenProductModel = mongoose.model("WomenProduct", WomenProductSchema);

module.exports = {
  MenProductModel,
  WomenProductModel,
};
