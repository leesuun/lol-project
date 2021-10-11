import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    title: { type: String, require: true, trim: true },
    contents: { type: String, require: true, trim: true },
    createAt: { type: Date, default: new Date() },
    author: { type: String, require: true, trim: true },
    views: { type: Number, require: true, default: 0 },
    profileIconId: { type: Number, default: 2076 },
    number: { type: Number, require: true },
    owner: { type: mongoose.Schema.Types.ObjectId, ref: "Post" },
    comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "Comment" }],
});

const Post = mongoose.model("Post", postSchema);

export default Post;
