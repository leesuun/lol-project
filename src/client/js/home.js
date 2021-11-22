const contents = document.querySelector("#lotationPeriod");

async function getLotation() {
    const LOTATION_URL = `platform/v3/champion-rotations?api_key=${API_KEY}`;
    const ALLCHAMPION_URL = `https://ddragon.leagueoflegends.com/cdn/11.19.1/data/en_US/champion.json`;

    const lotationData = await (
        await fetch(`https://kr.api.riotgames.com/lol/${LOTATION_URL}`)
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
                "https://ddragon.leagueoflegends.com/cdn/11.19.1/" +
                    "img/champion/" +
                    allChampionAry[i][1].image.full
            );
        }
    }

    lotationImg.sort();

    await fetch("/api/getLotation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ lotationImg }),
    });
}

getLotation();
