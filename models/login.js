const mongoose = require('mongoose');

var Schema = mongoose.Schema;

var loginSchema = new Schema({

"email": {type: String},
"password": {type: String},
"encrypted": {type: String}

});

module.exports = mongoose.model('Login', loginSchema, 'usercredentials')
