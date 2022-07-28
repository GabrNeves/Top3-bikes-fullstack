import mongoose from 'mongoose'

export type Product = {
  ID: number,
  Make: string,
  Model: string,
  Price: number,
  UserID: number,
  Date: Date,
}

const ProductSchema = new mongoose.Schema({
  ID: {
    type: Number,
    required: true
  },
  Make: {
    type: String,
    required: true
  },
  Model: {
    type: String,
    required: true
  },
  Price: {
    type: Number,
    required: true
  },
  UserID: {
    type: Number,
    required: true
  },
  Date: {
    type: Date,
    required: true
  },
})

const productModel = mongoose.model('Product', ProductSchema)

export default productModel