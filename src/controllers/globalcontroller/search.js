import fetch from "node-fetch";

export const getSearch = async (req, res) => {
    const {
        query: { username },
    } = req;
    let MATCH_2_URL = [];
    let gameListInfo = [];

    // 유저 정보 (summonerId, accountId, puuid, name, profileiconId, revisionDate, summonerLevel)
    const ACCOUNT_URL = `${process.env.LOL_BASE_URL}summoner/v4/summoners/by-name/${username}`;
    const userInfo = await (
        await fetch(ACCOUNT_URL, {
            headers: {
                "X-Riot-Token": process.env.API_KEY,
            },
        })
    ).json();

    if ("status" in userInfo) {
        // 에러처리 필요
        return res.redirect("/");
    }

    const RANKINFO_URL = `${process.env.LOL_BASE_URL}league/v4/entries/by-summoner/${userInfo.id}`;
    const rankInfo = await (
        await fetch(RANKINFO_URL, {
            headers: {
                "X-Riot-Token": process.env.API_KEY,
            },
        })
    ).json();
    let soloInfo;
    let flexInfo;

    for (let i = 0; i < rankInfo.length; i++) {
        if (rankInfo[i].queueType === "RANKED_SOLO_5x5") {
            soloInfo = rankInfo[i];
        } else if (rankInfo[i].queueType === "RANKED_FLEX_SR") {
            flexInfo = rankInfo[i];
        }
    }

    // rankInfo.push(userInfo);

    // 검색 유저 최근 20게임 정보
    const MATCH_1_URL = `${process.env.LOL_BASE_ASIA_URL}match/v5/matches/by-puuid/${userInfo.puuid}/ids?start=0&count=10`;
    const gameList = await (
        await fetch(MATCH_1_URL, {
            headers: {
                "X-Riot-Token": process.env.API_KEY,
            },
        })
    ).json();

    // 최근 20게임 meta데이터
    for (let i = 0; i < gameList.length; i++) {
        MATCH_2_URL.push(
            `${process.env.LOL_BASE_ASIA_URL}match/v5/matches/${gameList[i]}?api_key=${process.env.API_KEY}`
        );
    }
    MATCH_2_URL = MATCH_2_URL.map((url) => fetch(url));

    const request = await Promise.all(MATCH_2_URL);
    for (let i = 0; i < request.length; i++) {
        gameListInfo.push(await request[i].json());
    }

    playGameProcessing(gameListInfo, username);

    return res.send(gameListInfo);

    return res.render("search", { userInfo, soloInfo, flexInfo });
};
export const postSearch = (req, res) => {
    console.log(req.body);
    console.log(req.params);
};

function playGameProcessing(gameListInfo, username) {
    for (let i = 0; i < gameListInfo.length; i++) {
        for (let j = 0; j < gameListInfo[i].info.participants.length; j++) {
            if (
                gameListInfo[i].info.participants[j].summonerName === username
            ) {
                console.log(gameListInfo[i].info.participants[j].win);
                console.log(gameListInfo[i].info.participants[j].championName);
            }
        }
    }
}
