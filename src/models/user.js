import mongoose from "mongoose";
import bcrypt from "bcrypt";
import regex from "../regex.js";

const userSchema = mongoose.Schema({
    userId: {
        type: String,
        unique: true,
        require: true,
        trim: true,
        validate: {
            validator: function (userId) {
                return regex.userid.test(userId);
            },
        },
    },
    password: {
        type: String,
        trim: true,
        require: true,
        validate: {
            validator: function (password) {
                return regex.password.test(password);
            },
        },
    },
    nickname: { type: String, require: true, trim: true },
    summonerId: { type: String, require: true, trim: true },
    accountId: { type: String, require: true, trim: true },
    puuId: { type: String, require: true, trim: true },
});

userSchema.pre("save", async function (next) {
    const saltRounds = Math.floor(Math.random() * 10);

    if (this.isModified("password")) {
        this.password = await bcrypt.hash(this.password, saltRounds);
    }
    next();
});

const User = mongoose.model("User", userSchema);

export default User;

// 유저 아이디 최소 1개씩 영문자(소,대), 숫자 포함한 6자이상 15자 이하
// 유저 패스워드 최소 1개씩 영문자(소,대), 숫자 또는 특수문자 포함한 6자이상 20자 이하
// 닉네임 개방 접근성 up
