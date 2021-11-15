import mongoose from "mongoose";

mongoose.connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
});

const db = mongoose.connection;

const error = (error) => {
    console.log("db err: ", error);
};

db.on("error", error);
db.once("open", () => console.log("db on✅"));
