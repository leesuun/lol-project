const form = document.getElementById("loginForm");
const userId = form.querySelector("#userId");
const password = form.querySelector("#password");
const submitState = form.querySelector("#submitState");

let successId = null;
let successPass = null;
let ok = false;
let msg = null;

const hnaldePassBlur = async (event) => {
    const response = await fetch("/api/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            userId: userId.value === "" ? "!@#$" : userId.value,
            password: password.value === "" ? "!@#$" : password.value,
        }),
    });

    if (response.status === 200) {
        const state = await response.json();
        ok = state.ok;
        msg = state.msg;
        successId = state.successId;
        successPass = state.successPass;
    }
};

const handleSubmit = async (event) => {
    if (!ok) {
        event.preventDefault();
        submitState.innerText = msg;
    } else {
        await fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                ok,
                successId,
                successPass,
            }),
        });
    }
};

// userId.addEventListener("blur", handleIdBlur);
password.addEventListener("blur", hnaldePassBlur);
form.addEventListener("submit", handleSubmit);
