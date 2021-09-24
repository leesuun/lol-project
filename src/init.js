import dotenv from "dotenv";
import app from "./app.js";
import "./db.js";

dotenv.config();
const PORT = 8080;

app.listen(PORT, () => {
    console.log(`http server listening..🚀 http://localhost:${PORT}`);
});
