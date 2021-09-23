import User from "../../models/user";
import regex from "../../regex";

let savePass;
let stateCheckFlag = {
    id: false,
    pass: false,
    pass2: false,
};

export const getJoin = (req, res) => {
    return res.render("join");
};

export const postJoin = async (req, res) => {
    const {
        body: {
            inputId,
            inputPass,
            inputPass2,
            userId,
            password,
            password2,
            nickname,
        },
    } = req;
    console.log("hi");
    const msg = {
        state: null,
    };

    if (inputId) {
        const userExist = await User.findOne({ userId: inputId });
        if (userExist) {
            msg.state = "이미 존재하는 아이디 입니다.";
            stateCheckFlag.id = false;
        } else if (inputId === "") {
            msg.state = "필수 입력 항목입니다.";
            stateCheckFlag.id = false;
        } else if (!regex.userid.test(inputId)) {
            msg.state = "6~15자 영문,숫자가 포함되어야 합니다.";
            stateCheckFlag.id = false;
        } else {
            msg.state = "사용가능한 아이디 입니다.";
            stateCheckFlag.id = true;
        }
        res.send(msg);
    }

    if (inputPass || inputPass === "") {
        if (inputPass === "") {
            msg.state = "필수 입력 항목입니다.";
            stateCheckFlag.pass = false;
        } else if (!regex.password.test(inputPass)) {
            msg.state = "6~20자 영문, 숫자 또는 특수문자가 포함되어야 합니다.";
            stateCheckFlag.pass = false;
        } else {
            msg.state = "사용가능한 비밀번호 입니다.";
            stateCheckFlag.pass = true;
        }
        res.send(msg);
        savePass = inputPass;
    }

    if (inputPass2 || inputPass2 === "") {
        if (inputPass2 !== savePass) {
            msg.state = "비밀번호가 일치하지 않습니다.";
            stateCheckFlag.pass2 = false;
        } else {
            msg.state = "비밀번호가 일치합니다.";
            stateCheckFlag.pass2 = true;
        }
        res.send(msg);
    }

    if (stateCheckFlag.id && stateCheckFlag.pass && stateCheckFlag.pass2) {
        const user = await User.create({
            userId,
            password,
            password2,
            nickname: 3,
        });
        console.log(user);
        return res.redirect("/");
    } else {
    }
};

// 공백 해결
