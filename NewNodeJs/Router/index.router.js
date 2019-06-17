const express = require('express');
const router = express.Router();
const jwtHelper = require('../Config/jwtHelper');


const ctrlUser = require('../Controllers/Users.controller');

router.post('/register',ctrlUser.register);
router.post('/authenticate',ctrlUser.authenticate);
router.get('/userProfile',jwtHelper.checkjwtToken,ctrlUser.userProfile);

module.exports = router;