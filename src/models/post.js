import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    title: { type: String, require: true, trim: true },
    contents: { type: String, require: true, trim: true },
    date: { type: Date, default: new Date() },
    author: { type: String, require: true, trim: true },
    views: { type: Number, require: true, default: 0 },
});

const Post = mongoose.model("Post", postSchema);

export default Post;
