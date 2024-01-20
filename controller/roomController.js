const db = require('../model')

//create main model
const Room = db.rooms

//main work

// 1.- create 
const addRoom = async (req, res) => {

    let info = {
        number: req.body.number,
        price: req.body.price,
        beds: req.body.beds,
        promotion: req.body.promotion
    }

    const rooms = await Room.create(info)
    res.status(200).send(rooms)
    console.log(rooms)
    
}

//2.- get all
const getAllRooms = async (req, res) => {

    let id = req.params.id
    let room = await Room.findOne({ where: { id: id }})
    res.status(200) .send(room)

}

//3.- delete
const deletRoom = async (req, res) => {

    let id = req.params.id
    await Room.destroy({ where :{ id:id}} )
    res.status(200).send('Room deleted')
}

module.exports = {
    addRoom,
    getAllRooms,
    deletRoom
}