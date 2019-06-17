const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


var schema = new mongoose.Schema({
    fullname: { 
        type: String,
        required: 'Full Name Can\'t be Empty '
    },
    email: { 
        type: String,
        required: 'Email Can\'t be Empty ',
        unique: true
    },
    password: { 
        type: String,
        required: 'Passwore Can\'t be Empty ',
        minlength: [4,'Password must be atleast 4 character long']
    },
    saltSecret: String
});

//Custom validation for Email
schema.path('email').validate((val) => {
    emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    return emailRegex.test(val);
},'Invalid Email');


schema.pre('save',function(next){
    bcrypt.genSalt(10,(err, salt) =>{
        bcrypt.hash(this.password,salt,(err,hash) => {
            this.password = hash;
            this.saltSecret = salt;
            next();
        });
    });
});

schema.methods.verifyPassword = function(password){
    return bcrypt.compareSync(password,this.password);
}



var User = mongoose.model('Users',schema);

module.exports = { User }