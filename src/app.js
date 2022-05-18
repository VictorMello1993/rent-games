const express = require('express');
const app = express();
const cors = require('cors');
const router = require('./routes');
// const error = require('./middlewares/error');

app.use(express.json());
app.use(router);
app.use(cors());

app.get('/', (req, res) => {
  return res.json({messsage: 'Serviço executado com sucesso'})
})

module.exports = app