import User from "../../models/user";
import regex from "../../regex";

export const getJoin = (req, res) => {
    return res.render("join");
};

export const postJoin = async (req, res) => {
    const {
        body: { userId, password, password2, nickname },
    } = req;

    res.end();
};

export const inputState = async (req, res) => {
    const {
        body: { userId, password, password2 },
    } = req;

    const state = {
        msg: null,
        ok: false,
    };

    const user = await User.findOne({ userId });
    if (userId) {
        state.ok = false;
        if (user) {
            state.msg = "이미 사용중이거나 탈퇴한 아이디입니다.";
        } else if (userId === "blank") {
            state.msg = "필수 입력 항목입니다.";
        } else if (!regex.userid.test(userId)) {
            state.msg = "6~15자 영문,숫자가 포함되어야 합니다.";
        } else {
            state.msg = "사용가능한 아이디 입니다.";
            state.ok = true;
        }
    }

    if (password) {
        state.ok = false;
        if (password === "blank") {
            state.msg = "필수 입력 항목입니다.";
        } else if (!regex.password.test(password)) {
            state.msg = "6~20자 영문, 숫자 또는 특수문자가 포함되어야 합니다.";
        } else {
            state.msg = "사용가능한 비밀번호 입니다.";
            state.ok = true;
        }
    }

    if (password2) {
        state.ok = false;
        if (password2 === "blank") {
            state.msg = "필수 입력 항목입니다.";
        } else if (password !== password2) {
            state.msg = "일치하지 않는 비밀번호입니다.";
        } else {
            state.msg = "비밀번호가 일치 합니다.";
            state.ok = true;
        }
    }

    res.send(state);
};

// 공백 해결
