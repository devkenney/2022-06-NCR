const express = require('express');

const app = express()

const plantsArray = ['Hyacinth', 'Crabapple', 'Ficus', 'Rose']

app.get('/hello', (req, res) => {
  res.json({
    message: 'Hello World!'
  });
});

app.get('/goodbye', (req, res) => {
  res.json({
    message: 'Goodbye friend!'
  });
});

app.get('/plants/:indexOfPlant/:name', (req, res) => {
  res.json({
    plant: `Hello ${req.params.name}! Your plant is: ${plantsArray[req.params.indexOfPlant]}`
  });
});

app.get('/howdy/:firstName', (req, res) => {
  console.log(req.query);
  res.json({
    message: `Howdy, ${req.params.firstName} ${req.query.lastName}`
  });
});

// app.get('/:color', (req, res) => {
//   res.json({
//     color: req.params.color
//   });
// });

app.listen(3000, () => {
  console.log('Listening on port 3000!')
});