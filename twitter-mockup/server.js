require('dotenv').config();

const mongoose = require('mongoose');
const Tweet = require('./models/Tweet.js');

const mongoURI = process.env.MONGO_URI;
const db = mongoose.connection;

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })

db.on('error', (error) => console.log(error.message + ' is mongod not running?'));
db.on('open', () => console.log('mongo connected: ', mongoURI));
db.on('close', () => console.log('mongo disconnected!'));

const myFirstTweet = {
  title: "Deep Thoughts",
  body: "Friends, I am the realest coder alive",
  author: "Devin"
}

Tweet.create(myFirstTweet)
  .then((tweet) => {
    console.log(tweet);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    db.close();
  })