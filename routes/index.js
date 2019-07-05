const express = require('express');
const router = express.Router();


router.get('/',(req,res)=>{
    res.render('homePage.ejs')
})

router.use('/school', require('./school.js'))

module.exports = router;