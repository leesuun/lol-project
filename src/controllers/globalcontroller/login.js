import User from "../../models/User.js";

export const getLogin = (req, res) => {
    return res.render("login");
};

export const postLogin = async (req, res) => {
    const {
        body: { userId, password },
    } = req;

    const user = await User.findOne({ userId });
    if (!user) {
        console.log("fail");
    }
};
