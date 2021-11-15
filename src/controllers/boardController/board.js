import Post from "../../models/Post";
import User from "../../models/User";
import Comment from "../../models/Comment";

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

export const postSearch = async (req, res) => {
    const {
        body: { keyword, New, Popular },
    } = req;

    const page = Number(req.params.page);

    let postings = [];

    if (keyword) {
        postings = await Post.find({
            title: {
                $regex: new RegExp(`${keyword}`, "i"),
            },
        });
    } else if (New === "") {
        postings = await Post.find({}).sort({ number: "desc" });
    } else if (Popular === "") {
        postings = await Post.find({}).sort({ views: "desc" });
    }
    if (page <= 0) {
        return res.redirect("/");
    }
    return res.render("board", { postings, page });
};

export const seeWrite = async (req, res) => {
    const {
        params: { id },
    } = req;

    const posting = await Post.findById(id).populate("comments");
    console.log(posting);

    return res.render("see-board", { posting });
};

export const deletePosting = async (req, res) => {
    const {
        params: { id },
        session: {
            user: { _id },
        },
    } = req;
    console.log(_id);

    const posting = await Post.findById(id);

    if (String(_id) == String(posting.owner)) {
        await Post.findByIdAndDelete(id);
    } else {
        console.log("forbidden");
    }
    return res.redirect("/");
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
        newCommentId: null,
    };

    const posting = await Post.findById(id);
    const user = await User.findById(_id);

    const comment = await Comment.create({
        text: content,
        createAt: new Date(),
        nickname: user.userId,
        owner: _id,
        posting: posting._id,
    });

    commentInfo.author = comment.nickname;
    commentInfo.createAt = comment.createAt.toISOString().slice(0, 10);
    commentInfo.text = comment.text;
    commentInfo.newCommentId = comment._id;

    posting.comments.push(comment._id);
    await posting.save();

    res.send(commentInfo);
};

export const deleteComment = async (req, res) => {
    const {
        body: { commentid },
        session: {
            user: { _id },
        },
    } = req;

    const comment = await Comment.findById(commentid);

    if (String(comment.owner) !== String(_id)) {
        // not owner
        res.sendStatus(403);
        console.log("not owner");
    } else {
        await Comment.findByIdAndDelete({ _id: commentid });
        res.sendStatus(200);
    }
};
