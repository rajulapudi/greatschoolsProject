const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();
const Schools = require('../models/schools.js');
const Login = require('../models/login.js');
const bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
router.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
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

router.use('/signup', express.static('./views/school_signup.html'))

router.post('/signup', (req, res) => {
    let email = req.body.email;
    let password = req.body.password;
    console.log(email, password);
    const saltRounds = 10;

    /* encrypting the password -- USING ASYNC FUNCTION CALL BACKS*/
    /*     bcrypt.hash(password, saltRounds, function(err, hash) {
            if (!err){
                var login = new Login({
                "email": email,
                "password": password,
                "encrypted": hash
            })
            console.log(hash)
                login.save((err)=>{
                    if (err) {console.log(err)}
                })
        }}); */

    /* encrypting the password -- USING SYNC FUNCTIONS */

    /* var hash = bcrypt.hashSync(password, saltRounds);

    var login = new Login({
        "email": email,
        "password": password,
        "encrypted": hash
    })
    login.save((err)=>{
        if (err) {console.log(err)}
    }) */

    /*   ------- USING PROMISES -----------*/
    /*     bcrypt.hash(password, saltRounds).then(function(hash) {
            var login = new Login({
                "email": email,
                "password": password,
                "encrypted": hash
            })
            login.save((err)=>{
                if (err) {console.log(err)}
        })
    }) */


    res.send('Signed Up!')

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