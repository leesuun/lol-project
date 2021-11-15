"use strict";

var socket = io();
var roomnameForm = document.getElementById("roomnameForm");
var msgList = document.getElementById("msgList");
var inputMsgForm = document.getElementById("inputMsg");
var nicknameForm = document.getElementById("nicknameForm");
var roomInfo = document.getElementById("roomInfo");
var chatScreen = document.getElementById("chatScreen");
var roomName;
var joinCheck;

function addMessage(msg) {
  var li = document.createElement("li");
  li.innerText = msg;
  msgList.appendChild(li);
  chatScreen.scrollTop = chatScreen.scrollHeight;
}

function roomCount(userCnt) {
  var roomUserCnt = roomInfo.querySelector("#roomUser");
  roomUserCnt.innerText = "\uC785\uC7A5 \uC778\uC6D0: ".concat(userCnt, "\uBA85");
}

function handleMsgProcess(event) {
  event.preventDefault();
  var input = inputMsgForm.querySelector("input");
  var message = input.value;
  socket.emit("new_message", input.value, roomName, function () {
    addMessage("You : ".concat(message));
  });
  input.value = "";
}

function handleJoinRoom(room, userCnt) {
  inputMsgForm.addEventListener("submit", handleMsgProcess);
  var roomName = roomInfo.querySelector("#roomname");
  roomName.innerText = "\uC785\uC7A5 \uBC29: ".concat(room);
  roomCount(userCnt);
}

function handleNickSubmit(event) {
  event.preventDefault();
  var input = nicknameForm.querySelector("input");
  var nickname = input.value;
  socket.emit("nickname", nickname);
  input.value = "";
}

function handleRoomSubmit(event) {
  event.preventDefault();
  var input = roomnameForm.querySelector("input");
  roomName = input.value; //이벤트 중첩 방지

  inputMsgForm.removeEventListener("submit", handleMsgProcess);
  socket.emit("enter_room", input.value, handleJoinRoom);
  input.value = "";
}

socket.on("welcome", function (user, userCnt) {
  addMessage(user);
  roomCount(userCnt);
});
socket.on("bye", function (user, userCnt) {
  addMessage(user);
  roomCount(userCnt);
});
socket.on("new_message", addMessage);
socket.on("room_change", function (rooms) {
  var roomList = document.querySelector("#roomList");
  roomList.innerHTML = "";

  if (rooms.length === 0) {
    return;
  }

  rooms.forEach(function (room) {
    roomList.innerText = "\uBC29 \uB9AC\uC2A4\uD2B8: [".concat(rooms, "]");
  });
});

function handleProtectSubmit(event) {
  event.preventDefault(); // const li = document.createElement("li");
  // li.innerText = "방에 입장해주세요.";
  // msgList.appendChild(li);
}

roomnameForm.addEventListener("submit", handleRoomSubmit);
nicknameForm.addEventListener("submit", handleNickSubmit);
inputMsgForm.addEventListener("submit", handleProtectSubmit);