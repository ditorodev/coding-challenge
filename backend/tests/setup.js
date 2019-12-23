import mongoose from 'mongoose'

beforeEach(() => {
    mongoose
        .connect(
            process.env.MONGO_URI +
                '/' +
                process.env.MONGO_DB_NAME +
                '-test?retryWrites=true&w=majority',
            { useNewUrlParser: true }
        )
        .then(() => {
            mongoose.connection.dropDatabase()
        })
})
