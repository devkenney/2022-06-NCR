const mongoose = require('mongoose');
// requires mongoose into our file

const fruitSchema = new mongoose.Schema({
  // creates a new schema called fruitSchema
  name: { type: String, required: true },
  // name has a data type of String and is required
  color: { type: String, required: true },
  readyToEat: { type: Boolean }
  // readyToEat has a data type of Boolean and is not required
});

const Fruit = mongoose.model('Fruit', fruitSchema); // creates a model called 'Fruit' using the schema provided above. This is what actually will create new fruits

module.exports = Fruit; // exports the Fruit model