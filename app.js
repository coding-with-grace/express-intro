const express = require('express')
const app = express()
const items = require('./items')

const PORT = 1337

app.get('/', (req, res) => {
    res.send(items)
})

// app.get('/:id', (req, res) => {
//     res.send(items[req.params.id])
// })

app.get('/:id', (req, res) => {
    res.send(`I love ${req.params.id}!`)
})

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})
