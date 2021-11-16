import "dotenv/config";
import "regenerator-runtime";
import httpServer from "./app.js";
import "./db.js";

// dotenv.config();
const PORT = process.env.PORT || 7080;

httpServer.listen(PORT, () => {
    console.log(`http server listening..🚀 http://localhost:${PORT}`);
});
