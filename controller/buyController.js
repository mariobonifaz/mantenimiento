const db = require('../model')

//create main model
const Buy = db.buy

//main work

// 1.- create 
const addBuy = async (req, res) => {

    let info = {
        client: req.body.client,
        room: req.body.room,
        payment: req.body.payment,
    }

    const buys = await Buy.create(info)
    res.status(200).send(buys)
    console.log(buys)
    
}

//2.- get all
const getAllBuys = async (req, res) => {

    let id = req.params.id
    let buys = await Buy.findOne({ where: { id: id }})
    res.status(200) .send(buys)

}

//3.- delete
const deletBuy = async (req, res) => {

    let id = req.params.id
    await Buy.destroy({ where :{ id:id}} )
    res.status(200).send('Buy deleted')
}

module.exports = {
    addBuy,
    getAllBuys,
    deletBuy
}