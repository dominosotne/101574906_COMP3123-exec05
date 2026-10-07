const express = require('express');
const routerUser = express.Router();

const user = require('../user.json');

// GET user profile
routerUser.get('/profile', (req, res) => {
    res.json(user);
});

// POST login
routerUser.post('/login', (req, res) => {
    const { username, password } = req.body;

    if (username !== user.username) {
        return res.json({
            status: false,
            message: "User Name is invalid"
        });
    }

    if (password !== user.password) {
        return res.json({
            status: false,
            message: "Password is invalid"
        });
    }

    res.json({
        status: true,
        message: "User Is valid"
    });
});

// GET logout
routerUser.get('/logout/:username', (req, res) => {
    const username = req.params.username;

    res.send(`<b>${username} successfully logged out.</b>`);
});

module.exports = routerUser;