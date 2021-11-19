import fetch from "node-fetch";

async function getLotation() {
    // const LOTATION_URL = `platform/v3/champion-rotations?api_key=${process.env.API_KEY}`;
    // const ALLCHAMPION_URL = `${process.env.LOL_CDN_URL}data/en_US/champion.json`;

    // const lotationData = await (
    //     await fetch(`${process.env.LOL_BASE_URL}${LOTATION_URL}`)
    // ).json();

    // const lotationNumber = lotationData.freeChampionIds.map((key) =>
    //     String(key)
    // );

    // const allChampionInfo = await (await fetch(ALLCHAMPION_URL, {})).json();
    // const allChampionAry = Object.entries(allChampionInfo.data);

    // const lotationImg = [];

    // for (let i = 0; i < allChampionAry.length; i++) {
    //     if (lotationNumber.includes(allChampionAry[i][1].key)) {
    //         lotationImg.push(
    //             process.env.LOL_CDN_URL +
    //                 "img/champion/" +
    //                 allChampionAry[i][1].image.full
    //         );
    //     }
    // }

    // lotationImg.sort();

    const lotationImg = [
        "https://ddragon.leagueoflegends.com/cdn/11.19.1/img/champion/Ahri.png",
        "https://ddragon.leagueoflegends.com/cdn/11.19.1/img/champion/Ashe.png",
        "https://ddragon.leagueoflegends.com/cdn/11.19.1/img/champion/Braum.png",
        "https://ddragon.leagueoflegends.com/cdn/11.19.1/img/champion/Caitlyn.png",
        "https://ddragon.leagueoflegends.com/cdn/11.19.1/img/champion/Ekko.png",
        "https://ddragon.leagueoflegends.com/cdn/11.19.1/img/champion/Galio.png",
        "https://ddragon.leagueoflegends.com/cdn/11.19.1/img/champion/Gnar.png",
        "https://ddragon.leagueoflegends.com/cdn/11.19.1/img/champion/Heimerdinger.png",
        "https://ddragon.leagueoflegends.com/cdn/11.19.1/img/champion/Illaoi.png",
        "https://ddragon.leagueoflegends.com/cdn/11.19.1/img/champion/Jayce.png",
        "https://ddragon.leagueoflegends.com/cdn/11.19.1/img/champion/Jinx.png",
        "https://ddragon.leagueoflegends.com/cdn/11.19.1/img/champion/Karthus.png",
        "https://ddragon.leagueoflegends.com/cdn/11.19.1/img/champion/Kayn.png",
        "https://ddragon.leagueoflegends.com/cdn/11.19.1/img/champion/Kennen.png",
        "https://ddragon.leagueoflegends.com/cdn/11.19.1/img/champion/KogMaw.png",
        "https://ddragon.leagueoflegends.com/cdn/11.19.1/img/champion/Leona.png",
        "https://ddragon.leagueoflegends.com/cdn/11.19.1/img/champion/Maokai.png",
        "https://ddragon.leagueoflegends.com/cdn/11.19.1/img/champion/MissFortune.png",
        "https://ddragon.leagueoflegends.com/cdn/11.19.1/img/champion/Pyke.png",
        "https://ddragon.leagueoflegends.com/cdn/11.19.1/img/champion/Rengar.png",
        "https://ddragon.leagueoflegends.com/cdn/11.19.1/img/champion/Shaco.png",
        "https://ddragon.leagueoflegends.com/cdn/11.19.1/img/champion/Syndra.png",
        "https://ddragon.leagueoflegends.com/cdn/11.19.1/img/champion/Thresh.png",
        "https://ddragon.leagueoflegends.com/cdn/11.19.1/img/champion/Urgot.png",
        "https://ddragon.leagueoflegends.com/cdn/11.19.1/img/champion/Velkoz.png",
        "https://ddragon.leagueoflegends.com/cdn/11.19.1/img/champion/Vi.png",
        "https://ddragon.leagueoflegends.com/cdn/11.19.1/img/champion/Viego.png",
        "https://ddragon.leagueoflegends.com/cdn/11.19.1/img/champion/Viktor.png",
        "https://ddragon.leagueoflegends.com/cdn/11.19.1/img/champion/Vladimir.png",
        "https://ddragon.leagueoflegends.com/cdn/11.19.1/img/champion/Volibear.png",
        "https://ddragon.leagueoflegends.com/cdn/11.19.1/img/champion/Yasuo.png",
        "https://ddragon.leagueoflegends.com/cdn/11.19.1/img/champion/Zed.png",
        "https://ddragon.leagueoflegends.com/cdn/11.19.1/img/champion/Ziggs.png",
    ];

    return lotationImg;
}

export const home = async (req, res) => {
    const lotationImgs = await getLotation();

    return res.render("home", { lotationImgs });
};
