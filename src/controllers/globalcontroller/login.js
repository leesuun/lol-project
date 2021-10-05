import User from "../../models/User.js";
import bcrypt from "bcrypt";
import fetch from "node-fetch";

export const getLogin = (req, res) => {
    return res.render("login");
};

export const postLogin = async (req, res) => {
    const {
        body: { successId, userId },
    } = req;

    const user =
        (await User.findOne({ userId })) === null
            ? await User.findOne({ userId: successId })
            : await User.findOne({ userId });
    // console.log(user);

    const ACCOUNT_URL = `summoner/v4/summoners/by-account/${user.accountId}?api_key=${process.env.API_KEY}`;
    const userInfo = await (
        await fetch(`${process.env.LOL_BASE_URL}${ACCOUNT_URL}`)
    ).json();

    req.session.loggedIn = true;
    req.session.user = user;
    req.session.userInfo = userInfo;
    console.log(req.session);

    return res.redirect("/");
};

export const accountInfo = async (req, res) => {
    const {
        body: { userId, password },
    } = req;
    const state = {
        msg: null,
        ok: false,
        successId: null,
        successPass: null,
    };
    const user = await User.findOne({ userId });

    if (userId === "!@#$" || password === "!@#$") {
        state.msg = "아이디 / 패스워드를 입력해주세요.";
    } else if (!user) {
        state.msg = "존재하지 않는 계정입니다.";
    } else {
        const math = await bcrypt.compare(password, user.password);
        if (!math) {
            state.msg = "아이디 또는 비밀번호가 잘못 입력 되었습니다.";
        } else {
            state.ok = true;
            state.successId = userId;
            state.successPass = password;
        }
    }
    res.send(state);
};
