const socket = io();

const roomnameForm = document.getElementById("roomnameForm");
const msgList = document.getElementById("msgList");
const inputMsgForm = document.getElementById("inputMsg");
const nicknameForm = document.getElementById("nicknameForm");
const roomInfo = document.getElementById("roomInfo");
const chatScreen = document.getElementById("chatScreen");

let roomName;
let joinCheck;

function addMessage(msg) {
    const li = document.createElement("li");
    li.innerText = msg;
    msgList.appendChild(li);
    chatScreen.scrollTop = chatScreen.scrollHeight;
}

function roomCount(userCnt) {
    const roomUserCnt = roomInfo.querySelector("#roomUser");

    roomUserCnt.innerText = `입장 인원: ${userCnt}명`;
}

function handleMsgProcess(event) {
    event.preventDefault();
    const input = inputMsgForm.querySelector("input");
    const message = input.value;
    socket.emit("new_message", input.value, roomName, () => {
        addMessage(`나 : ${message}`);
    });
    input.value = "";
}

function handleJoinRoom(room, userCnt) {
    inputMsgForm.addEventListener("submit", handleMsgProcess);

    const roomName = roomInfo.querySelector("#roomname");
    roomName.innerText = `입장 방: ${room}`;

    roomCount(userCnt);
}

function handleNickSubmit(event) {
    event.preventDefault();
    const input = nicknameForm.querySelector("input");
    const nickname = input.value;
    socket.emit("nickname", nickname);
}

function handleRoomSubmit(event) {
    event.preventDefault();
    const input = roomnameForm.querySelector("input");
    roomName = input.value;
    //이벤트 중첩 방지
    inputMsgForm.removeEventListener("submit", handleMsgProcess);
    socket.emit("enter_room", input.value, handleJoinRoom);
    input.value = "";
}

socket.on("welcome", (user, userCnt) => {
    addMessage(user);
    roomCount(userCnt);
});

socket.on("bye", (user, userCnt) => {
    addMessage(user);
    roomCount(userCnt);
});

socket.on("new_message", addMessage);

socket.on("room_change", (rooms) => {
    const roomList = document.querySelector("#roomList");
    roomList.innerHTML = "";
    if (rooms.length === 0) {
        return;
    }
    rooms.forEach((room) => {
        roomList.innerText = `방 리스트: [${rooms}]`;
    });
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
