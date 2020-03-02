const configMiddleware = require('../Middleware/configMiddleware.js');
const express = require("express");
const server = express();
const authenticate = require('../auth/authMiddleware.js');

const authRouter = require('../auth/authRouter.js');
const projectRouter = require('../projects/projectsRouter.js');
const userRouter = require('../users/usersRouter.js');

configMiddleware(server);


server.use('/auth', authRouter);
server.use('/projects', authenticate, projectRouter);
server.use('/user', authenticate, userRouter);


server.get("/", (req, res) => {
    res.send("API");
});

module.exports = server;