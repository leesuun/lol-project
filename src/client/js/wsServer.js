const socket = io();

const roomnameForm = document.getElementById("roomnameForm");
const msgList = document.getElementById("msgList");
const inputMsgForm = document.getElementById("inputMsg");
const nicknameForm = document.getElementById("nicknameForm");

let roomName;
let joinCheck;

function addMessage(msg) {
    const li = document.createElement("li");
    li.innerText = msg;
    msgList.appendChild(li);
}

function handleMsgProcess(event) {
    event.preventDefault();
    const input = inputMsgForm.querySelector("input");
    const message = input.value;
    socket.emit("new_message", input.value, roomName, () => {
        addMessage(`You : ${message}`);
    });
    input.value = "";
}

function handleMsgSubmit() {
    inputMsgForm.addEventListener("submit", handleMsgProcess);
}

function handleNickSubmit(event) {
    event.preventDefault();
    const input = nicknameForm.querySelector("input");
    const nickname = input.value;
    socket.emit("nickname", nickname);

    input.value = "";
}

function handleRoomSubmit(event) {
    event.preventDefault();
    const input = roomnameForm.querySelector("input");
    roomName = input.value;
    inputMsgForm.removeEventListener("submit", handleMsgProcess);
    socket.emit("enter_room", input.value, handleMsgSubmit);
    input.value = "";
}

socket.on("welcome", (user) => {
    addMessage(user);
});

socket.on("new_message", addMessage);

socket.on("bye", (user) => {
    addMessage(user);
});

function handleProtectSubmit(event) {
    event.preventDefault();
    // const li = document.createElement("li");
    // li.innerText = "방에 입장해주세요.";
    // msgList.appendChild(li);
}

roomnameForm.addEventListener("submit", handleRoomSubmit);
nicknameForm.addEventListener("submit", handleNickSubmit);
inputMsgForm.addEventListener("submit", handleProtectSubmit);
