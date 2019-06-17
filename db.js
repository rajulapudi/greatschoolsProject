const mongoose = require('mongoose');


// Connect MongoDB at default port 27017.
module.exports=mongoose.connect('mongodb://localhost:27017/schools', {
    useNewUrlParser: true,
    useCreateIndex: true,
}, (err) => {
    if (!err) {
        console.log('MongoDB Connection Succeeded.')
    } else {
        console.log('Error in DB connection: ' + err)
    }
});
