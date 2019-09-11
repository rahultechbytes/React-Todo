const express = require('express');
const app = express();
require('dotenv').config();
const PORT = 5000 || process.env.PORT
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('./routes/routes');
const db = require('./db/utils/connection');

db.connect();

app.use(bodyParser.urlencoded({ extended: false }));            //bodyParser
app.use(bodyParser.json());

app.use(cors());                    //cors

app.use('/todos', routes);

app.listen(PORT, () => {
  console.log(`server is running at PORT: ${PORT}`);
})