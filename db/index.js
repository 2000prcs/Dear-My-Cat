const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/cat');

const db = mongoose.connection;

db.on('error', () => {
  console.log('connection error');
});

db.once('open', () => {
  console.log('Mongo db connected!');
});

