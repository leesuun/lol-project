import User from "../../models/User.js";
import Post from "../../models/Post.js";

export const getWrite = (req, res) => {
    return res.render("write-board");
};

export const postWrite = async (req, res) => {
    const {
        body: { title, contents },
        session: {
            user: { _id },
            userInfo: { profileIconId },
        },
    } = req;

    const user = await User.findById(_id);
    if (!user) {
        return res.redirect("/");
    }

    const postingLength = await Post.find({});

    const posting = await Post.create({
        title,
        contents,
        creatAt: new Date(),
        author: user.nickname,
        views: 0,
        profileIconId,
        owner: _id,
        number: postingLength.length,
    });

    user.posting.push(posting._id);
    await user.save();

    console.log(user);
    return res.redirect("/board/page=1");
};
