const {sequelize, DataTypes, model} = require('./db')
class Artists extends Model {

}

Artists.init({ //creating attributes for model using init method
    artistName: DataTypes.STRING,
    location: DataTypes.STRING,
    musician: DataTypes.BOOLEAN
}, {
    sequelize, //specifies what db our model is stored in
    timestamps: false
})

module.exports = {Artists};