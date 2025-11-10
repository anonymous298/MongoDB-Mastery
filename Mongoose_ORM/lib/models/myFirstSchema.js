import mongoose, { Schema } from "mongoose";

const mySchema = new Schema({
    name : {type : String, required : true},
    email : {type : String, required : true},
    age : {type : Number, required : true},
    skills : [String],
    date : {type : Date, default : Date.now()}
})

const MyCollection = mongoose.models.firstCollection ||  mongoose.model('firstCollection', mySchema)

export default MyCollection