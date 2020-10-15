const { func } = require("joi");

jwt = require("jsonwebtoken");

module.exports = function auth(req, res, next) {
    const token = req.header("auth-token");
    if (!token) return res.status(401).send("access denied");

    try {
        const verified = jwt.verify(token, "fjsfjoewijflsdr");
        req.user = verified;
        next();
    } catch (err) {
        res.status(400).send("invalid token");
    }
};
