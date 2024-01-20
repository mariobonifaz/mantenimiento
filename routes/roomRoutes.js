const roomController =require('../controller/roomController.js')

const router = require('express').Router()

router.post('/addRoom', roomController.addRoom)

router.get('/allProducts/:id', roomController.getAllRooms)

router.delete('/:id', roomController.deletRoom)

module.exports = router