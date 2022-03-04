const express = require('express');
const app = express();
require('dotenv').config();
const mail_route = require('./routes/routes');


app.use(express.urlencoded({extended: true}));

app.use('/', mail_route);

app.listen(3000);