'use strict';

const express = require('express');
const cors  = require('cors')
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001
app.use(cors());
app.get('/', (req, res, next) => {
  res.status(200).send('hello world');
});
app.listen(PORT, () => console.log('listening on port', PORT))
