require('dotenv').config()

import mongoose from 'mongoose'


mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true}).then(() => {
  console.warn('Connected!')
})