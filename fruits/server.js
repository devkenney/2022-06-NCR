// -------------------------
// Require Statements
// -------------------------

const express = require('express');
const app = express();
require('dotenv').config();
const mongoose = require('mongoose');
const Fruit = require('./models/Fruit');
const methodOverride = require('method-override');
const seedData = require('./models/seed');
const session = require('express-session');
const MongoStore = require('connect-mongo');

// -------------------------
// Mongoose Connection Stuff
// -------------------------

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
mongoose.connection.once('open', ()=> {
  console.log('connected to mongo');
});

// -------------------------
// Setting Up View Engine
// -------------------------

app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

// -------------------------
// Setting Up Body Parser
// -------------------------

app.use(express.urlencoded({extended:false}));

// -------------------------
// Method Override
// -------------------------

app.use(methodOverride('_method'));

// -------------------------
// Setting up Session
// -------------------------

app.use(
  session({
    secret: process.env.SECRET,
    store: MongoStore.create({ mongoUrl: process.env.MONGO_URI}),
    saveUninitialized: true,
    resave: false
  })
)

// -------------------------
// Fruit Routes
// -------------------------

const fruitController = require('./controllers/fruits');
app.use('/fruits', fruitController);


// -------------------------
// Veggies Routes
// -------------------------

const veggieController = require('./controllers/veggies');
app.use('/veggies', veggieController);

// -------------------------
// Users Routes
// -------------------------

const userController = require('./controllers/users');
app.use('/users', userController);

// -------------------------
// App Is Listening Thing
// -------------------------

app.listen(3000, () => {
  console.log('listening on port 3000');
});