const form = document.getElementById("joinForm");
const userId = form.querySelector("#userId");
const stateId = form.querySelector("#stateId");
const password = form.querySelector("#password");
const statePass = form.querySelector("#statePass");
const password2 = form.querySelector("#password2");
const statePass2 = form.querySelector("#statePass2");
const nickname = form.querySelector("#nickname");
const stateNickname = form.querySelector("#stateNickname");

userId.focus();

const ok = {
    id: false,
    password: false,
    password2: false,
    nickname: false,
};

let inputId = "";
let inputPass = "";
let inputNickname = "";
let accountData = "";

function inputError(state, element, stateMsg) {
    if (!state) {
        element.classList.add("red");
        element.classList.remove("green");
    } else {
        element.classList.add("green");
        element.classList.remove("red");
    }
    element.innerText = stateMsg;
}

async function stateCheck(fetchObj, msgElement) {
    const response = await fetch(fetchObj.url, {
        method: fetchObj.type,
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(fetchObj.body),
    });

    if (response.status === 200) {
        const state = await response.json();

        switch (fetchObj.value) {
            case "id": {
                ok.id = state.ok;
                break;
            }
            case "password": {
                ok.password = state.ok;
                break;
            }
            case "password2": {
                ok.password2 = state.ok;
                break;
            }
            case "nickname": {
                ok.nickname = state.state.ok;
                accountData = state.accountData;
                break;
            }
        }
        if (fetchObj.value === "nickname") {
            inputError(state.state.ok, msgElement, state.state.msg);
        } else {
            inputError(state.ok, msgElement, state.msg);
        }
    }

    return response;
}

const handleIdBlur = async (event) => {
    inputId = userId.value;

    const fetchObj = {
        url: "/api/join",
        type: "POST",
        body: { userId: inputId !== "" ? inputId : "#####" },
        value: "id",
    };

    await stateCheck(fetchObj, stateId);
};

const handlePassBlur = async (event) => {
    inputPass = password.value;

    const fetchObj = {
        url: "/api/join",
        type: "POST",
        body: {
            password: inputPass !== "" ? inputPass : "#####",
        },
        value: "password",
    };
    await stateCheck(fetchObj, statePass);
};

const handlePass2Blur = async (evnet) => {
    inputPass = password.value;
    const inputPass2 = password2.value;

    const fetchObj = {
        url: "/api/join",
        type: "POST",
        body: {
            password2: inputPass2 !== "" ? inputPass2 : "#####",
            password: inputPass,
        },
        value: "password2",
    };

    await stateCheck(fetchObj, statePass2);
};

const handleNicknameBlur = async (event) => {
    inputNickname = nickname.value;

    const fetchObj = {
        url: "/api/join/nickname",
        type: "POST",
        body: {
            nickname: inputNickname !== "" ? inputNickname : "#####",
        },
        value: "nickname",
    };
    await stateCheck(fetchObj, stateNickname);
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
                accountData,
            }),
        });
    }
};

userId.addEventListener("blur", handleIdBlur);
password.addEventListener("blur", handlePassBlur);
password2.addEventListener("blur", handlePass2Blur);
nickname.addEventListener("blur", handleNicknameBlur);
form.addEventListener("submit", handleSubmit);
