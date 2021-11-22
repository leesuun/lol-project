import Lotation from "../../models/Lotation.js";

export const getLotation = async (req, res) => {
    const {
        body: { lotationImg },
    } = req;

    await Lotation.deleteMany();

    const lotation = await Lotation.create({
        lotationList: lotationImg,
    });
};

export const home = async (req, res) => {
    const lotationList = await Lotation.find();

    const lotationImgs = lotationList[0].lotationList;

    return res.render("home", { lotationImgs });
};
