const {sequelize, DataTypes, Model} = require('../db')
class Musician extends Model {

}

Musician.init({ //creating attributes for model using init method
    musName: DataTypes.STRING,
    instrument: DataTypes.STRING,
    nationality: DataTypes.STRING
}, {
    sequelize, //specifies what db our model is stored in
    timestamps: false
})

module.exports = {Musician}