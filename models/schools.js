const mongoose = require('mongoose');

var Schema = mongoose.Schema;

var schoolSchema = new Schema({

"Address": {type:String},
"Contact": {type:String},
"School_Name": {type:String}

});

module.exports = mongoose.model('Schools', schoolSchema, 'hydschools')
