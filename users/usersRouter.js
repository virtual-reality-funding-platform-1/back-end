const router = require('express').Router();
const userdb = require('./usersModel.js');


router.get("/:id", (req, res) => {
    userdb
        .getUserById(req.params.id)
        .then(data => {
            res.status(200).json(data);
        })
        .catch(err => {
            res.status(404).json({
                message: "No users with matching ID!"
            });
        });
});

module.exports = router;