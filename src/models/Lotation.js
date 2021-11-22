import mongoose from "mongoose";

const lotationSchema = new mongoose.Schema({
    lotationList: { type: Array },
});

const Lotation = mongoose.model("Lotation", lotationSchema);

export default Lotation;
