const socket = io();

socket.on("ferret", (name, fn) => {
    console.log(name);
    fn("woot");
});
