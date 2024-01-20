const buyController =require('../controller/buyController.js')

const routerBuy = require('express').Router()

routerBuy.post('/addBuy', buyController.addBuy)

routerBuy.get('/allbuys', buyController.getAllBuys)

routerBuy.delete('/:id', buyController.deletBuy)

module.exports = routerBuy