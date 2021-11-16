import fetch from "node-fetch";
async function getLotation() {
    const LOTATION_URL = `platform/v3/champion-rotations?api_key=${process.env.API_KEY}`;
    const ALLCHAMPION_URL = `${process.env.LOL_CDN_URL}data/en_US/champion.json`;

    const lotationData = await (
        await fetch(`${process.env.LOL_BASE_URL}${LOTATION_URL}`)
    ).json();
    const lotationNumber = lotationData.freeChampionIds.map((key) =>
        String(key)
    );

    const allChampionInfo = await (await fetch(ALLCHAMPION_URL, {})).json();
    const allChampionAry = Object.entries(allChampionInfo.data);

    const lotationImg = [];

    for (let i = 0; i < allChampionAry.length; i++) {
        if (lotationNumber.includes(allChampionAry[i][1].key)) {
            lotationImg.push(
                process.env.LOL_CDN_URL +
                    "img/champion/" +
                    allChampionAry[i][1].image.full
            );
        }
    }

    lotationImg.sort();
    return lotationImg;
}

export const home = async (req, res) => {
    const lotationImgs = await getLotation();

    return res.render("home", { lotationImgs });
};
