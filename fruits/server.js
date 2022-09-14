const express = require('express');
const app = express();
const fruits = require('./models/fruits');
const veggies = require('./models/veggies');
require('dotenv').config();
const mongoose = require('mongoose')
const Fruit = require('./models/Fruit');

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
mongoose.connection.once('open', ()=> {
  console.log('connected to mongo');
});

app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

app.use(express.urlencoded({extended:false}));

app.use((req, res, next) => {
  console.log('I run for all routes!');
  next();
});

app.get('/fruits', (req, res) => {
  Fruit.find({}, (error, allFruits) => {
    res.render('fruits/Index', {
      fruits: allFruits
    });
  })
});

app.get('/fruits/new', (req, res) => {
  res.render('fruits/New');
});

app.post('/fruits', (req, res) => {
  if (req.body.readyToEat === 'on') {
    req.body.readyToEat = true;
  } else {
    req.body.readyToEat = false;
  }
  Fruit.create(req.body, (error, createdFruit) => {
    res.redirect('/fruits')
  })
});

app.get('/fruits/:indexOfArr', (req, res) => {
  res.render('fruits/Show', {
    fruit: fruits[req.params.indexOfArr]
  });
});

app.get('/veggies', (req, res) => {
  res.render('veggies/Index', {
    veggies: veggies
  });
});

app.get('/veggies/:indexOfArr', (req, res) => {
  res.render('veggies/Show', {
    veggie: veggies[req.params.indexOfArr]
  });
});

// /veggies/new would not render *here* because new would be caught by :indexOfArr

app.listen(3000, () => {
  console.log('listening on port 3000');
});