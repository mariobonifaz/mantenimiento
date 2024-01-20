module.exports = (sequelize, DataTypes) => {

    const Buy = sequelize.define("Buy", {
        client: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        room: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        payment: {
            type: DataTypes.INTEGER
        }
    })

    return Buy

}