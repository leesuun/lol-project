const form = document.getElementById("joinForm");
const userId = form.querySelector("#userId");

const handleIdBlur = (event) => {
    fetch("/api/join", {
        method: "POST",
    });
};

userId.addEventListener("blur", handleIdBlur);
