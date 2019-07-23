const express = require('express')
const router = express.Router()
const owners = require('../data/owners')

router.get('/', (req, res) => {
    res.send(owners)
})

router.get('/:id', (req, res) => {
    res.send(owners[req.params.id - 1] + ' has a pet.')
})

module.exports = router
