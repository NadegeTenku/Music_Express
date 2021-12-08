const {sequelize, DataTypes, Model} = require('../db')
class Album extends Model {

}

Album.init({ //creating attributes for model using init method
    label: DataTypes.STRING,
    duration: DataTypes.FLOAT,
    proYear: DataTypes.INTEGER
}, {
    sequelize, //specifies what db our model is stored in
    timestamps: false
})

module.exports = {Album};