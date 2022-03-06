const express = require('express');
const app = express();
require('dotenv').config();
const mail_route = require('./routes/routes');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', mail_route);

app.listen(3000);