const express = require('express')
const router = express.Router()
const Fav = require('../models/fav')

const middleware = require('../middleware')

router.post('/fav', middleware.verify, (req, res) => {
    const newFav = Fav({ email: req.user.email, favId: req.body.favId })
    console.debug(req.user.email," favourited ", req.body.favId)
    newFav.save(function (err) {
        if (err) return res.status(500).json(err)
    })
    res.status(200).json({ email: req.user.email, favId: req.body.favId, status: 'added to db' })
})

module.exports = router