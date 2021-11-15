import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
    text: { type: String, require: true, trim: true },
    createAt: { type: Date, require: true, default: new Date() },
    nickname: { type: String, require: true, trim: true },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        ref: "User",
    },
    posting: {
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        ref: "Post",
    },
});

const Comment = mongoose.model("Comment", commentSchema);

export default Comment;
