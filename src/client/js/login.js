const form = document.getElementById("loginForm");
const userId = form.querySelector("#userId");
const password = form.querySelector("#password");
const submitState = form.querySelector("#submitState");

const handleSubmit = async (event) => {
    // event.preventDefault();

    console.log("hi");
    const response = await fetch("/api/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            userId: userId.value,
            password: password.value,
        }),
    });

    if (response.status === 200) {
        const state = await response.json();
        console.log(state);
        submitState.innerText = state.msg;

        if (state.ok === true) {
            await fetch("/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    userId: userId.value,
                    password: password.value,
                    state,
                }),
            });
            console.log("javasc");
        }
    }
};

form.addEventListener("submit", handleSubmit);
