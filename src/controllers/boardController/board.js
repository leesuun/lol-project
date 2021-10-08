import Post from "../../models/Post.js";

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

    const posting = await Post.findById(id);
    console.log(posting);

    return res.render("see-board", { posting });
};
