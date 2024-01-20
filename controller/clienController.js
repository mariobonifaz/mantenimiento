const db = require('../model')

//create main model
const Client = db.clients

//main work

// 1.- create 
const addClient = async (req, res) => {

    let info = {
        room: req.body.room,
        payment: req.body.payment,
    }

    const clients = await Client.create(info)
    res.status(200).send(clients)
    console.log(clients)
    
}

//2.- get all
const getAllClients = async (req, res) => {

    let id = req.params.id
    let client = await Client.findOne({ where: { id: id }})
    res.status(200) .send(client)

}

//3.- delete
const deletClient = async (req, res) => {

    let id = req.params.id
    await Client.destroy({ where :{ id:id}} )
    res.status(200).send('Client deleted')
}

module.exports = {
    addClient,
    getAllClients,
    deletClient
}