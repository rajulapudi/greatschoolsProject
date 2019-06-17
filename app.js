const express = require('express');
const mongoose = require('./db.js')
const port = process.env.PORT || 3030;

/* MiddleWare */
const app = express();


/* Routes - use the below folder for handling routes and router */
app.use(require('./routes'))



app.listen(port, ()=>{console.log(`Listening on ${port}`)})