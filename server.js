const express = require('express')
const dotenv = require ('dotenv').config();
const app = express();

const mongoose = require('mongoose');
const morgan = require('morgan');
mongoose.connect(process.env.mongo_uri, (err) => {
    if (err) throw err;
    console.log('Successfully connected to MongoDB');
    console.log(mongoose.connection.host);
    // console.log(mongoose.connection.port);
  });
// console.log('app', app);

app.use(express.json());// to parse json
app.use(morgan('dev'));

app.use('/api/user', require('./routes/userApi'));
app.use('/api/transaction', require('./routes/transactionApi'));
// Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running in ${PORT} mode on port ${PORT}`));
