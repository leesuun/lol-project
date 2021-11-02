const latestList = document.querySelectorAll("#latestList");
const detailBtn = document.querySelectorAll("#detailBtn");

const showDetail = (latestList) => {
    const hr = document.createElement("hr");
    const table = document.createElement("table");
    latestList.appendChild(hr);
};
const handleDetailClick = async (event) => {
    const {
        target: {
            dataset: { id: btnId },
        },
    } = event;
    let response;

    for (let i = 0; i < latestList.length; i++) {
        if (btnId === latestList[i].dataset.id) {
            showDetail(latestList[i]);

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
    console.log(teamList);
};

detailBtn.forEach((element) => {
    element.addEventListener("click", handleDetailClick);
});
