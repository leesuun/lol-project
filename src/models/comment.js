import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
    text: { type: String, require: true, trim: true },
    createAt: { type: Date, require: true, default: new Date() },
    owner: { type: String, require: true, trim: true },
    posting: {
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        ref: "Post",
    },
});

const Comment = mongoose.model("Comment", commentSchema);

export default Comment;
