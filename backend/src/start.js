import mongoose from 'mongoose'
import { app } from './index'

mongoose
    .connect(
        process.env.MONGO_URI +
            '/' +
            process.env.MONGO_DB_NAME +
            '?retryWrites=true&w=majority',
        {
            useNewUrlParser: true,
        }
    )
    .then(() => {
        console.warn('Connected!')
    })

app.listen(8001, () => console.log('Server started on http://localhost:8001!'))
