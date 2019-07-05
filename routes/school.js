const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();
const Schools = require('../models/schools.js');
const Login = require('../models/login.js');
const bodyParser = require('body-parser');



router.use(bodyParser.urlencoded({ extended: false }))
router.use(bodyParser.json())

/* Route for /school - home page */
router.use(express.static('views'))
router.get('/', (req, res) => {
    Schools.find({}, (err, content) => {
        if (err) { console.log(err) }
        else {
            res.render('index.ejs', { content })
        }
    })
})

/* Route for /school/register */
router.use('/register', express.static('./views/school_register.html'))

router.post('/register', (req, res) => {
    var Address = req.body.Address;
    var Contact = req.body.Contact;
    var School_Name = req.body.School_Name;

    var school = new Schools({
        'Address': `${Address}`,
        'Contact': `${Contact}`,
        'School_Name': `${School_Name}`
    })
    school.save((err) => {
        if (err) { console.log(err) }
    })
    res.end('<h1>Thank you for registering with Us!</h1>')
    /*     Schools.findOne({'S_no':114}, (err,school)=>{
            if (err) {console.log(err)}
            else {
                school.set({'School_Name':'Updated Meridian School'})
                school.save((err)=>{
                    if (err){console.log(err)}
                })
            }
        }) */
})

/* Route for /school/login */

router.use('/login', express.static('./views/school_login.html'))

router.post('/login', (req, res) => {
    let loginemail = req.body.email;
    let loginpassword = req.body.password;
    console.log(loginemail, loginpassword);

    Login.findOne({ 'email': `${loginemail}` }, (err, userSchool) => {
        if (err) { console.log(err) }
        else {
            bcrypt.compare(loginpassword, userSchool.encrypted, function (err, pes) {
                if (err) { console.log(err) }
                else if (pes == true) {
                    res.send('you have entered the correct password')
                }
                else {
                    res.send('you entered a wrong password')
                }
            });
        }
    })
})


/* Route for Sign-Up */

router.use('/signup', express.static('views/school_signup.html'))

router.post('/signup', (req, res) => {
    let email = req.body.email;
    let name = req.body.fname;
    let address = req.body.address;
    let password = req.body.password;
    let confirmpassword = req.body.confirmpassword;
    let phone = req.body.phone;
    //console.log(email, password, confirmpassword, phone,name, address );
    const saltRounds = 10;
    
   if(confirmpassword==password){
    bcrypt.hash(password, saltRounds).then(function(hash) {
        var login = new Login({
            "name": name,
            "address": address,
            "email": email,
            "password": hash,
            "phone":phone,
        })
        
        login.save((err)=>{
            if (err) {console.log(err)}
    })
})

res.send('Signed Up!')
   }else{
       res.send('TODO passwords do not match')
   }

})

/* Route for /school/unsubscribe */
router.use('/unsubscribe', express.static('./views/school_unsubscribe.html'))

router.post('/unsubscribe', (req, res) => {

    var School_Name = req.body.School_Name;
    console.log(School_Name);

    Schools.findOne({ 'School_Name': `${School_Name}` }, (err, school) => {
        if (err) { console.log(err) }
        else {
            console.log(school)
            school.remove((err) => {
                if (err) { console.log(err) }
            })
            res.send(`Successfully removed the following data ${school}`)
        }
    })
})

module.exports = router;