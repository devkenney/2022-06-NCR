const mongoose = require('mongoose');

const veggieSchema = new mongoose.Schema({
  // In here goes your blueprint
});

const Veggie = mongoose.model('Veggie', veggieSchema);

module.exports = Veggie;