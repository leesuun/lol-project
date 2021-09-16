import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    userId: { type: String, unique: true },
    password: { type: String },
    nickname: { type: String, unique: true },
});

const User = mongoose.model("User", userSchema);

export default User;
