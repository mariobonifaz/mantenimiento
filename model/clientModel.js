module.exports = (sequelize, DataTypes) => {

    const Client = sequelize.define("Client", {
        room: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        payment: {
            type: DataTypes.STRING,
            allowNull: false
        }
    })

    return Client

}