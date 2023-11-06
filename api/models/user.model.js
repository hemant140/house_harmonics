import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Please provide your name"],
        unique: true,
    },
    email: {
        type: String,
        required: [true, "Please provide your email"],
        unique: true,
    },
    password: {
        type: String,
        required: [true, "Please provide your password"],
    },
    avatar: {
        type: String,
        default:"https://images.unsplash.com/photo-1511367461989-f85a21fda167?q=80&w=1031&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
},
    { timestamps: true }
);
const User = mongoose.model('User',userSchema);

export default User;