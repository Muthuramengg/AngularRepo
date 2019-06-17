const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');


const { mongoose } = require('./db.js');
var employeecontroller = require('./Controls/employeeControllers.js');

var app = express();
app.use(bodyParser.json());
app.use(cors({origin: '*'}));

app.listen(8080,() => console.log('Server Started at Port 8080'));
app.use('/Employee',employeecontroller);