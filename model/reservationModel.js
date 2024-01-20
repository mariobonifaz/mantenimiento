module.exports = (sequelize, DataTypes) => {

    const Reservation = sequelize.define("Reservation", {
        room: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        client: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        payment: {
            type: DataTypes.STRING
        }
    })

    return Reservation

}