const jwt = require('jsonwebtoken')
//const env = require('./path to env variables');
//const tokenSecret = 

exports.verify = (req, res, next) => {
    const token = req.headers.authorization
    if (!token) res.status(403).json({ error: "please provide a token" })
    else {
        jwt.verify(token.split(" ")[1], tokenSecret, (err, value) => {
            if (err) {
                res.status(500).json({ error: 'failed to authenticate token' })
                return
            }
            req.user = value.data
            next()
        })
    }
}