import mongoose from "mongoose";
import ICar from "./ICar.interface";



const CarSchema = new mongoose.Schema({
    name:{type:String, required:true},
    age:{type:Number, required:true},
    category:{type:String, required:true},
    price:{type:Number, required:true},
    transmition:{type:String, required:true},
})

const CarModel = mongoose.model<ICar & mongoose.Document>("Cars", CarSchema)
export default CarModel