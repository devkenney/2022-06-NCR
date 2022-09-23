const express = require('express');
const router = express.Router();
const Fruit = require('../models/Fruit');

// localhost:3000/fruits/new would come here because /fruits is first

router.use((req, res, next) => {
  if (req.session.loggedIn) {
    next();
  } else {
    res.redirect('/users/login');
  }
})

// -------------------------
// SEED ROUTES
// -------------------------

// CLEAR DATABASE ROUTE -- TESTING ROUTE (NOT RUN BY USERS)

router.get('/clear', (req, res) => {
  Fruit.deleteMany({}, (error, data) => {
    if (error) {
      console.error(error);
    } else {
      res.json({
        message: 'Cleared'
      });
    }
  });
});

// SEED DATABASE ROUTE -- TESTING ROUTE (NOT RUN BY USERS)

router.get('/seed', (req, res) => {
  Fruit.insertMany(seedData, (error, created) => {
    if (error) {
      console.error(error);
    } else {
      res.json({
        message: 'Seeded'
      });
    }
  });
});

// RESET DATABASE ROUTE -- TESTING ROUTE (NOT RUN BY USERS)

router.get('/reset', (req, res) => {
  Fruit.deleteMany({}, (error, data) => {
    if (error) {
      console.error(error);
    } else {
      Fruit.insertMany(seedData, (error, created) => {
        if (error) {
          console.error(error);
        } else {
          res.json({
            message: 'Database has been Reset'
          });
        }
      });
    }
  });
});

// -------------------------

// Index

router.get('/', (req, res) => {
  Fruit.find({ username: req.session.username }, (error, allFruits) => {
    res.render('fruits/Index', {
      fruits: allFruits
    });
  })
});

// New

router.get('/new', (req, res) => {
  res.render('fruits/New');
});

// Delete

router.delete('/:id', (req, res) => {
  Fruit.deleteOne({
    _id: req.params.id
  }, (error, data) => {
    console.log(data);
    res.redirect('');
  })
});

// Update

router.put('/:id', (req, res) => {
  if (req.body.readyToEat === 'on') {
    req.body.readyToEat = true
  } else {
    req.body.readyToEat = false
  }
  Fruit.updateOne({
    _id: req.params.id
  }, req.body, (error, data) => {
    if (error) {
      console.error(error);
      res.json({
        error: error
      });
    } else {
      res.redirect(`/fruits/${req.params.id}`);
    }
  });
});

// Create

router.post('', (req, res) => {
  if (req.body.readyToEat === 'on') {
    req.body.readyToEat = true;
  } else {
    req.body.readyToEat = false;
  }
  req.body.username = req.session.username;
  Fruit.create(req.body, (error, createdFruit) => {
    res.redirect('/fruits')
  })
});

// Edit

router.get('/:id/edit', (req, res) => {
  Fruit.findOne({
    _id: req.params.id
  }, (error, foundFruit) => {
    if (error) {
      console.error(error);
      res.json({
        error: error
      })
    } else {
      res.render('fruits/Edit', { fruit: foundFruit });
    }
  })
});

// Show

router.get('/:id', (req, res) => {
  Fruit.findOne({ _id: req.params.id }, (error, foundFruit) => {
    res.render('fruits/Show', {
      fruit: foundFruit
    });
  });
});

module.exports = router;