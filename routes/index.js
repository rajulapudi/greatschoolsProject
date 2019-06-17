const express = require('express');
const router = express.Router();

router.get('/', (req,res)=>{
res.send('<h1>hello I am Home Page</h1>')
})

router.use('/school', require('./school.js'))

module.exports = router;