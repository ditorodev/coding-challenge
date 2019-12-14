import mongoose from 'mongoose'
import express from 'express'
import bodyParser from 'body-parser'

require('dotenv').config()

mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true}).then(() => {
  console.warn('Connected!')
})

const app = express();
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.get('/', (req, res) => {
  return res.send('Hello there')
})

app.listen(8001, () =>
  console.log('Server started on http://localhost:8001!'))