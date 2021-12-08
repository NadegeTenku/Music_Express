const {sequelize, DataTypes, Model} = require('../db')
class Genre extends Model {

}

Genre.init({ //creating attributes for model using init method
    type: DataTypes.STRING,
    singles: DataTypes.BOOLEAN,
    genreID: DataTypes.INTEGER
    
}, {
    sequelize, //specifies the db where our model is stored
    timestamps: false
})

module.exports = {Genre};