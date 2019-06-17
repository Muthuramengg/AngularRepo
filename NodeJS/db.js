const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/MongoDB',(err) => {
    if(!err)
        console.log('DB Connection Succeed');
    else
        console.log('Error in DB Connection'+ JSON.stringify(err,undefined,2));
    
});
module.exports = mongoose;
