import Post from "../../models/Post.js";
import User from "../../models/User.js";
import Comment from "../../models/comment.js";

export const getBoard = async (req, res) => {
    const page = Number(req.params.page);
    const limitCnt = 15;
    let skip = (page - 1) * limitCnt;
    let postings = [];

    if (page <= 0) {
        return res.redirect("/");
    }

    postings = await Post.find({})
        .sort({ number: "desc" })
        .limit(limitCnt)
        .skip(skip);
    return res.render("board", { postings, page });
};

export const seeWrite = async (req, res) => {
    const {
        params: { id },
    } = req;

    const posting = await Post.findById(id).populate("comments");

    return res.render("see-board", { posting });
};

export const registerViews = async (req, res) => {
    const {
        body: { postId },
    } = req;

    const posting = await Post.findById(postId);
    posting.views += 1;
    posting.save();
};

export const createComment = async (req, res) => {
    const {
        params: { id },
        body: { content },
        session: {
            user: { _id },
        },
    } = req;

    const commentInfo = {
        author: null,
        text: null,
        createAt: null,
    };

    const posting = await Post.findById(id);
    const user = await User.findById(_id);

    const comment = await Comment.create({
        text: content,
        createAt: new Date(),
        owner: user.nickname,
        posting: posting._id,
    });

    commentInfo.author = comment.owner;
    commentInfo.createAt = comment.createAt.toISOString().slice(0, 10);
    commentInfo.text = comment.text;

    posting.comments.push(comment._id);
    await posting.save();

    res.send(commentInfo);
};
