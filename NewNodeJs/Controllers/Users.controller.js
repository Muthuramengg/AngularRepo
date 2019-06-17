const mongoose = require('mongoose');
const passport = require('passport');
require('../Config/config');
const jwt = require('jsonwebtoken');
var { User } = require('../models/user.model');
const _ = require('lodash');

module.exports.register = (req,res,next) => {
    var department = new User();
    department.fullname = req.body.fullname;
    department.password = req.body.password;
    department.email = req.body.email;

    department.save((err,doc) =>{
        if(!err){
            res.send(doc);
        }else{
            if(err.code == 11000){
                res.status(422).send(['Dublicate Email Address Found']);
            }else{
                return next(err);
            }
        }
    });
}

module.exports.authenticate = (req, res, next) => {    
    let promise = User.findOne({email: req.body.email}).exec();

    promise.then(function(doc){
        if(doc){
            if(doc.verifyPassword(req.body.password)){
                
                    let tokens = jwt.sign({_id: doc._id},process.env.JWT_SECRET,{expiresIn: '2m'});                    
                    return res.status(200).send({token: tokens});
                
            }else{
                return res.status(501).send({message: "Invalid Credentials"});
            }
        }else{
            return res.status(501).send({message: "The Email is not registered"});
        }
    });

    promise.catch(function(err){
        return res.status(501).json({message: "Some Internal error"});
    })
}

module.exports.userProfile = (req, res, next) =>{
    User.findOne({_id: req._id}, (err, user) =>{
        if(!user){
            return res.status(404).send({status: false, message: "No Record Found"});
        }else{
            return res.status(200).send({status: true, user: _.pick(user,['fullname','email']) });
        }
    })
};