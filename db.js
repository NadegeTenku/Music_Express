const {Sequelize, DataTypes, Model} = require('sequelize')
//creating a database named 'sequelize'
//we will add models to this db in association
const sequelize = new Sequelize('database', 'username', 'password', {
    dialect: 'sqlite', //type of SQL
    storage: './music.sqlite',  //file location for db
    logging: false //false displays a summarized report. true shwos detailed db report in the console including different keys, ppties & activities
})

module.exports = {sequelize, DataTypes, Model};