import fetch from "node-fetch";

const QUEUETYPE = {
    400: "일반", //Normal Draft Pick
    420: "솔랭",
    430: "일반",
    440: "자랭",
    450: "칼바람",
    700: "clash",
    800: "ai", // Deprecated
    810: "ai", // Deprecated
    820: "ai", // Deprecated
    830: "ai",
    840: "ai",
    850: "ai",
    900: "urf",
    920: "포로왕",
    1020: "ofa",
    1300: "nbg",
    1400: "usb", // Ultimate Spellbook
    2000: "tut",
    2010: "tut",
    2020: "tut",
};

const SPELL = {
    1: "SummonerBoost",
    3: "SummonerExhaust",
    4: "SummonerFlash",
    6: "SummonerHaste",
    7: "SummonerHeal",
    11: "SummonerSmite",
    12: "SummonerTeleport",
    13: "SummonerMana",
    14: "SummonerDot",
    21: "SummonerBarrier",
    30: "SummonerPoroRecall",
    31: "SummonerPoroThrow",
    32: "SummonerSnowball",
    39: "SummonerSnowURFSnowball_Mark",
    54: "Summoner_UltBook_Placeholder",
};

const RUNE = {
    8000: "perk-images/Styles/7201_Precision.png",
    8005: "perk-images/Styles/Precision/PressTheAttack/PressTheAttack.png",
    8008: "perk-images/Styles/Precision/LethalTempo/LethalTempoTemp.png",
    8010: "perk-images/Styles/Precision/Conqueror/Conqueror.png",
    8014: "perk-images/Styles/Precision/CoupDeGrace/CoupDeGrace.png",
    8017: "perk-images/Styles/Precision/CutDown/CutDown.png",
    8021: "perk-images/Styles/Precision/FleetFootwork/FleetFootwork.png",
    8100: "perk-images/Styles/7200_Domination.png",
    8106: "perk-images/Styles/Domination/UltimateHunter/UltimateHunter.png",
    8112: "perk-images/Styles/Domination/Electrocute/Electrocute.png",
    8124: "perk-images/Styles/Domination/Predator/Predator.png",
    8128: "perk-images/Styles/Domination/DarkHarvest/DarkHarvest.png",
    8138: "perk-images/Styles/Domination/EyeballCollection/EyeballCollection.png",
    8143: "perk-images/Styles/Domination/SuddenImpact/SuddenImpact.png",
    8200: "perk-images/Styles/7202_Sorcery.png",
    8214: "perk-images/Styles/Sorcery/SummonAery/SummonAery.png",
    8229: "perk-images/Styles/Sorcery/ArcaneComet/ArcaneComet.png",
    8230: "perk-images/Styles/Sorcery/PhaseRush/PhaseRush.png",
    8242: "perk-images/Styles/Sorcery/Unflinching/Unflinching.png",
    8299: "perk-images/Styles/Sorcery/LastStand/LastStand.png",
    8300: "perk-images/Styles/7203_Whimsy.png",
    8304: "perk-images/Styles/Inspiration/MagicalFootwear/MagicalFootwear.png",
    8306: "perk-images/Styles/Inspiration/HextechFlashtraption/HextechFlashtraption.png",
    8313: "perk-images/Styles/Inspiration/PerfectTiming/PerfectTiming.png",
    8316: "perk-images/Styles/Inspiration/MinionDematerializer/MinionDematerializer.png",
    8321: "perk-images/Styles/Inspiration/FuturesMarket/FuturesMarket.png",
    8345: "perk-images/Styles/Inspiration/BiscuitDelivery/BiscuitDelivery.png",
    8347: "perk-images/Styles/Inspiration/CosmicInsight/CosmicInsight.png",
    8352: "perk-images/Styles/Inspiration/TimeWarpTonic/TimeWarpTonic.png",
    8351: "perk-images/Styles/Inspiration/GlacialAugment/GlacialAugment.png",
    8358: "perk-images/Styles/Inspiration/MasterKey/MasterKey.png",
    8360: "perk-images/Styles/Inspiration/UnsealedSpellbook/UnsealedSpellbook.png",
    8400: "perk-images/Styles/7204_Resolve.png",
    8401: "perk-images/Styles/Resolve/MirrorShell/MirrorShell.png",
    8410: "perk-images/Styles/Resolve/ApproachVelocity/ApproachVelocity.png",
    8429: "perk-images/Styles/Resolve/Conditioning/Conditioning.png",
    8437: "perk-images/Styles/Resolve/GraspOfTheUndying/GraspOfTheUndying.png",
    8439: "perk-images/Styles/Resolve/VeteranAftershock/VeteranAftershock.png",
    8444: "perk-images/Styles/Resolve/SecondWind/SecondWind.png",
    8446: "perk-images/Styles/Resolve/Demolish/Demolish.png",
    8451: "perk-images/Styles/Resolve/Overgrowth/Overgrowth.png",
    8453: "perk-images/Styles/Resolve/Revitalize/Revitalize.png",
    8463: "perk-images/Styles/Resolve/FontOfLife/FontOfLife.png",
    8465: "perk-images/Styles/Resolve/Guardian/Guardian.png",
    8473: "perk-images/Styles/Resolve/BonePlating/BonePlating.png",
    9101: "perk-images/Styles/Precision/Overheal.png",
    9103: "perk-images/Styles/Precision/LegendBloodline/LegendBloodline.png",
    9104: "perk-images/Styles/Precision/LegendAlacrity/LegendAlacrity.png",
    9105: "perk-images/Styles/Precision/LegendTenacity/LegendTenacity.png",
    9111: "perk-images/Styles/Precision/Triumph.png",
    9923: "perk-images/Styles/Domination/HailOfBlades/HailOfBlades.png",
};

export const getSearch = async (req, res) => {
    const {
        query: { username },
    } = req;
    let MATCH_2_URL = [];
    let gameListInfo = [];

    // return res.end();

    // return res.render("search");

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

    // console.log(gameListInfo);

    let test = [];

    for (let i = 0; i < gameListInfo.length; i++) {
        for (let j = 0; j < gameListInfo[i].info.participants.length; j++) {
            if (
                gameListInfo[i].info.participants[j].summonerName ===
                userInfo.name
            ) {
                test.push(
                    Array(
                        gameListInfo[i].info.participants[j].win === true
                            ? "승리"
                            : "패배",
                        (gameListInfo[i].info.queueId =
                            QUEUETYPE[gameListInfo[i].info.queueId]),
                        gameListInfo[i].info.gameDuration,
                        gameListInfo[i].info.gameCreation,
                        gameListInfo[i].info.participants[j].championName,
                        gameListInfo[i].info.participants[j].item0,
                        gameListInfo[i].info.participants[j].item1,
                        gameListInfo[i].info.participants[j].item2,
                        gameListInfo[i].info.participants[j].item3,
                        gameListInfo[i].info.participants[j].item4,
                        gameListInfo[i].info.participants[j].item5,
                        gameListInfo[i].info.participants[j].item6,
                        gameListInfo[i].info.participants[j].kills,
                        gameListInfo[i].info.participants[j].deaths,
                        gameListInfo[i].info.participants[j].assists,
                        (gameListInfo[i].info.participants[j].summoner1Id =
                            SPELL[
                                gameListInfo[i].info.participants[j].summoner1Id
                            ]),
                        (gameListInfo[i].info.participants[j].summoner2Id =
                            SPELL[
                                gameListInfo[i].info.participants[j].summoner2Id
                            ]),
                        (gameListInfo[i].info.participants[
                            j
                        ].perks.styles[0].selections[0].perk =
                            RUNE[
                                gameListInfo[i].info.participants[
                                    j
                                ].perks.styles[0].selections[0].perk
                            ]),
                        (gameListInfo[i].info.participants[
                            j
                        ].perks.styles[0].selections[1].perk =
                            RUNE[
                                gameListInfo[i].info.participants[
                                    j
                                ].perks.styles[0].selections[1].perk
                            ]),
                        (gameListInfo[i].info.participants[
                            j
                        ].perks.styles[0].selections[2].perk =
                            RUNE[
                                gameListInfo[i].info.participants[
                                    j
                                ].perks.styles[0].selections[2].perk
                            ]),
                        (gameListInfo[i].info.participants[
                            j
                        ].perks.styles[0].selections[3].perk =
                            RUNE[
                                gameListInfo[i].info.participants[
                                    j
                                ].perks.styles[0].selections[3].perk
                            ]),
                        (gameListInfo[i].info.participants[
                            j
                        ].perks.styles[1].selections[0].perk =
                            RUNE[
                                gameListInfo[i].info.participants[
                                    j
                                ].perks.styles[1].selections[0].perk
                            ]),
                        (gameListInfo[i].info.participants[
                            j
                        ].perks.styles[1].selections[1].perk =
                            RUNE[
                                gameListInfo[i].info.participants[
                                    j
                                ].perks.styles[1].selections[1].perk
                            ])
                    )
                );
            }
        }
    }

    // console.log(test[0]);
    // return res.send(gameListInfo);

    return res.render("search", { userInfo, soloInfo, flexInfo, test });
};
export const postSearch = (req, res) => {
    console.log(req.body);
    console.log(req.params);
};
