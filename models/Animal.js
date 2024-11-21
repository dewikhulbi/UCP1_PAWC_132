const mongoose = require('mongoose');

const animalSchema = new mongoose.Schema({
  name: String,
  species: String,
  age: Number,
  description: String,
});

const Animal = mongoose.model('Animal', animalSchema);

module.exports = Animal;
