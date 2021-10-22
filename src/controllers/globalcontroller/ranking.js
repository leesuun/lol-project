import fetch from "node-fetch";
export const ranking = async (req, res) => {
    let page = Number(req.params.page) < 1 ? 1 : Number(req.params.page);
    const RANKING_URL = `league/v4/challengerleagues/by-queue/RANKED_SOLO_5x5?api_key=${process.env.API_KEY}`;

    const response = await fetch(`${process.env.LOL_BASE_URL}${RANKING_URL}`);
    let data = null;
    let challenger = null;
    const limit = 50;
    const skip = page * limit;

    if (response.status === 200) {
        data = await response.json();
        challenger = data.entries.sort((a, b) => {
            return b.leaguePoints - a.leaguePoints;
        });
    }

    if (page === 1) {
        challenger = challenger.slice(0, skip);
    } else if (page > 1) {
        challenger = challenger.slice(skip - 50, skip);
    }

    return res.render("ranking", { page, challenger });
};
