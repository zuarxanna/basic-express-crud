// express
const express = require('express');
const app = express();

// db
require('./connection/db')
// const User = require('./models/user')

// json parse
app.use(express.json());

// router
const routers = require('./routers');
app.use(routers)

// port
const port = 3000;
app.listen(port, () => {
    console.log(`app run at port ${port}`)
})