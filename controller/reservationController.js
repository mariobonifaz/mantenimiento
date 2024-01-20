const db = require('../model')

//create main model
const Reservation = db.reservations

//main work

// 1.- create 
const addReservation = async (req, res) => {

    let info = {
        room: req.body.room,
        client: req.body.client,
        payment: req.body.payment
    }

    const reservation = await Reservation.create(info)
    res.status(200).send(reservation)
    console.log(reservation)
    
}

//2.- get all
const getAllReservation = async (req, res) => {

    let id = req.params.id
    let reservation = await Reservation.findOne({ where: { id: id }})
    res.status(200) .send(reservation)

}

//3.- delete
const deletReservation = async (req, res) => {

    let id = req.params.id
    await Reservation.destroy({ where :{ id:id}} )
    res.status(200).send('Reservation deleted')
}

module.exports = {
    addReservation,
    getAllReservation,
    deletReservation
}