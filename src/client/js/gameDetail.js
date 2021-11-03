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
            team1_tbody_td[i][j].innerText = "asd";
        }
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

    latestList.forEach((element) => {
        if (element.dataset.id === btnId) {
            element.appendChild(team1_table);
        }
    });

    targetBtn.removeEventListener("click", handleDetailShow);
    targetBtn.addEventListener("click", function handleDetailHide(e) {
        team1_table.classList.add("hidden");
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
