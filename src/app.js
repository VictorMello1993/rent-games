const express = require('express');
const app = express();
const cors = require('cors');
const router = require('./routes/index');
const error = require('./middlewares/error');

app.use(express.json());
app.use(cors());
app.use(router);
app.use(error)

module.exports = app