import mongoose from 'mongoose'

const Schema = mongoose.Schema;

const apartmentSchema = new Schema({
  title: String,
  sqm: Number,
  price: Number,
  number: Number,
  number_bedrooms: Number,
  number_bathrooms: Number,
  coords: {lon: String, lat: String},
  created_at: Date,
  updated_at: Date
});

const Apartment = mongoose.model('Apartment', apartmentSchema)

export default Apartment