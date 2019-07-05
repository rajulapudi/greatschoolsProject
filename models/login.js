const mongoose = require('mongoose');

var Schema = mongoose.Schema;

var loginSchema = new Schema({
'name':{
    type:String
},
'address':{
    type:String
},
"email": {
    type: String,
    required:[true, 'Email is required'],
    unique :[true, 'Email is already registered'],
    match : [/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,5}$/, 'email is faltu']
},
"password": {
    type: String
},
"phone": {
    type: String
}
});

module.exports = mongoose.model('Login', loginSchema, 'usercredentials')
