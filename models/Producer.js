const {sequelize, DataTypes, Model} = require('../db')
class Producer extends Model {

}

Producer.init({ //creating attributes for model using init method
    proName: DataTypes.STRING,
    studio: DataTypes.STRING,
    noArtists: DataTypes.INTEGER
}, {
    sequelize, //specifies what db our model is stored in
    timestamps: false
})

module.exports = {Producer};