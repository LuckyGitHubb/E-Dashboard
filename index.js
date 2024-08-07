const express = require('express');
const cors = require('cors')
const mongoose = require('mongoose');
const app = express();
require('./DB/config')
const users = require('./DB/user');

app.use(cors({
    origin: 'http://localhost:3000'
}));
app.use(express.json());

app.post(('/register'), async (req, res) => {
    let user = new users(req.body);
    let data = await user.save();
    data = data.toObject();
    delete data.password;
    res.send(data);
});

app.post('/login', async (req, res) => {
    console.log("Incoming login request:", req.body);
    if (req.body.email && req.body.password) {
        let data = await users.findOne(req.body).select('-password');
        if (data) {
            res.send(data);
        }
        else {
            res.send("user not found");
        }
    }
    else {
        res.send("user not found");
    }
});

app.listen(5000);

