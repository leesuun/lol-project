import fetch from "node-fetch";
export const ranking = async (req, res) => {
    let page = Number(req.params.page);
    const RANKING_URL = `league/v4/challengerleagues/by-queue/RANKED_SOLO_5x5?api_key=${process.env.API_KEY}`;
    const response = await fetch(`${process.env.LOL_BASE_URL}${RANKING_URL}`);
    let data = null;
    let challenger = null;
    const limit = 15;
    const skip = page * limit;

    if (1 > page || page > 6) {
        return res.redirect("/");
    }

    if (response.status === 200) {
        data = await response.json();
        challenger = data.entries.sort((a, b) => {
            return b.leaguePoints - a.leaguePoints;
        });
    }

    const tt = new Date();
    console.log(tt);

    for (let i = skip - 15; i < skip; i++) {
        const ACCOUNT_URL = `summoner/v4/summoners/${challenger[i].summonerId}?api_key=${process.env.API_KEY}`;
        const userInfo = Promise.all([
            fetch(`${process.env.LOL_BASE_URL}${ACCOUNT_URL}`)
                .then((response) => response.json())
                .then((json) => {
                    console.log(json);
                }),
        ]);
    }

    const ttt = new Date();
    console.log(ttt);

    // console.log(challenger[0]);

    return res.send("sd");

    if (page >= 1) {
        challenger = challenger.slice(skip - 15, skip);
    }

    return res.render("ranking", { page, challenger });
};
