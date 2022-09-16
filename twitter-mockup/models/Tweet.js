const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const model = mongoose.model;

const tweetSchema = new Schema({
  title: { type: String },
  body: { type: String },
  author: { type: String },
  likes: { type: Number, default: 0 },
  sponsored: { type: Boolean, default: false }
}, {
  timestamps: true
});

const Tweet = model('Tweet', tweetSchema);

module.exports = Tweet;