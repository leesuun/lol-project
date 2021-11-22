import fetch from "node-fetch";
export const ranking = async (req, res) => {
    const RANKING_URL = `league/v4/challengerleagues/by-queue/RANKED_SOLO_5x5?api_key=${process.env.API_KEY}`;
    let page = Number(req.params.page);
    let data = null;
    let challenger = null;
    const limit = 50;
    const skip = page * limit;

    const response = await fetch(`${process.env.LOL_BASE_URL}${RANKING_URL}`);

    if (1 > page || page > 6) {
        return res.redirect("/");
    }

    if (response.status === 200) {
        data = await response.json();
        challenger = data.entries.sort((a, b) => {
            return b.leaguePoints - a.leaguePoints;
        });
    }

    let ACCOUNT_URL = [];

    if (page === 1) {
        for (let i = 0; i < 3; i++) {
            ACCOUNT_URL.push(
                `${process.env.LOL_BASE_URL}summoner/v4/summoners/${challenger[i].summonerId}?api_key=${process.env.API_KEY}`
            );
        }
        ACCOUNT_URL = ACCOUNT_URL.map((url) => fetch(url));
        const request = await Promise.all(ACCOUNT_URL);

        for (let i = 0; i < request.length; i++) {
            const addData = await request[i].json();
            challenger[i].profileIconId = addData.profileIconId;
            challenger[i].summonerLevel = addData.summonerLevel;
        }
    }

    if (page >= 1) {
        challenger = challenger.slice(skip - limit, skip);
    }

    return res.render("ranking", { page, challenger });
};
