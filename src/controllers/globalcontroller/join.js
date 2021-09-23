import User from "../../models/user";
import regex from "../../regex";

export const getJoin = (req, res) => {
    return res.render("join");
};

export const postJoin = async (req, res) => {
    const {
        body: { userId, password, password2, nickname },
    } = req;
};

export const inputState = (req, res) => {
    console.log("hi");
};

// 공백 해결
