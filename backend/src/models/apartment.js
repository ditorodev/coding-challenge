import mongoose from 'mongoose'
const Schema = mongoose.Schema;

const apartmentSchema = new Schema({
  title: String,
  sqm: Number,
  number: Number,
  number_bedrooms: Number,
  number_bathrooms: Number
  });

const Apartment = mongoose.Model('Apartment', apartmentSchema)

export default Apartment