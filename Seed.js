const {sequelize} = require('./db')
//const {Producer, Musician, Genre, Album} = require('./models/seed')
const {Producer} = require('./models/Producer')
const {Musician} = require('./models/Musician')
const {Genre} = require('./models/Genre')
const {Album} = require('./models/Album')

const seedProducer = [
    {
        proName: 'Mr. Leo',
        studio: 'Lionn Production',
        noArtists: 10
    }, {
        proName: 'Don Jazzy',
        studio: 'Marvin Records',
        noArtists: 12
    }, {
        proName: 'Serge Beynaud',
        studio: 'Stone',
        noArtists: 8
    }
]

const seedMusician = [
    {
        musName: 'Kameni',
        instrument: 'Piano',
        nationality: 'Cameroonian'
    }, {
        musName: 'Rema',
        instrument: 'Guitar',
        nationality: 'Nigerian'
    }, {
        musName: 'Zota',
        instrument: 'Drum',
        nationality: 'Ivorian'
    }
]

const seedGenre = [
    {
        type: 'Pop',
        singles: 'true',
        genreID: 123
    }, {
        type: 'Afro beats',
        singles: 'true',
        genreID: 456
    }, {
        type: 'Coupe decale',
        singles: 'false',
        genreID: 789
    }
]

const seedAlbum = [
    {
        label: 'Sweet Mama',
        duration: 3.39,
        proYear: 2020
    }, {
        label: 'Dumebi',
        duration: 3.16,
        proYear: 2019
    }, {
        label: 'Lifuende',
        duration: 3.20,
        proYear: 2020
    }
]


const seed = async () => {
    try {
      await sequelize.sync({force: true}) //deletes/drops all classes that already exist in the db which are the same with what is newly created. This kind of refreshes/updates the db while avoiding the existence of the same class many times and allows for new classes to be implanted into the db from seed.js.
      await Producer.bulkCreate(seedProducer, {validate: true})
      await Musician.bulkCreate(seedMusician, {validate: true})
      await Genre.bulkCreate(seedGenre, {validate: true})
      await Album.bulkCreate(seedAlbum, {validate: true})

    //   const seed = async () => {
    //     try {
    //       await sequelize.sync({force: true})
    //       await Producer.create(seedProducer[0], {validate: true})
    //       await Musician.create(seedMusician[0], {validate: true})
    //       await Genre.create(seedGenre, {validate: true})
    //       await Album.create(seedAlbum, {validate: true})


      console.log('Seeding success!')
      sequelize.close()
    } catch (error) {
      console.log('OOPS! Seeding failed: ', error)
    }
  }

  seed()
    .then(() => {
      console.log('Seeding success!')
    })
    .catch(err => {
      console.error('Oh no! Something went wrong!')
      console.error(err)
    })