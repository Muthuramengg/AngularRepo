const passport = require('passport');
const localstrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');

var User = require('../models/user.model');
passport.use(
    new localstrategy({usernameField: 'email'},
    (username,password,done) => {
        
        User.findOne({email: username },
            (err,user) => {
                if(err){
                    return done(errds);
                }else if(!user){
                    return done(null,false,{message: "Email is not registered"});
                }else if(!user.verifyPassword(password)){
                    return done(null,false,{message: 'Wrong Password'});
                }else{
                    return done(null,user);
                }
            });
    })
);

