import mongoose from 'mongoose'

jest.setTimeout(60000)

async function removeAllCollections() {
    const collections = Object.keys(mongoose.connection.collections)
    for (const collectionName of collections) {
        const collection = mongoose.connection.collections[collectionName]
        await collection.deleteMany()
    }
}

beforeAll(async done => {
    await mongoose.connect(
        process.env.MONGO_URI +
            '/' +
            process.env.MONGO_DB_NAME +
            '-test?retryWrites=true&w=majority',
        { useNewUrlParser: true }
    )
    done()
})

afterEach(async done => {
    await removeAllCollections()
    done()
})

afterAll(async done => {
    await mongoose.disconnect()
    done()
})
