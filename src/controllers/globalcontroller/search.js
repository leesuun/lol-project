import fetch from "node-fetch";

import { QUEUETYPE, SPELL, RUNE } from "../../constants.js";

let team1 = [];
let team2 = [];

export const getSearch = async (req, res) => {
    const {
        query: { username },
    } = req;
    const GAME_LIST_COUNT = 15;
    const GAME_PARTICIPANTS_COUNT = 10;
    let MATCH_2_URL = [];
    let gameListInfo = [];
    let soloInfo;
    let flexInfo;

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
        return res.render("404");
    }

    const RANKINFO_URL = `${process.env.LOL_BASE_URL}league/v4/entries/by-summoner/${userInfo.id}`;
    const rankInfo = await (
        await fetch(RANKINFO_URL, {
            headers: {
                "X-Riot-Token": process.env.API_KEY,
            },
        })
    ).json();

    for (let i = 0; i < rankInfo.length; i++) {
        if (rankInfo[i].queueType === "RANKED_SOLO_5x5") {
            soloInfo = rankInfo[i];
        } else if (rankInfo[i].queueType === "RANKED_FLEX_SR") {
            flexInfo = rankInfo[i];
        }
    }

    // 검색 유저 최근 20게임 정보
    const MATCH_1_URL = `${process.env.LOL_BASE_ASIA_URL}match/v5/matches/by-puuid/${userInfo.puuid}/ids?start=0&count=${GAME_LIST_COUNT}`;
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

    // return res.send(gameListInfo);

    // console.log(gameListInfo);

    let gameDetails = [];
    team1 = [];
    team2 = [];

    for (let i = 0; i < gameList.length; i++) {
        const gameInfo = gameListInfo[i].info;
        for (let j = 0; j < GAME_PARTICIPANTS_COUNT; j++) {
            const participantsInfo = gameInfo.participants[j];

            if (participantsInfo.summonerName === userInfo.name) {
                gameDetails.push({
                    gameInfo: {
                        gameType: (gameInfo.queueId =
                            QUEUETYPE[gameInfo.queueId]),
                        gameCreation: gameInfo.gameCreation,
                        duration: gameInfo.gameDuration,
                        matchId: gameListInfo[i].metadata.matchId,
                    },
                    basicSummoner: {
                        summonerName: participantsInfo.summonerName,
                        champion:
                            participantsInfo.championName === "FiddleSticks"
                                ? "Fiddlesticks"
                                : participantsInfo.championName,
                        spells: {
                            first: SPELL[participantsInfo.summoner1Id],
                            second: SPELL[participantsInfo.summoner2Id],
                        },

                        rate: {
                            win:
                                participantsInfo.win === true ? "승리" : "패배",
                            kills: participantsInfo.kills,
                            deaths: participantsInfo.deaths,
                            assists: participantsInfo.assists,
                        },
                        items: {
                            item0: participantsInfo.item0,
                            item1: participantsInfo.item1,
                            item2: participantsInfo.item2,
                            item3: participantsInfo.item3,
                            item4: participantsInfo.item4,
                            item5: participantsInfo.item5,
                            itemSub: participantsInfo.item6,
                        },
                        runes: {
                            main: {
                                style: RUNE[
                                    participantsInfo.perks.styles[0].style
                                ],
                                rune1: RUNE[
                                    participantsInfo.perks.styles[0]
                                        .selections[0].perk
                                ],
                                rune2: RUNE[
                                    participantsInfo.perks.styles[0]
                                        .selections[1].perk
                                ],
                                rune3: RUNE[
                                    participantsInfo.perks.styles[0]
                                        .selections[2].perk
                                ],
                                rune4: RUNE[
                                    participantsInfo.perks.styles[0]
                                        .selections[3].perk
                                ],
                            },
                            sub: {
                                style: RUNE[
                                    participantsInfo.perks.styles[1].style
                                ],
                                rune1: RUNE[
                                    participantsInfo.perks.styles[1]
                                        .selections[0].perk
                                ],
                                rune2: RUNE[
                                    participantsInfo.perks.styles[1]
                                        .selections[1].perk
                                ],
                            },
                        },
                    },
                });
            }

            if (participantsInfo.teamId === 100) {
                team1.push({
                    gameInfo: {
                        matchId: gameListInfo[i].metadata.matchId,
                    },
                    basicSummoner: {
                        summonerName: participantsInfo.summonerName,
                        champion:
                            participantsInfo.championName === "FiddleSticks"
                                ? "Fiddlesticks"
                                : participantsInfo.championName,
                        champLevel: participantsInfo.champLevel,
                        minionKills:
                            participantsInfo.neutralMinionsKilled +
                            participantsInfo.totalMinionsKilled,
                        getGold: participantsInfo.goldEarned,

                        spells: {
                            first: SPELL[participantsInfo.summoner1Id],
                            second: SPELL[participantsInfo.summoner2Id],
                        },
                        rate: {
                            win:
                                participantsInfo.win === true ? "승리" : "패배",
                            kills: participantsInfo.kills,
                            deaths: participantsInfo.deaths,
                            assists: participantsInfo.assists,
                        },
                        items: {
                            item0: participantsInfo.item0,
                            item1: participantsInfo.item1,
                            item2: participantsInfo.item2,
                            item3: participantsInfo.item3,
                            item4: participantsInfo.item4,
                            item5: participantsInfo.item5,
                            itemSub: participantsInfo.item6,
                        },
                        runes: {
                            main: {
                                style: RUNE[
                                    participantsInfo.perks.styles[0].style
                                ],
                            },
                            sub: {
                                style: RUNE[
                                    participantsInfo.perks.styles[1].style
                                ],
                            },
                        },
                    },
                });
            }
            if (participantsInfo.teamId === 200) {
                team2.push({
                    gameInfo: {
                        matchId: gameListInfo[i].metadata.matchId,
                    },
                    basicSummoner: {
                        summonerName: participantsInfo.summonerName,
                        champion:
                            participantsInfo.championName === "FiddleSticks"
                                ? "Fiddlesticks"
                                : participantsInfo.championName,
                        champLevel: participantsInfo.champLevel,
                        minionKills:
                            participantsInfo.neutralMinionsKilled +
                            participantsInfo.totalMinionsKilled,
                        getGold: participantsInfo.goldEarned,
                        spells: {
                            first: SPELL[participantsInfo.summoner1Id],
                            second: SPELL[participantsInfo.summoner2Id],
                        },

                        rate: {
                            win:
                                participantsInfo.win === true ? "승리" : "패배",
                            kills: participantsInfo.kills,
                            deaths: participantsInfo.deaths,
                            assists: participantsInfo.assists,
                        },
                        items: {
                            item0: participantsInfo.item0,
                            item1: participantsInfo.item1,
                            item2: participantsInfo.item2,
                            item3: participantsInfo.item3,
                            item4: participantsInfo.item4,
                            item5: participantsInfo.item5,
                            itemSub: participantsInfo.item6,
                        },
                        runes: {
                            main: {
                                style: RUNE[
                                    participantsInfo.perks.styles[0].style
                                ],
                            },
                            sub: {
                                style: RUNE[
                                    participantsInfo.perks.styles[1].style
                                ],
                            },
                        },
                    },
                });
            }
        }
    }

    // return res.send(team2);

    // console.log(gameDetails);
    // return res.send(flexInfo);

    return res.render("search", {
        userInfo,
        soloInfo,
        flexInfo,
        gameDetails,
    });
};
export const postSearch = (req, res) => {
    const {
        body: { btnId },
    } = req;

    const team = [[], []];

    for (let i = 0; i < team1.length; i++) {
        if (team1[i].gameInfo.matchId === btnId) {
            team[0].push(team1[i]);
        }
    }
    for (let i = 0; i < team2.length; i++) {
        if (team2[i].gameInfo.matchId === btnId) {
            team[1].push(team2[i]);
        }
    }

    res.send(team);

    // res.send(team2);
};
