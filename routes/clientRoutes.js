const clientController =require('../controller/clienController.js')

const routerCli = require('express').Router()

routerCli.post('/addClient', clientController.addClient)

routerCli.get('/allClients', clientController.getAllClients)

routerCli.delete('/:id', clientController.deletClient)

module.exports = routerCli