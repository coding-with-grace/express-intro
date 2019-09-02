const express = require('express')
const router = express.Router()
const owners = require('../data/owners')
const pets = require('../data/pets')

router.get('/', (req, res) => {
    res.send(owners)
})

router.get('/:id', (req, res) => {
    res.send(`${owners[req.params.id - 1]} is a great owner to ${pets[req.params.id - 1]}`)
})

module.exports = router
