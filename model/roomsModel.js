module.exports = (sequelize, DataTypes) => {

    const Room = sequelize.define("Room", {
        number: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        price: {
            type: DataTypes.FLOAT,
            length:1,
            allowNull: false
        },
        beds: {
            type: DataTypes.INTEGER,
            allowNull:false
        },
        promotion: {
            type: DataTypes.STRING
        }
    })

    return Room

}