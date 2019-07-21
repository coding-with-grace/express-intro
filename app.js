const express = require('express')
const app = express()
const items = require('./items')


app.get('/', (req, res) => {
    res.send(items)
})

// app.get('/:id', (req, res) => {
//     res.send(items[req.params.id])
// })

/*
    colon + word means varaible. Whatever comes
    after the colon will be the request parameter's "id"
*/
app.get('/:id', (req, res) => {
    res.send(`I love ${req.params.id}!`)
})
    
const PORT = 1337
/*
    when listening on our app, it's 
    a good idea to have callback method to
    show we're actually listening on a port
*/
app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})
