const express = require('express');
const app = express();
const fruits = require('./models/fruits')

app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

app.get('/fruits', (req, res) => {
  res.render('Index', {
    fruits: fruits
  })
});

app.get('/fruits/:indexOfArr', (req, res) => {
  res.render('Show', {
    fruit: fruits[req.params.indexOfArr]
  })
});

app.listen(3000, () => {
  console.log('listening on port 3000');
});