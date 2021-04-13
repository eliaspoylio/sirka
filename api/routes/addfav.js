const express = require('express')
const router = express.Router()
const Fav = require('../models/fav')

const middleware = require('../middleware')

router.post('/fav', middleware.verify, (req, res) => {
    const newFav = Fav({ email: req.body.email, favId: req.body.favId })
    newFav.save(function (err) {
        if (err) res.status(500).json(error)
    })
    res.status(200).json({ email: req.body.email, favId: req.body.favId, status: 'added to db' })
})

module.exports = router