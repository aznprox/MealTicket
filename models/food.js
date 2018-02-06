const mongoose = require("mongoose");
const url = require("mongoose-type-url");

// Save a reference to the Schema constructor
const Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object
// This is similar to a Sequelize model
const foodSchema = new Schema({

    foodCategory: {
      type: String,
      required: true
    },
    productName:{
      type:String,
    },
    foodDescription:{
      type: String,
    },
    
    price: {
      type: Number,
      required: true
    },
    delivery: {
      type: String
    },
    foodPhoto:{
      type: mongoose.SchemaTypes.Url

    },

  });


 const Food = mongoose.model("Food", foodSchema);

// Export the Article model
module.exports = Food;





// Well, As per the docs Monngoose doesn't have a schema type for URL. You could just use a string with RegExp to validate it or use some custome made type like this one

// var mongoose = require('mongoose');
// require('mongoose-type-url');

// var UserSchema = new mongoose.Schema({
// url: {
//     work: mongoose.SchemaTypes.Url,
//     profile: mongoose.SchemaTypes.Url
// }
// });
