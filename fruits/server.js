const express = require('express');
const app = express();
const fruits = require('./models/fruits')

app.get('/fruits', (req, res) => {
  res.json({
    fruits: fruits
  });
});

app.get('/fruits/:indexOfArr', (req, res) => {
  res.json({
    fruit: fruits[req.params.indexOfArr]
  })
});

app.listen(3000, () => {
  console.log('listening on port 3000');
});