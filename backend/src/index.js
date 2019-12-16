import mongoose from 'mongoose'
import express from 'express'
import bodyParser from 'body-parser'

import apartmentRouter from './routes/apartments'

require('dotenv').config()

mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true}).then(() => {
  console.warn('Connected!')
})

const app = express();
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use('/apartments', apartmentRouter)

app.get('/', (req, res) => {
  return res.send('Hello there')
})

export {app}
