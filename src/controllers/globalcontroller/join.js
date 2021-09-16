import User from "../../models/user";

export const getJoin = (req, res) => {
    return res.render("join");
};

export const postJoin = async (req, res) => {
    const {
        body: { userId, password, paswwrod2, nickname },
    } = req;

    const user = await User.create({
        userId,
        password,
        nickname,
    });

    console.log(user);
    return res.end();
};
