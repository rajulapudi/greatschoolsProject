const mongoose = require('mongoose');

var Schema = mongoose.Schema;

var loginSchema = new Schema({

"email": {
    type: String,
    required:[true, 'Email is required'],
    unique :[true, 'Email is already registered'],
    match : []
},
"password": {
    type: String
},
"phone": {
    type: String
},
"encrypted": {type: String}

});

module.exports = mongoose.model('Login', loginSchema, 'usercredentials')
