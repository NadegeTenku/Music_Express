const express = require('express')
const path = require('path') //node native module

const { Producer } = require('./models/Producer')
const { Musician } = require('./models/Musician')
const { Genre } = require('./models/Genre')
const { Album } = require('./models/Album')

const app = express()
const port = 3000

app.use(express.static(path.join(__dirname, 'public')))

app.get('/producers/:studio', async (req,res) => {
    const thisProducer = await Producer.findOne({where: {studio: req.params.studio}})
    res.json(thisProducer)
})

app.get('/musicians', async (req,res) => {
    const allMusicians = await Musician.findAll()
    res.json(allMusicians)
})

app.get('/genre/:id', async (req,res) => {
    const thisGenre = await Genre.findByPk(req.params.id)
    res.json(thisGenre)
})

app.get('/albums', async (req,res) => {
    const allAlbums = await Album.findAll()
    res.json(allAlbums)
})

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`)
})
