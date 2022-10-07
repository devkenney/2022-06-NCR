const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
require('dotenv').config();
require('./config/database');
const port = process.env.PORT || 3001

const app = express();

app.use(logger('dev'));
app.use(express.json());

app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));

// ROUTES START HERE

app.use('/api/users', require('./routes/api/users'));

// Create Read Update Destroy routes go here (Index, Show, Create, Update, Delete) -- (New and Edit go on the front end (And kind of Index and Show))

// Index and Show on the express server grab the data from the database that's needed and send it to the front end to be rendered there.

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'))
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
});