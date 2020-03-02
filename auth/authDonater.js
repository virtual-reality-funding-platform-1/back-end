module.exports = (req, res, next) => {

    console.log(req.decodedJwt);
    if (req.decodedJwt.isDonater == true) {
        req.isDonater = req.decodedJwt.isDonater;
        next();
    } else {
        res.status(403).json({
            message: "You don't have permission."
        });
    };
};