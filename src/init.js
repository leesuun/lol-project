import dotenv from "dotenv";
import httpServer from "./app.js";
import "./db.js";

dotenv.config();
const PORT = 8080;

httpServer.listen(PORT, () => {
    console.log(`http server listening..🚀 http://localhost:${PORT}`);
});
