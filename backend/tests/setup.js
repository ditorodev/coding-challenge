import mongoose from 'mongoose'
import Apartment from '../src/models/apartment'

beforeAll(async done => {
    mongoose
        .connect(
            process.env.MONGO_URI +
                '/' +
                process.env.MONGO_DB_NAME +
                '-test?retryWrites=true&w=majority',
            { useNewUrlParser: true }
        )
        .then(() => {
            console.warn('[MONGO] Connected!')
        })
    done()
})

afterAll(async done => {
    await Apartment.deleteMany()
})
