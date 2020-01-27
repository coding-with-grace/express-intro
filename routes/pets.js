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
                    <div class='all-pets'>
                    ${pets.map((pet, index) => `
                    <p class='individual-pet'>${pet} has a lovely owner named ${owners[index]}</p>
                `).join('')}
                    </div>
                </body>
            </html>
        `
    )
})

// ^ note: above, we join at end of each element. Otherwise, there will be a comma after each pet / array element

router.get('/:id', (req, res) => {
    res.send(
        `<!DOCTYPE html>
            <html>
            <head>
            <title>Owners and Pets</title>
            <link rel="stylesheet" href="/style.css" />
          </head>
                <body>
                    <p class="love-for-pet">${owners[req.params.id - 1] + ' loves their pet ' + pets[req.params.id - 1] + '.'}</p>
                </body>
            </html>
        `
    )
})

module.exports = router
