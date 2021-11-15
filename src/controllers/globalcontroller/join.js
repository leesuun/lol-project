import fetch from "node-fetch";
import User from "../../models/User";
import regex from "../../regex.js";

export const getJoin = (req, res) => {
    return res.render("join");
};

export const postJoin = async (req, res) => {
    const {
        body: { userId, password, accountData, statusCheck },
    } = req;

    if (statusCheck) {
        try {
            const user = await User.create({
                userId,
                password,
                summonerId: accountData.id,
                accountId: accountData.accountId,
                puuId: accountData.puuid,
                nickname: accountData.name,
            });
        } catch (error) {
            console.log(error);
        }
    }

    return res.redirect("/login");
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

export const inputNickname = async (req, res) => {
    const {
        body: { nickname },
    } = req;
    const state = {
        msg: null,
        ok: false,
    };

    const ACCOUNT_URL = `summoner/v4/summoners/by-name/${nickname}?api_key=${process.env.API_KEY}`;
    const accountData = await (
        await fetch(`${process.env.LOL_BASE_URL}${ACCOUNT_URL}`)
    ).json();

    if (nickname) {
        state.ok = false;
        if (nickname === "!@#$") {
            state.msg = "필수 입력 항목입니다.";
        } else if (accountData.status) {
            state.msg = "존재하지 않는 소환사 입니다.";
        } else {
            state.msg = "유효한 소환사명 입니다.";
            state.ok = true;
        }
    }

    res.send({ state, accountData });
};

// 공백 해결
