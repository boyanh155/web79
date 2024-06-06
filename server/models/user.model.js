import mongoose from "mongoose";


const User = mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    password: {
        type: String,
        require: true
    },
    active: {
        type: Boolean,
        default: true
    }
}, {
    timestamps: true
})


const UserModel = mongoose.model("User", User)



export default UserModel