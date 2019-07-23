const express = require('express')
const router = express.Router()
const pets = require('../data/pets')
const owners = require('../data/owners')

router.get('/', (req, res) => {
    res.send(pets)
})

router.get('/:id', (req, res) => {
    res.send(
        `<!DOCTYPE html>
            <html>
            <head>
            <title>Owners and Pets</title>
            <link rel="stylesheet" href="/style.css" />
          </head>
                <body>
                    <p class="love-for-pet">${owners[req.params.id - 1] + ' loves ' + pets[req.params.id - 1] + '.'}</p>
                </body>
            </html>
        `
    )
})

module.exports = router
