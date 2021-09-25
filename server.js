const express = require('express');
const dotenv = require('dotenv');
const { printsRouter } = require('./routes/prints.js');

const app = express();
const port = process.env.PORT || 5000;

dotenv.config();

app.use('/prints', printsRouter);

if (process.env.NODE_ENV !== 'test') {
  app.listen(port, () => console.log(`Listening on port ${port}`));
}

module.exports = app;
