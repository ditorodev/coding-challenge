import mongoose from 'mongoose'

const Schema = mongoose.Schema

const apartmentSchema = new Schema({
    title: { type: String, required: true },
    sqm: { type: Number, required: true },
    price: { type: Number, required: true },
    number_bedrooms: Number,
    number_bathrooms: Number,
    coords: { lon: String, lat: String },
    created_at: Date,
    updated_at: Date,
})

const Apartment = mongoose.model('Apartment', apartmentSchema)

export default Apartment
