import fetch from "node-fetch";

export const getSearch = async (req, res) => {
    const {
        query: { username },
    } = req;

    const ACCOUNT_URL = `summoner/v4/summoners/by-name/${username}`;
    const userInfo = await (
        await fetch(`${process.env.LOL_BASE_URL}${ACCOUNT_URL}`, {
            headers: {
                "X-Riot-Token": process.env.API_KEY,
            },
        })
    ).json();

    const MATCH_1_URL = `match/v5/matches/by-puuid/${userInfo.puuid}/ids?start=0&count=5`;
    const gameList = await (
        await fetch(`${process.env.LOL_BASE_ASIA_URL}${MATCH_1_URL}`, {
            headers: {
                "X-Riot-Token": process.env.API_KEY,
            },
        })
    ).json();

    let MATCH_2_URL = [];

    for (let i = 0; i < gameList.length; i++) {
        MATCH_2_URL.push(
            `${process.env.LOL_BASE_ASIA_URL}match/v5/matches/${gameList[i]}?api_key=${process.env.API_KEY}`
        );
    }
    MATCH_2_URL = MATCH_2_URL.map((url) => fetch(url));

    const request = await Promise.all(MATCH_2_URL);
    const gameListInfo = [];

    for (let i = 0; i < request.length; i++) {
        gameListInfo.push(await request[i].json());
    }
    console.log(gameListInfo);

    return res.send(gameListInfo);

    // console.log(new Date());
    // await gameListInfo[0].json();
    // await gameListInfo[1].json();
    // await gameListInfo[2].json();
    // await gameListInfo[3].json();
    // await gameListInfo[4].json();
    // console.log(new Date());

    return res.render("search");
};
export const postSearch = (req, res) => {
    console.log(req.body);
    console.log(req.params);
};
