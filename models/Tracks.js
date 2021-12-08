const {sequelize, DataTypes, model} = require('./db')
class Tracks extends Model {

}

Tracks.init({ //creating attributes for model using init method
    albumID: DataTypes.STRING,
    noTracks: DataTypes.STRING,
    genreID: DataTypes.INTEGER
}, {
    sequelize, //specifies what db our model is stored in
    timestamps: false
})

module.exports = {Tracks};