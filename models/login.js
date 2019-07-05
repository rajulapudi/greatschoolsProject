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
    type: String,
    required:[true, 'Password is required'],
    match:[/^(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{6,}$/, 'Password should be min 6 chars least 1 lower case, 1 upper case, 1 numeric, 1 non-word and no whitespace']

},
"phone": {
    type: String
}
});

module.exports = mongoose.model('Login', loginSchema, 'usercredentials')
