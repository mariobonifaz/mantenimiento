const express = require('express')
const cors = require('cors')

const app = express()

var corOptions = {
    origin: 'https://localhost:8081'
}

//midelware
app.use(cors(corOptions))

app.use(express.json())

app.use(express.urlencoded({extended: true}))

//routers
const router = require('./routes/roomRoutes.js')
app.use('/api/products', router)

const routerCli = require('./routes/clientRoutes.js')
app.use('/api/clients', routerCli)

const routerBuy = require('./routes/buyRoutes.js')
app.use('/api/buys', routerBuy)

const routerRes = require('./routes/reservationRoutes.js')
app.use('/api/reservation', routerRes)

//testing
app.get('/', (req, res) => {
    res.json({ message: 'hotel HOTELITO Plus' })
})

//port
const PORT = process.env.PORT || 8080

//server
app.listen(PORT, () => {
    console.log(`server is running in port: ${PORT}`)
})