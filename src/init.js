import app from "./app";
import "./db";

const PORT = 8080;

app.listen(PORT, () => {
    console.log(`http server listening..🚀 http://localhost:${PORT}`);
});
