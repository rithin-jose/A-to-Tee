import mongoose from 'mongoose';
import {ObjectId} from mongoose.Schema;

var Schema =mongoose.Schema

var productInCartSchema = new Schema({
    product:{
        type: ObjectId,
        ref: "Product"
    },
    name: String,
    count:Number,
    price:Number,
},{timestamps:true})

var orderSchema = new Schema({
    products: [productInCartSchema],
    transaction_id:{},
    amount:{
        type:Number
    },
    address: String,
    updated: Date,
    user:{
        type: ObjectId,
        ref: "User"
    }

},{timestamps:true})


module.exports = mongoose.model("Order",orderSchema)