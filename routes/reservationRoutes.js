const reservationController =require('../controller/reservationController.js')

const routerRes = require('express').Router()

routerRes.post('/addReservation', reservationController.addReservation)

routerRes.get('/allReservations', reservationController.getAllReservation)

routerRes.delete('/:id', reservationController.deletReservation)

module.exports = routerRes