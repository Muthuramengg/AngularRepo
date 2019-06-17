const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB_URI,(err) => {
    if(!err)
        console.log('DB Connection Succeed');
    else
        console.log('Error in DB Connection'+ JSON.stringify(err,undefined,2));
});