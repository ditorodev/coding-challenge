import express from 'express'
import bodyParser from 'body-parser'

import apartmentRouter from './routes/apartments'

require('dotenv').config()

const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*') // update to match the domain you will make the request from
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept'
    )
    next()
})

app.use('/apartments', apartmentRouter)

app.get('/', (req, res) => {
    return res.send('KASAZ-CODING-CHALLENGE')
})

export { app }
