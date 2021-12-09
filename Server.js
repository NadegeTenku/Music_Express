const express = require('express')
const path = require('path') //node native module

const { Producer } = require('./models/Producer')
const { Musician } = require('./models/Musician')
const { Genre } = require('./models/Genre')
const { Album } = require('./models/Album')

const app = express()
const port = 3000
app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')))

app.get('/producers/:studio', async (req,res) => {
    const thisProducer = await Producer.findOne({where: {studio: req.params.studio}})
    res.json(thisProducer)
})

app.get('/musicians', async (req,res) => {
    const allMusicians = await Musician.findAll()
    res.json(allMusicians)
})

//create new musician
app.post('/musicians', async (req,res) =>{
    let newMusician = await Musician.create(req.body)
    res.send(newMusician ? "Musician Created" : "Creation Failed")
})

//update one musician by id
app.put('/musicians/:id', async (req,res) => {
    let updatedMusician = await Musician.update(req.body, {
        where : {id:req.params.id}
    })
    res.send(updatedMusician ? "Musician Updated" : "Update Failed")
})

//delete one musician by id
app.delete('/musicians/:id', async (req,res) => {
    await Musician.destroy({
        where: {id: req.params.id}
    })
    //use boolean return value from destroy method return to generate a string message
    res.send("Deleted Musician")
})

app.get('/genres/:id', async (req,res) => {
    const thisGenre = await Genre.findByPk(req.params.id)
    res.json(thisGenre)
})

//create new genre
app.post('/genres', async (req,res) =>{
    let newGenre = await Genre.create(req.body)
    res.send(newGenre ? "Genre Created" : "Creation Failed")
})

//update one genre by id
app.put('/genres/:id', async (req,res) => {
    let updatedGenre = await Genre.update(req.body, {
        where : {id:req.params.id}
    })
    res.send(updatedGenre ? "Genre Updated" : "Update Failed")
})

//delete one genre by id
app.delete('/genres/:id', async (req,res) => {
    await Genre.destroy({
        where: {id: req.params.id}
    })
    //use boolean return value from destroy method return to generate a string message
    res.send("Deleted Genre")
})

// return one genre by name
app.get('/genres-type/:type', async(req,res)=>{
    //find one specific instance of the Genre model by name
    const thisGenre = await Genre.findOne({where:{type: req.params.type}})
    res.json(thisGenre)
})

app.get('/albums', async (req,res) => {
    const allAlbums = await Album.findAll()
    res.json(allAlbums)
})

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`)
})
