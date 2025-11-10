import mongoose, { Schema } from "mongoose";

const product = Schema({
    name : {type : String, required : true},
    category : {type : String, required : true},
    price : {type : Number, required : true},
    rating : {type : Number},
    date : {type : Date, default : Date.now()}
})

const ProductModel = mongoose.models.product || mongoose.model('product', product)

export default ProductModel