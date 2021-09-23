const form = document.getElementById("joinForm");
const userId = document.getElementById("userId");
const stateId = document.getElementById("stateId");
const password = document.getElementById("password");
const statePass = document.getElementById("statePass");
const password2 = document.getElementById("password2");
const statePass2 = document.getElementById("statePass2");
const nickname = document.getElementById("nickname");
const stateNickname = document.getElementById("stateNickname");

const handleIdBlur = async (event) => {
    const inputId = userId.value;

    const response = await fetch("http://localhost:8080/join", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            inputId,
        }),
    });

    if (response.status === 200) {
        const { state } = await response.json();
        console.log(state);
        stateId.innerText = state;
    }
};

const handlePassBlur = async (event) => {
    const inputPass = password.value;

    const response = await fetch("http://localhost:8080/join", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            inputPass,
        }),
    });
    if (response.status === 200) {
        const { state } = await response.json();
        console.log(state);
        statePass.innerText = state;
    }
};

const handlePass2Blur = async (event) => {
    const inputPass2 = password2.value;

    const response = await fetch("http://localhost:8080/join", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            inputPass2,
        }),
    });
    if (response.status === 200) {
        const { state } = await response.json();
        console.log(state);
        statePass2.innerText = state;
    }
};

const handleSubmit = (event) => {
    // event.preventDefault();
};

form.addEventListener("submit", handleSubmit);
userId.addEventListener("blur", handleIdBlur);
password.addEventListener("blur", handlePassBlur);
password2.addEventListener("blur", handlePass2Blur);
