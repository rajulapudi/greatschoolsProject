const express = require('express');
const router = express.Router();
const Schools = require('../models/schools.js');
const bodyParser = require('body-parser');


// parse application/x-www-form-urlencoded
router.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
router.use(bodyParser.json())

/* Route for /school */
router.use(express.static('views'))
router.get('/',(req,res)=>{
    Schools.find({},(err, content)=>{
        if(err){console.log(err)}
        else{res.render('index.ejs', {content})
        }
    })
})

/* Route for /school/register */
router.use('/register', express.static('./views/school_register.html'))

router.post('/register', (req,res)=>{
    var Address = req.body.Address;
    var Contact = req.body.Contact;
    var School_Name = req.body.School_Name;

    var school = new Schools({
        'Address':`${Address}`,
        'Contact':`${Contact}`,
        'School_Name': `${School_Name}`})
    school.save((err)=>{
        if (err) {console.log(err)}
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

/* Route for /school/unsubscribe */
router.use('/unsubscribe', express.static('./views/school_unsubscribe.html'))

router.post('/unsubscribe', (req,res)=>{

    var School_Name = req.body.School_Name;
    console.log(School_Name);

    Schools.findOne({'School_Name':`${School_Name}`}, (err,school)=>{
        if (err) {console.log(err)}
        else {
            console.log(school)
            school.remove((err)=>{
                if (err){console.log(err)}
            })
            res.send(`Successfully removed the following data ${school}`)
        }
    })})

module.exports = router;