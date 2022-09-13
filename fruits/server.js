const express = require('express');
const app = express();
const fruits = require('./models/fruits');
const veggies = require('./models/veggies');

app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

app.use(express.urlencoded({extended:false}));

app.use((req, res, next) => {
  console.log('I run for all routes!');
  next();
});

app.get('/fruits', (req, res) => {
  res.render('fruits/Index', {
    fruits: fruits
  });
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
  fruits.push(req.body);
  res.redirect('/fruits')
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