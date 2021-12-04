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

// schema
// const validationSchema = require('./utils/validationSchema');
// const { registerSchema, loginSchema } = require('./validator');

// // auth
// const generateToken = require('./utils/generateToken');
// const authToken = require('./middleware/auth')

// route

// // root route
// app.get('/', (req, res) => {
//     console.log(User)
//     res.status(200).json({
//         message: "API is working!"
//     })
// })

// // register user
// app.post('/register', async(req, res) => {
//     const usernameUsed = await User.findOne({ username: req.body.username});
//     if(usernameUsed) return res.status(409).json("Username already in use");
//     User.insertMany(req.body, (err, user) => {
//         err ? 
//         res.status(409).json(err.writeErrors) :
//         res.status(200).json({ message: "User Succesfully Created", data: user});
//     })
// })

// // login
// app.post('/login', validationSchema(loginSchema), async(req, res) => {
//     const { username, pass } = await req.body;
//     const user = await User.findOne({ username });
//     if(!user) return res.status(404).json({ message: "User doesn't exist" })
//     if(user.pass !== pass) return res.status(401).json({ message: `Wrong password for ${username}` });
//     const token = await generateToken(user);
//     return res.status(200).json({ message: "succesfully logged in", data: { username, pass, token }})
// })

// // protected route to get data of users
// app.get('/users', authToken, async(req, res) => {
//     console.log(req.user)
//     const users = await User.find();
//     res.status(200).json({ message: "success", data: users })
// })

// // delete user by username
// app.delete('/users/delete/:username', authToken, async(req, res) => {
//     const username = req.params.username;
//     const user = await User.findOne({ username });
//     if(!user) return res.status(404).json({ message: 'User not found' });
//     User.deleteOne({
//             username
//         }).then((deleted) => res.status(200).json({ result: deleted, message: 'User has been deleted'}));
// });
// app.put('/users/update/:username', authToken, async(req, res) => {
//     const username = req.params.username;
//     const user = await User.findOne({ username });
//     if(!user) return res.status(404).json({ message: 'User not found' });
//     User.updateOne({
//             username
//     }, req.body)
//     .then((updated) => {
//         res.status(200).json({ result: updated, message: `User data has been updated`})
//     })
//     .catch((err) => {
//         res.status(400).json(err)
//     })
// }); 

// port
const port = 3000;
app.listen(port, () => {
    console.log(`app run at port ${port}`)
})