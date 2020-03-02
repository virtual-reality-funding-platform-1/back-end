const router = require('express').Router();
const bcrypt = require("bcryptjs");
const tokenService = require("./authToken.js");
const userdb = require('../users/usersModel.js');

router.post('/register', (req, res) => {
    let user = req.body;
    const hash = bcrypt.hashSync(user.password, 10);
    user.password = hash;

    userdb.addUser(user)
        .then(saved => {
            res.status(201).json(saved);
        })
        .catch(error => {
            res.status(500).json(error);
        });
});

router.post('/login', (req, res) => {
    let {
        username,
        password
    } = req.body;

    userdb.findBy({
            username
        })
        .first()
        .then(_user => {
            if (_user && bcrypt.compareSync(password, _user.password)) {
                const token = tokenService.generateToken(_user);

                res.status(200).json({
                    message: "You logged in!",
                    token,
                });
                next();
            } else {
                res.status(401).json({
                    messege: "You shall not pass!"
                });
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                messege: err
            });
        });
});

module.exports = router;