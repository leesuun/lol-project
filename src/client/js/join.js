const form = document.getElementById("joinForm");
const userId = form.querySelector("#userId");
const stateId = form.querySelector("#stateId");
const password = form.querySelector("#password");
const statePass = form.querySelector("#statePass");
const password2 = form.querySelector("#password2");
const statePass2 = form.querySelector("#statePass2");
const nickname = form.querySelector("#nickname");

const ok = {
    id: false,
    password: false,
    password2: false,
    nickname: false,
};

let inputId = null;
let inputPass = null;
let inputNickname = null;
let accountData = null;

userId.focus();

const handleIdBlur = async (event) => {
    inputId = userId.value;

    const response = await fetch("/api/join", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            userId: inputId !== "" ? inputId : "blank",
        }),
    });

    if (response.status === 200) {
        const state = await response.json();
        console.log(state);
        ok.id = state.ok;
        stateId.innerText = state.msg;
    }
};

const handlePassBlur = async (event) => {
    inputPass = password.value;

    const response = await fetch("/api/join", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            password: inputPass !== "" ? inputPass : "blank",
        }),
    });

    if (response.status === 200) {
        const state = await response.json();
        statePass.innerText = state.msg;
        console.log(state);
        ok.password = state.ok;
    }
};

const handlePass2Blur = async (evnet) => {
    inputPass = password.value;
    const inputPass2 = password2.value;

    const response = await fetch("/api/join", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            password2: inputPass2 !== "" ? inputPass2 : "blank",
            password: inputPass,
        }),
    });

    if (response.status === 200) {
        const state = await response.json();
        statePass2.innerText = state.msg;
        console.log(state);
        ok.password2 = state.ok;
    }
};

const handleNicknameBlur = async (event) => {
    inputNickname = nickname.value;

    const response = await fetch("/api/join/nickname", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            nickname: inputNickname !== "" ? inputNickname : "!@#$",
        }),
    });

    if (response.status === 200) {
        accountData = await response.json();
        stateNickname.innerText = accountData.state.msg;
        // console.log(accountData);
        ok.nickname = accountData.state.ok;
    }
};

const handleSubmit = async (event) => {
    if (
        ok.id === false ||
        ok.password === false ||
        ok.password2 === false ||
        ok.nickname === false
    ) {
        event.preventDefault();
        alert("입력 정보를 확인해 주세요.");
    } else {
        await fetch("/join", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                statusCheck: "ok",
                userId: inputId,
                password: inputPass,
                accountData: accountData.accountData,
            }),
        });
    }
};

userId.addEventListener("blur", handleIdBlur);
password.addEventListener("blur", handlePassBlur);
password2.addEventListener("blur", handlePass2Blur);
nickname.addEventListener("blur", handleNicknameBlur);
form.addEventListener("submit", handleSubmit);
