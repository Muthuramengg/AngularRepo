require('./Config/config');
require('./models/db.js');
require('./Config/passportConfig');

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const regIndex = require('./Router/index.router');
const passport = require('passport');

var app = express();
app.use(bodyParser.json());
app.use(cors({}));
app.use(passport.initialize());
app.use('/api',regIndex);

app.use((err,req,res,next) => {
    if(err.name === 'ValidationError'){
        var valerr = [];
        Object.keys(err.errors).forEach(key => valerr.push(err.errors[key].message));
        res.status(422).send(valerr);
    }
});

app.listen(process.env.PORT,() => console.log(`Server Started at Port:${process.env.PORT}`));
