const express = require('express')
const router = express.Router()
const pets = require('../data/pets')
const owners = require('../data/owners')

router.get('/', (req, res) => {
    //res.send(pets)
    res.send(
        `
            <html>
            <head>
            <title>Owners and Pets</title>
            <link rel="stylesheet" href="/style.css" />
          </head>
                <body>
                    ${pets.map((pet, index) => `
                        <div class='all-pets'>
                            <p class='individual-pet'>${pet} has a lovely owner named ${owners[index]}.</p>
                        </div>
                    `).join('')}
                </body>
            </html>
        `
    )
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
