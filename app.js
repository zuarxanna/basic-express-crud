// express
const express = require('express');
const app = express();


// ejs
app.set('view-engine', 'ejs');

// url encode body
app.use(express.urlencoded({ extended: false }));

// json parse
app.use(express.json());

// db
require('./connection/db')
// const User = require('./models/user')

// dotenv
require('dotenv').config()

// router
const routers = require('./routers');
app.use(routers)

// port
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`app run at port ${port}`)
})