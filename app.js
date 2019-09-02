const express = require('express')
const app = express()
// const pets = require('./pets')

// make all of our files in public directory accessible
app.use(express.static(__dirname + "/public"));

app.use('/pets', require('./routes/pets'))
app.use('/owners', require('./routes/owners'))

app.get('/', (req, res) => {
    res.redirect('/pets')
})

// app.get('/', (req, res) => {
//     res.send(pets)
// })

// // app.get('/:id', (req, res) => {
// //     res.send(items[req.params.id])
// // })

// /*
//     colon + word means varaible. Whatever comes
//     after the colon will be the request parameter's "id"
// */
// app.get('/:id', (req, res) => {
//     res.send(`I love ${req.params.id}!`)
// })
    
const PORT = 1337
/*
    when listening on our app, it's
    a good idea to have callback method to
    show we're actually listening on a port
*/
app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})
