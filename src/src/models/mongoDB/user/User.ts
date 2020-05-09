import mongoose from "mongoose";
import IUser from "./IUser.interface";



const UserSchema = new mongoose.Schema({
    name:{type:String, required:true},
    lastName:{type:String, required:true},
    age:{type:String, required:true}
})

const UserModel = mongoose.model<IUser & mongoose.Document>("Users", UserSchema)
export default UserModel