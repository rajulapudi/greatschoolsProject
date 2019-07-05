const express = require('express');
const mongoose = require('./db.js')
const ejs = require('ejs');
const port = process.env.PORT || 3030;

/* Instantiating App*/
const app = express();

/* Routes - use the below folder for handling routes and router */
app.use(require('./routes'))

/* Middleware */
app.set('views', './views')
app.set('view engine', ejs);

app.listen(port, ()=>{console.log(`Listening on ${port}`)})