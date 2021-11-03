const latestList = document.querySelectorAll("#latestList");
const detailBtn = document.querySelectorAll("#detailBtn");

const theadList = [
    "룬스펠",
    "소환사 정보",
    "아이템",
    "킬뎃",
    "미니언킬",
    "개인골드",
];

const showDetail = (teamList, targetBtn, btnId) => {
    let team1 = teamList[0];
    let team2 = teamList[1];

    const hr = document.createElement("hr");

    const team1_table = document.createElement("table");
    team1_table.classList.add("table", "detail__table", "team1");

    const team1_thead = document.createElement("thead");
    const team1_thead_tr = document.createElement("tr");
    let team1_thead_td = [];

    for (let i = 0; i < 6; i++) {
        team1_thead_td[i] = document.createElement("td");
        team1_thead_td[i].innerText = theadList[i];
        team1_thead_tr.appendChild(team1_thead_td[i]);
    }

    team1_thead.appendChild(team1_thead_tr);

    const team1_tbody = document.createElement("tbody");

    let team1_tbody_tr = [];
    let team1_tbody_td = [[], [], [], [], []];

    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 6; j++) {
            team1_tbody_td[i][j] = document.createElement("td");
        }
    }

    console.log(team1[2]);

    for (let i = 0; i < 5; i++) {
        const td1_div1 = document.createElement("div");
        const td1_div2 = document.createElement("div");
        const td1_div2_img = document.createElement("img");
        const td1_div3 = document.createElement("div");
        const td1_div3_img1 = document.createElement("img");
        const td1_div3_img2 = document.createElement("img");

        td1_div1.classList.add("rune-spell");
        td1_div2.classList.add("runeStyle");
        td1_div3.classList.add("spell");

        td1_div2_img.src = `https://ddragon.leagueoflegends.com/cdn/img/${team1[i].basicSummoner.runes.main.style}`;
        td1_div3_img1.src = `http://ddragon.leagueoflegends.com/cdn/11.21.1/img/spell/${team1[i].basicSummoner.spells.first}.png`;
        td1_div3_img2.src = `http://ddragon.leagueoflegends.com/cdn/11.21.1/img/spell/${team1[i].basicSummoner.spells.second}.png`;

        td1_div2.appendChild(td1_div2_img);
        td1_div3.appendChild(td1_div3_img1);
        td1_div3.appendChild(td1_div3_img2);

        td1_div1.appendChild(td1_div2);
        td1_div1.appendChild(td1_div3);

        team1_tbody_td[i][0].appendChild(td1_div1);

        const td2_div1 = document.createElement("div");
        const td2_div1_span1 = document.createElement("span");
        const td2_div1_img1 = document.createElement("img");
        const td2_div1_span2 = document.createElement("span");

        td2_div1.classList.add("championInfo");
        td2_div1_span1.classList.add("level");
        td2_div1_span2.classList.add("summonerName");

        td2_div1_span1.innerText = `${team1[i].basicSummoner.champLevel}`;
        td2_div1_span2.innerText = `${team1[i].basicSummoner.summonerName}`;

        td2_div1_img1.src = `http://ddragon.leagueoflegends.com/cdn/11.21.1/img/champion/${team1[i].basicSummoner.champion}.png`;

        td2_div1.appendChild(td2_div1_span1);
        td2_div1.appendChild(td2_div1_img1);
        td2_div1.appendChild(td2_div1_span2);

        team1_tbody_td[i][1].appendChild(td2_div1);

        const td3_div1 = document.createElement("div");
        const td3_div1_img1 = document.createElement("img");
        const td3_div1_img2 = document.createElement("img");
        const td3_div1_img3 = document.createElement("img");
        const td3_div1_img4 = document.createElement("img");
        const td3_div1_img5 = document.createElement("img");
        const td3_div1_img6 = document.createElement("img");
        const td3_div1_img7 = document.createElement("img");

        td3_div1.classList.add("items");
        td3_div1_img1.src = `http://ddragon.leagueoflegends.com/cdn/11.21.1/img/item/${team1[i].basicSummoner.items.item0}.png`;
        td3_div1_img2.src = `http://ddragon.leagueoflegends.com/cdn/11.21.1/img/item/${team1[i].basicSummoner.items.item1}.png`;
        td3_div1_img3.src = `http://ddragon.leagueoflegends.com/cdn/11.21.1/img/item/${team1[i].basicSummoner.items.item2}.png`;
        td3_div1_img4.src = `http://ddragon.leagueoflegends.com/cdn/11.21.1/img/item/${team1[i].basicSummoner.items.item3}.png`;
        td3_div1_img5.src = `http://ddragon.leagueoflegends.com/cdn/11.21.1/img/item/${team1[i].basicSummoner.items.item4}.png`;
        td3_div1_img6.src = `http://ddragon.leagueoflegends.com/cdn/11.21.1/img/item/${team1[i].basicSummoner.items.item5}.png`;
        td3_div1_img7.src = `http://ddragon.leagueoflegends.com/cdn/11.21.1/img/item/${team1[i].basicSummoner.items.itemSub}.png`;

        td3_div1.appendChild(td3_div1_img1);
        td3_div1.appendChild(td3_div1_img2);
        td3_div1.appendChild(td3_div1_img3);
        td3_div1.appendChild(td3_div1_img4);
        td3_div1.appendChild(td3_div1_img5);
        td3_div1.appendChild(td3_div1_img6);
        td3_div1.appendChild(td3_div1_img7);

        team1_tbody_td[i][2].appendChild(td3_div1);

        const td4_div1 = document.createElement("div");
        const td4_div1_span = document.createElement("span");
        td4_div1.classList.add("grade");
        td4_div1_span.innerText = `${team1[i].basicSummoner.rate.kills} / ${team1[i].basicSummoner.rate.deaths} / ${team1[i].basicSummoner.rate.deaths}`;
        td4_div1.appendChild(td4_div1_span);
        team1_tbody_td[i][3].appendChild(td4_div1);

        const td5_div1 = document.createElement("div");
        const td5_div1_span = document.createElement("span");
        td5_div1.classList.add("minionKills");
        td5_div1_span.innerText = `${team1[i].basicSummoner.minionKills}`;
        td5_div1.appendChild(td5_div1_span);
        team1_tbody_td[i][4].appendChild(td5_div1);

        const td6_div1 = document.createElement("div");
        const td6_div1_span = document.createElement("span");
        td6_div1.classList.add("gold");
        td6_div1_span.innerText = `${team1[i].basicSummoner.getGold}`;
        td6_div1.appendChild(td6_div1_span);
        team1_tbody_td[i][5].appendChild(td6_div1);
    }

    for (let i = 0; i < 5; i++) {
        team1_tbody_tr[i] = document.createElement("tr");
    }

    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 6; j++) {
            team1_tbody_tr[i].appendChild(team1_tbody_td[i][j]);
        }
    }

    for (let i = 0; i < 5; i++) {
        team1_tbody.appendChild(team1_tbody_tr[i]);
    }

    team1_table.appendChild(team1_thead);
    team1_table.appendChild(team1_tbody);

    ///////////////////

    const team2_table = document.createElement("table");
    team2_table.classList.add("table", "detail__table", "team2");

    const team2_thead = document.createElement("thead");
    const team2_thead_tr = document.createElement("tr");
    let team2_thead_td = [];

    for (let i = 0; i < 6; i++) {
        team2_thead_td[i] = document.createElement("td");
        team2_thead_td[i].innerText = theadList[i];
        team2_thead_tr.appendChild(team2_thead_td[i]);
    }

    team2_thead.appendChild(team2_thead_tr);

    const team2_tbody = document.createElement("tbody");

    let team2_tbody_tr = [];
    let team2_tbody_td = [[], [], [], [], []];

    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 6; j++) {
            team2_tbody_td[i][j] = document.createElement("td");
        }
    }

    console.log(team2[2]);

    for (let i = 0; i < 5; i++) {
        const td1_div1 = document.createElement("div");
        const td1_div2 = document.createElement("div");
        const td1_div2_img = document.createElement("img");
        const td1_div3 = document.createElement("div");
        const td1_div3_img1 = document.createElement("img");
        const td1_div3_img2 = document.createElement("img");

        td1_div1.classList.add("rune-spell");
        td1_div2.classList.add("runeStyle");
        td1_div3.classList.add("spell");

        td1_div2_img.src = `https://ddragon.leagueoflegends.com/cdn/img/${team2[i].basicSummoner.runes.main.style}`;
        td1_div3_img1.src = `http://ddragon.leagueoflegends.com/cdn/11.21.1/img/spell/${team2[i].basicSummoner.spells.first}.png`;
        td1_div3_img2.src = `http://ddragon.leagueoflegends.com/cdn/11.21.1/img/spell/${team2[i].basicSummoner.spells.second}.png`;

        td1_div2.appendChild(td1_div2_img);
        td1_div3.appendChild(td1_div3_img1);
        td1_div3.appendChild(td1_div3_img2);

        td1_div1.appendChild(td1_div2);
        td1_div1.appendChild(td1_div3);

        team2_tbody_td[i][0].appendChild(td1_div1);

        const td2_div1 = document.createElement("div");
        const td2_div1_span1 = document.createElement("span");
        const td2_div1_img1 = document.createElement("img");
        const td2_div1_span2 = document.createElement("span");

        td2_div1.classList.add("championInfo");
        td2_div1_span1.classList.add("level");
        td2_div1_span2.classList.add("summonerName");

        td2_div1_span1.innerText = `${team2[i].basicSummoner.champLevel}`;
        td2_div1_span2.innerText = `${team2[i].basicSummoner.summonerName}`;

        td2_div1_img1.src = `http://ddragon.leagueoflegends.com/cdn/11.21.1/img/champion/${team2[i].basicSummoner.champion}.png`;

        td2_div1.appendChild(td2_div1_span1);
        td2_div1.appendChild(td2_div1_img1);
        td2_div1.appendChild(td2_div1_span2);

        team2_tbody_td[i][1].appendChild(td2_div1);

        const td3_div1 = document.createElement("div");
        const td3_div1_img1 = document.createElement("img");
        const td3_div1_img2 = document.createElement("img");
        const td3_div1_img3 = document.createElement("img");
        const td3_div1_img4 = document.createElement("img");
        const td3_div1_img5 = document.createElement("img");
        const td3_div1_img6 = document.createElement("img");
        const td3_div1_img7 = document.createElement("img");

        td3_div1.classList.add("items");
        td3_div1_img1.src = `http://ddragon.leagueoflegends.com/cdn/11.21.1/img/item/${team2[i].basicSummoner.items.item0}.png`;
        td3_div1_img2.src = `http://ddragon.leagueoflegends.com/cdn/11.21.1/img/item/${team2[i].basicSummoner.items.item1}.png`;
        td3_div1_img3.src = `http://ddragon.leagueoflegends.com/cdn/11.21.1/img/item/${team2[i].basicSummoner.items.item2}.png`;
        td3_div1_img4.src = `http://ddragon.leagueoflegends.com/cdn/11.21.1/img/item/${team2[i].basicSummoner.items.item3}.png`;
        td3_div1_img5.src = `http://ddragon.leagueoflegends.com/cdn/11.21.1/img/item/${team2[i].basicSummoner.items.item4}.png`;
        td3_div1_img6.src = `http://ddragon.leagueoflegends.com/cdn/11.21.1/img/item/${team2[i].basicSummoner.items.item5}.png`;
        td3_div1_img7.src = `http://ddragon.leagueoflegends.com/cdn/11.21.1/img/item/${team2[i].basicSummoner.items.itemSub}.png`;

        td3_div1.appendChild(td3_div1_img1);
        td3_div1.appendChild(td3_div1_img2);
        td3_div1.appendChild(td3_div1_img3);
        td3_div1.appendChild(td3_div1_img4);
        td3_div1.appendChild(td3_div1_img5);
        td3_div1.appendChild(td3_div1_img6);
        td3_div1.appendChild(td3_div1_img7);

        team2_tbody_td[i][2].appendChild(td3_div1);

        const td4_div1 = document.createElement("div");
        const td4_div1_span = document.createElement("span");
        td4_div1.classList.add("grade");
        td4_div1_span.innerText = `${team2[i].basicSummoner.rate.kills} / ${team2[i].basicSummoner.rate.deaths} / ${team2[i].basicSummoner.rate.deaths}`;
        td4_div1.appendChild(td4_div1_span);
        team2_tbody_td[i][3].appendChild(td4_div1);

        const td5_div1 = document.createElement("div");
        const td5_div1_span = document.createElement("span");
        td5_div1.classList.add("minionKills");
        td5_div1_span.innerText = `${team2[i].basicSummoner.minionKills}`;
        td5_div1.appendChild(td5_div1_span);
        team2_tbody_td[i][4].appendChild(td5_div1);

        const td6_div1 = document.createElement("div");
        const td6_div1_span = document.createElement("span");
        td6_div1.classList.add("gold");
        td6_div1_span.innerText = `${team2[i].basicSummoner.getGold}`;
        td6_div1.appendChild(td6_div1_span);
        team2_tbody_td[i][5].appendChild(td6_div1);
    }

    for (let i = 0; i < 5; i++) {
        team2_tbody_tr[i] = document.createElement("tr");
    }

    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 6; j++) {
            team2_tbody_tr[i].appendChild(team2_tbody_td[i][j]);
        }
    }

    for (let i = 0; i < 5; i++) {
        team2_tbody.appendChild(team2_tbody_tr[i]);
    }

    team2_table.appendChild(team2_thead);
    team2_table.appendChild(team2_tbody);

    const division = document.createElement("div");
    division.classList.add("division");
    division.innerText = "VS";

    if (team1[0].basicSummoner.rate.win === "승리") {
        team1_table.style.background = "#A3CFEC";
        team2_table.style.background = "#E2B6B3";
    } else {
        team1_table.style.background = "#E2B6B3";
        team2_table.style.background = "#A3CFEC";
    }

    latestList.forEach((element) => {
        if (element.dataset.id === btnId) {
            element.appendChild(hr);
            element.appendChild(team1_table);
            element.appendChild(division);
            element.appendChild(team2_table);
        }
    });

    targetBtn.removeEventListener("click", handleDetailShow);
    targetBtn.addEventListener("click", function handleDetailHide(e) {
        hr.remove();
        team1_table.remove();
        division.remove();
        team2_table.remove();
        targetBtn.addEventListener("click", handleDetailShow);
    });
};

const handleDetailShow = async (event) => {
    const {
        target: {
            dataset: { id: btnId },
        },
    } = event;
    const { target: targetBtn } = event;
    let response;

    for (let i = 0; i < latestList.length; i++) {
        if (btnId === latestList[i].dataset.id) {
            response = await fetch(`/summoner/`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ btnId }),
            });
        }
    }
    const teamList = await response.json();

    showDetail(teamList, targetBtn, btnId);
};

detailBtn.forEach((element) => {
    element.addEventListener("click", handleDetailShow);
});
