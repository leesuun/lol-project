const form = document.getElementById("joinForm");
const userId = form.querySelector("#userId");
const stateId = form.querySelector("#stateId");
const password = form.querySelector("#password");
const statePass = form.querySelector("#statePass");
const password2 = form.querySelector("#password2");
const statePass2 = form.querySelector("#statePass2");

const ok = {
    id: false,
    password: false,
    password2: false,
};

userId.focus();

const handleIdBlur = async (event) => {
    const inputId = userId.value;

    if (inputId === "") {
        console.log(inputId);
    }

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
    const inputPass = password.value;

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
    const inputPass = password.value;
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

const handleSubmit = (event) => {
    event.preventDefault();

    if (ok.id === false || ok.password === false || ok.password2 === false) {
        console.log("false");
    } else {
        console.log("true");
    }
};

userId.addEventListener("blur", handleIdBlur);
password.addEventListener("blur", handlePassBlur);
password2.addEventListener("blur", handlePass2Blur);
form.addEventListener("submit", handleSubmit);
