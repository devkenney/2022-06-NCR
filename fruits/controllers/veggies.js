const express = require('express');
const router = express.Router();
const Veggie = require('../models/Veggie');

// Index

// Add a Veggie.find to find all of the veggies and pass that to your res.render

router.get('', (req, res) => {
  // res.render('veggies/Index', {
  //   veggies: veggies
  // });
});

// New

// Same as for fruits

router.get('/new', (req, res) => {
  // in here goes your res.redirect to the new FORM
});

// Create

// Same as for fruits

router.post('', (req, res) => {
  // In here goes your ready to eat change AND your Veggie.create method
})

// Show

// Add a Veggie.findOne with the _id of the veggie you want to display. Reference the fruits one!

router.get('/:indexOfArr', (req, res) => {
  // res.render('veggies/Show', {
  //   veggie: veggies[req.params.indexOfArr]
  // });
});

module.exports = router;