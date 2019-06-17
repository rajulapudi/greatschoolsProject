const mongoose = require('mongoose');

var Schema = mongoose.Schema;

var schoolSchema = new Schema({

"Address": String,
"Contact": String,
"School_Name": String

});

module.exports = mongoose.model('Schools', schoolSchema, 'hydschools')
